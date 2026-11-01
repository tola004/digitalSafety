import { ref, watch } from 'vue'
import { readJSON, writeJSON } from '../utils/storage'
import { topics as seedTopics } from '../data/topics'
import { questions as seedQuestions } from '../data/questions'

const SEED_VERSION = 2 // increase this number whenever you add new seed content
const clone = (v) => JSON.parse(JSON.stringify(v))
const storedVersion = Number(localStorage.getItem('ds_seed_version') || 1)

// Load saved data; if the seed grew, append only the items that are missing
function load(key, seed) {
  const saved = readJSON(key, null)
  if (!Array.isArray(saved)) return clone(seed)
  if (storedVersion >= SEED_VERSION) return saved
  const have = new Set(saved.map((x) => x.id))
  return [...saved, ...clone(seed.filter((x) => !have.has(x.id)))]
}

const topics = ref(load('ds_topics', seedTopics))
const questions = ref(load('ds_questions', seedQuestions))

// Save the merged result right away, then remember the version
writeJSON('ds_topics', topics.value)
writeJSON('ds_questions', questions.value)
localStorage.setItem('ds_seed_version', String(SEED_VERSION))

watch(topics, (v) => writeJSON('ds_topics', v), { deep: true })
watch(questions, (v) => writeJSON('ds_questions', v), { deep: true })

function upsert(list, item) {
  const i = list.value.findIndex((x) => x.id === item.id)
  if (i >= 0) list.value[i] = item
  else list.value.push(item)
}

export function useContent() {
  const topicsOf = (moduleId) => topics.value.filter((t) => t.moduleId === moduleId)
  const getTopic = (id) => topics.value.find((t) => t.id === id)

  const saveTopic = (t) => upsert(topics, t)
  const deleteTopic = (id) => (topics.value = topics.value.filter((t) => t.id !== id))
  const saveQuestion = (q) => upsert(questions, q)
  const deleteQuestion = (id) => (questions.value = questions.value.filter((q) => q.id !== id))

  const resetContent = () => {
    topics.value = clone(seedTopics)
    questions.value = clone(seedQuestions)
  }

  return {
    topics, questions, topicsOf, getTopic,
    saveTopic, deleteTopic, saveQuestion, deleteQuestion, resetContent,
  }
}
