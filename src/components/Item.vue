<script setup lang="ts">
import { ref } from "vue";
import Tag from "./Tag.vue";
import { NButton, NCard, NModal, NIcon, NInput } from "naive-ui";
import { AddFilled } from "@vicons/carbon";

const props = defineProps<{
  title: string;
  tags: string[];
  index: number;
}>();

const emit = defineEmits<{
  (e: "itemAddTag", title: string, value: string): void;
  (e: "itemRemoveTag", title: string, tag: string): void;
  (e: "dragstart", index: number): void;
  (e: "dragover", event: Event, index: number): void;
  (e: "dragenter", event: Event, index: number): void;
}>();

const inputValue = ref("");
const visiable = ref(false);

const showModal = () => (visiable.value = true);

const closeModal = () => {
  inputValue.value = "";
  visiable.value = false;
};

const addTag = () => {
  if (!inputValue.value) return;
  emit("itemAddTag", props.title, inputValue.value);
  closeModal();
};

const removeTag = (tag: string) => {
  emit("itemRemoveTag", props.title, tag);
};

const start = (index: number) => emit("dragstart", index);
const enter = (event: Event, index: number) => emit("dragenter", event, index);
const over = (event: Event, index: number) => emit("dragover", event, index);
</script>

<template>
  <div
    draggable="true"
    @dragstart="start(props.index)"
    @dragenter="enter($event, props.index)"
    @dragover="over($event, props.index)"
    class="bg-white hover:bg-gray-100 hover:cursor-pointer hover:shadow-lg h-22 w-full mb-2 p-2 border-solid border-rounded border-gray-200"
  >
    <p class="font-medium">{{ props.title }}</p>
    <div class="flex flex-row justify-start">
      <n-icon size="26" @click="showModal">
        <add-filled />
      </n-icon>
      <tag v-for="tag in props.tags" :tag="tag" :key="tag" @remove-tag="removeTag" />
    </div>
  </div>
  <n-modal v-model:show="visiable">
    <n-card style="width: 600px" title="Input the name of the tag you want to add" :bordered="false" closable role="dialog" @close="closeModal">
      <n-input v-model:value="inputValue" autofocus @keyup.enter="addTag" type="text" placeholder="Tag" />
      <template #action>
        <div class="flex flex-row justify-end">
          <n-button class="mr-2" @click="closeModal">Cancel</n-button>
          <n-button type="primary" @click="addTag"> Add Tags </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<style scoped></style>
