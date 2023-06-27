<template>
  <div>
    <loadDynamicUrlPDF></loadDynamicUrlPDF>
    <ClientOnly v-if="false" fallback-tag="span" fallback="Loading Component">
      <pdf-render></pdf-render>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>