<script setup>
import { ref, computed } from 'vue'
import { Trophy, RotateCcw } from 'lucide-vue-next'
import QuizCard from '../components/QuizCard.vue'
import ProgressBar from '../components/ProgressBar.vue'
import { modules } from '../data/modules'
import { useContent } from '../composables/useContent'
import { useAuth } from '../composables/useAuth'
import { useResults } from '../composables/useProgress'

const { questions } = useContent()
const { user } = useAuth()
const { results, addResult } = useResults()

const stage = ref('start') // start | playing | finished
const selectedModule = ref('all')
const list = ref([])
const current = ref(0)
const selected = ref(null)
const score = ref(0)
const answers = ref([])

const pool = computed(() =>
  selectedModule.value === 'all'
    ? questions.value
    : questions.value.filter((q) => q.moduleId === selectedModule.value),
)

const percent = computed(() => (list.value.length ? Math.round((score.value / list.value.length) * 100) : 0))
const progress = computed(() => (list.value.length ? Math.round((current.value / list.value.length) * 100) : 0))

const message = computed(() => {
  if (percent.value >= 80) return 'Excellent! You have a strong understanding of digital safety.'
  if (percent.value >= 50) return 'Good job! Review the lessons to strengthen your knowledge.'
  return 'Keep learning! Revisit the modules and try again.'
})

const breakdown = computed(() =>
  modules
    .map((m) => {
      const items = answers.value.filter((a) => a.moduleId === m.id)
      return { module: m, total: items.length, correct: items.filter((a) => a.correct).length }
    })
    .filter((b) => b.total > 0),
)

const myResults = computed(() => results.value.filter((r) => r.userId === user.value?.id).slice(0, 5))
const labelOf = (id) => (id === 'all' ? 'All modules' : 'Module ' + modules.find((m) => m.id === id)?.number)

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function start() {
  list.value = shuffle(pool.value)
  current.value = 0
  selected.value = null
  score.value = 0
  answers.value = []
  stage.value = 'playing'
}

function choose(i) {
  if (selected.value !== null) return
  selected.value = i
  const q = list.value[current.value]
  const correct = i === q.answer
  if (correct) score.value++
  answers.value.push({ moduleId: q.moduleId, correct })
}

function next() {
  if (current.value < list.value.length - 1) {
    current.value++
    selected.value = null
  } else {
    addResult({
      userId: user.value.id,
      name: user.value.name,
      moduleId: selectedModule.value,
      score: score.value,
      total: list.value.length,
    })
    stage.value = 'finished'
  }
}

function restart() {
  stage.value = 'start'
}
</script>

<template>
  <div class="bg-slate-50 dark:bg-navy-950 min-h-[70vh] py-12">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div v-if="stage === 'start'" class="space-y-8">
        <div class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-8 shadow-sm">
          <h1 class="text-3xl font-extrabold text-navy-900 dark:text-white">Knowledge Quiz</h1>
          <p class="mt-3 text-slate-600 dark:text-slate-400">
            Hi {{ user?.name }}! Test what you learned. Each question has four options and one correct answer.
            You will get feedback and an explanation after every answer.
          </p>

          <label class="block mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300">Choose a quiz</label>
          <select v-model="selectedModule" class="input mt-2">
            <option value="all">All modules</option>
            <option v-for="m in modules" :key="m.id" :value="m.id">Module {{ m.number }}: {{ m.title }}</option>
          </select>
          <p class="mt-2 text-sm text-slate-500">{{ pool.length }} questions</p>

          <button class="btn-primary mt-6" :disabled="!pool.length" @click="start">Start Quiz</button>
        </div>

        <div v-if="myResults.length" class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-6">
          <h2 class="font-bold text-navy-900 dark:text-white">Your recent attempts</h2>
          <ul class="mt-3 divide-y divide-slate-100 dark:divide-white/10">
            <li v-for="r in myResults" :key="r.id" class="py-2 flex justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>{{ labelOf(r.moduleId) }} · {{ new Date(r.date).toLocaleDateString() }}</span>
              <span class="font-semibold">{{ r.score }} / {{ r.total }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div v-else-if="stage === 'playing'" class="space-y-5">
        <ProgressBar :value="progress" label="Quiz progress" />
        <QuizCard
          :question="list[current]"
          :index="current"
          :total="list.length"
          :selected="selected"
          @select="choose"
          @next="next"
        />
      </div>

      <div v-else class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-8 text-center shadow-sm">
        <span class="inline-grid place-items-center w-16 h-16 rounded-full bg-cyan-400 text-navy-900">
          <Trophy :size="32" />
        </span>
        <h1 class="mt-4 text-3xl font-extrabold text-navy-900 dark:text-white">Quiz Complete!</h1>
        <p class="mt-2 text-5xl font-extrabold text-cyan-500">{{ score }} / {{ list.length }}</p>
        <p class="mt-1 text-slate-500">{{ percent }}% correct</p>
        <p class="mt-4 text-slate-700 dark:text-slate-300">{{ message }}</p>

        <div v-if="breakdown.length > 1" class="mt-8 text-left space-y-3">
          <h2 class="font-bold text-navy-900 dark:text-white">Results by module</h2>
          <ProgressBar
            v-for="b in breakdown"
            :key="b.module.id"
            :value="Math.round((b.correct / b.total) * 100)"
            :label="`Module ${b.module.number} (${b.correct}/${b.total})`"
          />
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <button class="btn-primary" @click="start"><RotateCcw :size="18" /> Restart Quiz</button>
          <button class="btn-secondary" @click="restart">Choose Another Quiz</button>
          <router-link to="/modules" class="btn-secondary">Review Lessons</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
