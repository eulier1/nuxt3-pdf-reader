<template>
  <div>
    <ClientOnly fallback-tag="span" fallback="Loading Component">
      <pdf-render></pdf-render>
    </ClientOnly>
  </div>
</template>

<style>
html {
  background-color: #D9D9D9;
}
</style>