import { ComputedRef, ref } from "vue";

export function useSearch(
  data: ComputedRef<
    {
      title: string;
      tags: string[];
    }[]
  >
) {
  const keyWord = ref("");
  const searchResult = ref<string[]>([]);

  const onSearch = () => {
    const result = data.value.map((e) => e.title).filter((m) => m.includes(keyWord.value));
    searchResult.value = result;
  };

  return {
    keyWord,
    searchResult,
    onSearch
  };
}
