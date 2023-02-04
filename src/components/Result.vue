<script setup lang="ts">

const props = defineProps<{
  results: string[];
}>();

</script>

<template>
  <div class="w-4/5 fixed top-28 z-10 bg-warm-gray-200 border-solid border-rounded border-gray-200 shadow-lg shadow-gray-400">
    <ul class="list-none pl-2">
      <li class="h-8 hover:bg-gray-400 hover:cursor-pointer" v-for="item in props.results">
        <p>{{ item }}</p>
      </li>
  </ul>
  </div>
</template>

<style scoped></style>
