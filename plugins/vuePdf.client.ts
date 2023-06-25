import { VuePdf } from 'vue3-pdfjs/esm';
import type { NuxtApp } from "nuxt";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    nuxtApp.vueApp.use(VuePdf)
})