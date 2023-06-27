<template>
    <div class="flex h-screen items-center bg-slate-50">
        <div class="w-screen flex flex-wrap sm:px-8 md:px-32">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"> Loading </h1>
            <div class="mt-10 w-full bg-neutral-200 dark:bg-neutral-600">
                <div class="bg-indigo-500 p-0.5 text-center text-xs font-medium leading-none text-slate-100"
                    :style="`width: ${props.progress}`">
                    {{ props.progress }} %
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{ progress: number }>(), { progress: 0 })

</script>

<style scoped></style>