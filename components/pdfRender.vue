<template>
  <div>
    <div class="flex justify-center p-8 bg-zinc-50 fixed w-screen top-8 z-10">
      <pagination class=""></pagination>
    </div>

    <div class="mt-40 ml-8 mr-8 mb-8">
      <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VuePdf, createLoadingTask } from 'vue3-pdfjs';
import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

const pdfSrc = ref<VuePdfPropsType['src']>('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf')
const numOfPages = ref(0)

onMounted(() => {
  const loadingTask = createLoadingTask(pdfSrc.value)
  loadingTask.promise.then((pdf: PDFDocumentProxy) => {
    numOfPages.value = pdf.numPages
  })
})


</script>

<style scoped>
.pagination-container {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 1rem
}
</style>