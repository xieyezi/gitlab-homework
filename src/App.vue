<script setup lang="ts">
import { computed, ref } from "vue";
import metaJSON from "./metaData/data.json";
import Item from "./components/Item.vue";
import Result from "./components/Result.vue";
import { NButton, NInputGroup, NInput, NIcon } from "naive-ui";
import { Search } from "@vicons/carbon";
import { useDrag } from "./hooks/useDrag";
import { useSearch } from "./hooks/useSearch";

const meta = ref(metaJSON);
const data = computed(() => meta.value.data);
const { start, enter, over } = useDrag(meta);
const { keyWord, searchResult, onSearch } = useSearch(data);

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
    <div class="mb-4">
      <n-input-group>
        <n-input v-model:value="keyWord" placeholder="Search" @keyup.enter="onSearch" />
        <n-button @click="onSearch">
          <template #icon>
            <n-icon><search /></n-icon>
          </template>
        </n-button>
      </n-input-group>
      <result v-if="searchResult.length > 0" :results="searchResult" />
    </div>
    <item
      v-for="(item, index) in data"
      :title="item.title"
      :tags="item.tags"
      :key="item.title"
      :index="index"
      @item-add-tag="itemAddTag"
      @item-remove-tag="itemRemoveTag"
      @dragover="over"
      @dragstart="start"
      @dragenter="enter"
    />
  </div>
</template>

<style scoped></style>
