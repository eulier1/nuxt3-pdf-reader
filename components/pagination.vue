<template>
    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <!-- <a href="#"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        </a> -->
        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
        <a v-for="page in pages" :key="page" href.prevent="#" @click="smoothScrolling(page)"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-100 focus:z-20 focus:outline-offset-0"
            :class="{ 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600': currentPage === page }
                ">
            {{ page }}
        </a>
        <!-- <a href="#"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
        </a> -->
    </nav>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
    pages: Number
}>()

const currentPage = ref(1)

function smoothScrolling(pageNumber: number) {
    const page: HTMLElement = document.getElementById(`vue-pdf-page-${pageNumber}`)
    currentPage.value = pageNumber
    console.log(page)
    if (page) {
        const offsetTop = page.offsetTop;
        window.scrollTo({
            top: offsetTop - 150,
            behavior: 'smooth'
        });
    }
}

</script>

<style scoped></style>