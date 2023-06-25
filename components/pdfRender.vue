<template>
  <div>
    <div class="flex justify-center p-8 bg-zinc-50 fixed w-screen top-8 z-10 shadow-xl">
      <pagination :pages="numOfPages" class=""></pagination>
    </div>

    <div class="mt-40">
      <VuePdf class="ml-8 mr-8 mb-8" v-for="page in numOfPages" :key="page" :id="page" :src="pdfSrc" :page="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VuePdf, createLoadingTask } from 'vue3-pdfjs/esm';
import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

const pdfSrc = ref<VuePdfPropsType['src']>('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf')
const numOfPages = ref(0)

onMounted(async () => {
  let docData = await getDocumentData(pdfSrc.value);
  const pdf = await createLoadingTask(docData).promise
  pdfSrc.value = docData
  numOfPages.value = pdf.numPages
  console.log(docData, pdf)
})

function getDocumentData(pdfPath: string): Promise<Uint8Array> {
  return new Promise<Uint8Array>(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', pdfPath);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
      resolve(new Uint8Array(xhr.response));
    };
    xhr.onerror = function () {
      reject(new Error('PDF is not loaded'));
    };
    xhr.send();
  });
}



</script>

<style scoped></style>