<template>
  <div>
    <loadDynamicUrlPDF v-show="!isSubmitted" @submitted="isLoading"
      @loadingPercetage="(percentage) => loadingPercentage = percentage">
    </loadDynamicUrlPDF>
    <loading v-show="isSubmitted" :progress="loadingPercentage"></loading>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Loading from "../components/loading.vue";
import loadDynamicUrlPDF from "../components/loadDynamicUrlPDF.vue";

const isSubmitted = ref(false)
const loadingPercentage = ref(0)

function isLoading(isSubmit) {
  loadingPercentage.value = 0
  isSubmitted.value = isSubmit
}

</script>

<style scoped></style>