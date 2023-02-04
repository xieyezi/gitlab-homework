<script setup lang="ts">
import meta from "./metaData/data.json";
import Item from "./components/Item.vue";
import {NButton,NInputGroup, NInput ,NIcon } from "naive-ui";
import { Search } from "@vicons/carbon";
import { computed } from "vue";

const data = computed(() => meta.data);
</script>

<template>
  <div class="p-8 bg-white">
    <div class="mb-2">
      <n-input-group>
      <n-input placeholder="Search" />
      <n-button>
      <template #icon>
        <n-icon><search /></n-icon>
      </template>
    </n-button>
    </n-input-group>
    </div>
    <item v-for="item in data" :title="item.title" :tags="item.tags" :key="item.title" />
  </div>
</template>

<style scoped></style>
