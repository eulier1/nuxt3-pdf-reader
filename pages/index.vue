<template>
  <div>

    <loadDynamicUrlPDF v-if="!pdfurl" @onURL="(url) => pdfurl = url">
    </loadDynamicUrlPDF>

    <div v-else>
      <ClientOnly fallback-tag="span" fallback="Loading Component">
        <pdf-render :url="pdfurl"></pdf-render>
      </ClientOnly>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Loading from "../components/loading.vue";
import loadDynamicUrlPDF from "../components/loadDynamicUrlPDF.vue";

const pdfurl = ref(null)

</script>

<style scoped></style>