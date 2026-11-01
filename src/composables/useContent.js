import { ref, watch } from "vue";
import { readJSON, writeJSON } from "../utils/storage";
import { topics as seedTopics } from "../data/topics";
import { questions as seedQuestions } from "../data/questions";

const clone = (v) => JSON.parse(JSON.stringify(v));

const topics = ref(readJSON("ds_topics", clone(seedTopics)));
const questions = ref(readJSON("ds_questions", clone(seedQuestions)));

watch(topics, (v) => writeJSON("ds_topics", v), { deep: true });
watch(questions, (v) => writeJSON("ds_questions", v), { deep: true });

function upsert(list, item) {
  const i = list.value.findIndex((x) => x.id === item.id);
  if (i >= 0) list.value[i] = item;
  else list.value.push(item);
}

export function useContent() {
  const topicsOf = (moduleId) =>
    topics.value.filter((t) => t.moduleId === moduleId);
  const getTopic = (id) => topics.value.find((t) => t.id === id);

  const saveTopic = (t) => upsert(topics, t);
  const deleteTopic = (id) =>
    (topics.value = topics.value.filter((t) => t.id !== id));
  const saveQuestion = (q) => upsert(questions, q);
  const deleteQuestion = (id) =>
    (questions.value = questions.value.filter((q) => q.id !== id));

  const resetContent = () => {
    topics.value = clone(seedTopics);
    questions.value = clone(seedQuestions);
  };

  return {
    topics,
    questions,
    topicsOf,
    getTopic,
    saveTopic,
    deleteTopic,
    saveQuestion,
    deleteQuestion,
    resetContent,
  };
}
