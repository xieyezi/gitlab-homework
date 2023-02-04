<script setup lang="ts">
import metaJSON from "./metaData/data.json";
import Item from "./components/Item.vue";
import { NButton, NInputGroup, NInput, NIcon } from "naive-ui";
import { Search } from "@vicons/carbon";
import { computed, ref } from "vue";

const meta = ref(metaJSON);
const data = computed(() => meta.value.data);

const itemAddTag = (title: string, value: string) => {
  const newData = data.value.map((item) => {
    if (item.title === title) {
      return {
        title,
        tags: [...item.tags, value]
      };
    }
    return item;
  });
  meta.value.data = newData;
};

const itemRemoveTag = (title: string, tag: string) => {
  const newData = data.value.map((item) => {
    if (item.title === title) {
      return {
        title,
        tags: item.tags.filter((e) => e !== tag)
      };
    }
    return item;
  });
  meta.value.data = newData;
};
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
    <item v-for="item in data" :title="item.title" :tags="item.tags" :key="item.title" @item-add-tag="itemAddTag" @item-remove-tag="itemRemoveTag" />
  </div>
</template>

<style scoped></style>
