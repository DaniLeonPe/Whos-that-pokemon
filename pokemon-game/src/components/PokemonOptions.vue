<template>
  <section class="mt-5 flex flex-col">
    <button v-for="{name, id} in options" :key="id" 
    @click="$emit('selectedOption', id)"
    class="capitalize"
    :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/modules/pokemon/interface';

defineEmits<{
  selectedOption: [id: number]
}>();

interface Props{
  options: Pokemon[];
  blockSelection: boolean;
}


defineProps<Props>();
</script>

<style scoped>
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all duration-300 ease-in-out;
}
  </style>
