<template>
  <div>
    <loading v-if="!isLoading" class="relative z-20 top-0" :progress="loadingPercentage"></loading>

    <div v-else>
      <div class="flex justify-center p-8 bg-zinc-50 fixed w-screen top-8 z-10 shadow-xl">
        <pagination :pages="numOfPages" class=""></pagination>
      </div>

      <div class="mt-40">
        <VuePdf class="ml-8 mr-8 mb-8" v-for="page in numOfPages" :key="page" :id="page" :src="pdfSrc" :page="page" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, watch } from "vue";
import { VuePdf, createLoadingTask } from 'vue3-pdfjs/esm';
import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import axios from "axios";

const props = defineProps<{ url: string }>()
const isLoading = ref(false)
const loadingPercentage = ref(0)

const pdfSrc = ref<VuePdfPropsType['src']>('')
const numOfPages = ref(0)

watch(
  () => props.url,
  async (newValue, oldValue) => {
    isLoading.value = false
    loadingPercentage.value = 0

    const response = await axios({
      url: newValue,
      method: 'get',
      responseType: 'arraybuffer',
      onDownloadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
        loadingPercentage.value = Math.floor(progressEvent.loaded / progressEvent.total * 100)
      }
    })
    console.log(response)
    const pdf = await createLoadingTask(response.data).promise
    pdfSrc.value = response.data
    numOfPages.value = pdf.numPages
    console.log(response, pdf)
    setTimeout(() => {
      isLoading.value = true
    }, 1000)
  },
  { immediate: true }
)




</script>

<style scoped></style>