import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  // getters
  const count = ref(0);
  const double = computed(() => count.value * 2);

  // actions
  const increment = () => {
    count.value++;
  };
  const $reset = () => {
    count.value = 0;
  };
  return { count, increment, $reset, double };
});
