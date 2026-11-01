import { ref, computed, watch } from "vue";
import { readJSON, writeJSON } from "../utils/storage";
import { useAuth } from "./useAuth";

const store = ref(readJSON("ds_progress", {}));
watch(store, (v) => writeJSON("ds_progress", v), { deep: true });

export function useProgress() {
  const { user } = useAuth();
  const key = computed(() => user.value?.id || "guest");
  const completed = computed(() => store.value[key.value] || []);

  const isDone = (topicId) => completed.value.includes(topicId);

  const toggle = (topicId) => {
    const list = [...completed.value];
    const i = list.indexOf(topicId);
    if (i >= 0) list.splice(i, 1);
    else list.push(topicId);
    store.value[key.value] = list;
  };

  return { completed, isDone, toggle };
}

// ---------- Quiz results ----------
const results = ref(readJSON("ds_results", []));
watch(results, (v) => writeJSON("ds_results", v), { deep: true });

export function useResults() {
  const addResult = (r) =>
    results.value.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      ...r,
    });
  const clearResults = () => (results.value = []);
  return { results, addResult, clearResults };
}
