<template>
  <button @click="count += increment ?? 1">
    Count: {{ count }}
  </button>
</template>

<script lang="ts" setup>
import { numberField } from '#pruvious'

defineProps({
  increment: numberField(),
})

const count = ref(0)
</script>