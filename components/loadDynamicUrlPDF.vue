<template>
    <div>
        <form @submit.prevent="submit">
            <div class="flex h-screen items-center bg-slate-50">
                <div class="w-screen flex flex-wrap sm:pl-8 md:pl-32">
                    <h1 class="w-screen text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"> PDF Reader with Vue 3
                        & Nuxt 3 </h1>

                    <div class="mt-10 w-3/4 grid grid-cols-1 gap-x-6 gap-y-8">
                        <div class="col-span-2">
                            <label for="pdf-url" class="block text-sm font-medium leading-6 text-gray-900">Add PDF
                                Url (Demo URL Below)</label>
                            <div class="mt-2 ">
                                <input type="text" name="pdf-url" id="street-address" autocomplete="pdf-url"
                                    v-model="pdfurl"
                                    class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    <div class="w-screen mt-6 flex items-center justify-start gap-x-6">
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Load</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";

const emit = defineEmits<{
    (e: 'onURL', pdfURL: string): void
}>()

const pdfurl = ref("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf")

async function submit() {
    emit('onURL', pdfurl.value)
}

</script>

<style scoped></style>