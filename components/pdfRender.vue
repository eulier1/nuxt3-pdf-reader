<template>
    <div>
        <v-pagination :length="6" class="elevation-6 pt-4 pb-4 pagination-container bg-grey-lighten-5"></v-pagination>
        <div class="container">
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
.container {
  margin: 8rem 3rem;
}

.pagination-container {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 1rem
}


</style>