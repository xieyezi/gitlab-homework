<script setup lang="ts">
import Tag from "./Tag.vue";
import { NIcon } from "naive-ui";
import { AddFilled } from "@vicons/carbon";

defineProps<{
  title: string;
  tags: string[];
}>();
</script>

<template>
  <div class="bg-white hover:bg-gray-100 hover:cursor-pointer h-22 w-full mb-2 p-2 border-solid border-rounded border-gray-200">
    <p class="font-medium">{{ title }}</p>
    <div class="flex flex-row justify-start">
      <n-icon size="26">
        <add-filled />
      </n-icon>
      <tag v-for="tag in tags" :tag="tag" :key="tag" />
    </div>
  </div>
</template>

<style scoped></style>
