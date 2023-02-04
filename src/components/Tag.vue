<script setup lang="ts">
import { NIcon } from "naive-ui";
import { Close } from "@vicons/carbon";

defineProps<{
  tag: string;
}>();
</script>

<template>
  <div class="w-16 h-6 ml-4 border-rounded-1 shadow-md shadow-gray-400 bg-black text-white">
    <div class="flex flex-row justify-around items-center">
      <span class="text-xs">{{ tag }}</span>
      <n-icon size="20" class="cursor-default">
        <close />
      </n-icon>
    </div>
  </div>
</template>

<style scoped></style>
