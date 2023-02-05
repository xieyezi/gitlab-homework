import { Ref, ref } from "vue";

export function useDrag(meta: Ref<{ data: { title: string; tags: string[] }[] }>) {
  const target = ref<number>(-1);

  const start = (index: number) => {
    target.value = index;
  };

  const enter = (event: Event, index: number) => {
    event.preventDefault();
    if (target.value !== index) {
      const list = meta.value.data;
      const source = list[target.value];
      list.splice(target.value, 1);
      list.splice(index, 0, source);
      target.value = index;
    }
  };

  const over = (event: Event, index: number) => {
    event.preventDefault();
  };

  return {
    start,
    enter,
    over
  };
}
