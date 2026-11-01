<script setup>
import { ref, computed } from 'vue'
import { Users, BookOpen, ListChecks, Trophy, Trash2, Pencil, Plus } from 'lucide-vue-next'
import { modules } from '../data/modules'
import { useAuth } from '../composables/useAuth'
import { useContent } from '../composables/useContent'
import { useResults } from '../composables/useProgress'

const { users, user, deleteUser, setRole } = useAuth()
const { topics, questions, saveTopic, deleteTopic, saveQuestion, deleteQuestion, resetContent } = useContent()
const { results, clearResults } = useResults()

const tab = ref('overview')
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'users', label: 'Users' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'questions', label: 'Quiz Questions' },
  { id: 'results', label: 'Results' },
]

const moduleLabel = (id) => 'Module ' + (modules.find((m) => m.id === id)?.number ?? '?')
const fmt = (d) => new Date(d).toLocaleDateString()
const lines = (s) => s.split('\n').map((x) => x.trim()).filter(Boolean)
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// ---------- Overview ----------
const average = computed(() => {
  if (!results.value.length) return 0
  const sum = results.value.reduce((a, r) => a + (r.total ? r.score / r.total : 0), 0)
  return Math.round((sum / results.value.length) * 100)
})
const stats = computed(() => [
  { label: 'Registered users', value: users.value.length, icon: Users },
  { label: 'Lessons', value: topics.value.length, icon: BookOpen },
  { label: 'Quiz questions', value: questions.value.length, icon: ListChecks },
  { label: 'Quiz attempts', value: results.value.length, icon: Trophy },
])

// ---------- Users ----------
function removeUser(u) {
  if (confirm(`Delete user "${u.name}"?`)) deleteUser(u.id)
}

// ---------- Lessons ----------
const topicForm = ref(null)
const topicError = ref('')

function openTopic(t) {
  topicError.value = ''
  topicForm.value = t
    ? {
        ...t,
        pointsText: t.points.join('\n'),
        examplesText: t.examples.join('\n'),
        tipsText: t.tips.join('\n'),
        takeawaysText: t.takeaways.join('\n'),
      }
    : {
        id: '', moduleId: modules[0].id, title: '', description: '', introduction: '', explanation: '',
        pointsText: '', examplesText: '', tipsText: '', takeawaysText: '',
      }
}

function submitTopic() {
  const f = topicForm.value
  if (!f.title.trim() || !f.introduction.trim() || !f.explanation.trim()) {
    topicError.value = 'Title, introduction, and main explanation are required.'
    return
  }
  saveTopic({
    id: f.id || `${slug(f.title)}-${Date.now().toString(36)}`,
    moduleId: f.moduleId,
    title: f.title.trim(),
    description: f.description.trim() || f.introduction.trim().slice(0, 100),
    introduction: f.introduction.trim(),
    explanation: f.explanation.trim(),
    points: lines(f.pointsText),
    examples: lines(f.examplesText),
    tips: lines(f.tipsText),
    takeaways: lines(f.takeawaysText),
  })
  topicForm.value = null
}

function removeTopic(t) {
  if (confirm(`Delete lesson "${t.title}"?`)) deleteTopic(t.id)
}

// ---------- Questions ----------
const qForm = ref(null)
const qError = ref('')

function openQuestion(q) {
  qError.value = ''
  qForm.value = q
    ? { ...q, options: [...q.options] }
    : { id: '', moduleId: modules[0].id, question: '', options: ['', '', '', ''], answer: 0, explanation: '' }
}

function submitQuestion() {
  const f = qForm.value
  if (!f.question.trim() || f.options.some((o) => !o.trim()) || !f.explanation.trim()) {
    qError.value = 'Fill in the question, all four options, and the explanation.'
    return
  }
  saveQuestion({
    id: f.id || 'q-' + Date.now().toString(36),
    moduleId: f.moduleId,
    question: f.question.trim(),
    options: f.options.map((o) => o.trim()),
    answer: Number(f.answer),
    explanation: f.explanation.trim(),
  })
  qForm.value = null
}

function removeQuestion(q) {
  if (confirm('Delete this question?')) deleteQuestion(q.id)
}

function resetAll() {
  if (confirm('Restore the original lessons and questions? Your edits will be lost.')) resetContent()
}
</script>

<template>
  <div class="bg-slate-50 dark:bg-navy-950 min-h-[70vh]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="text-3xl font-extrabold text-navy-900 dark:text-white">Admin Dashboard</h1>
      <p class="text-slate-500">Welcome, {{ user?.name }}</p>

      <div class="mt-6 flex flex-wrap gap-2 border-b border-slate-200 dark:border-white/10">
        <button
          v-for="t in tabs"
          :key="t.id"
          @click="tab = t.id"
          class="px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition"
          :class="tab === t.id ? 'border-cyan-400 text-cyan-600 dark:text-cyan-300' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'"
        >
          {{ t.label }}
        </button>
      </div>

      <section v-if="tab === 'overview'" class="mt-8">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="s in stats" :key="s.label" class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-5">
            <component :is="s.icon" :size="24" class="text-cyan-600 dark:text-cyan-300" />
            <p class="mt-3 text-3xl font-extrabold text-navy-900 dark:text-white">{{ s.value }}</p>
            <p class="text-sm text-slate-500">{{ s.label }}</p>
          </div>
        </div>
        <div class="mt-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-5">
          <p class="text-slate-600 dark:text-slate-300">
            Average quiz score: <span class="font-bold text-navy-900 dark:text-white">{{ average }}%</span>
          </p>
          <button class="btn-secondary mt-4 !py-2 text-sm" @click="resetAll">Restore original lessons &amp; questions</button>
        </div>
      </section>

      <section v-if="tab === 'users'" class="mt-8 overflow-x-auto rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10">
        <table class="w-full text-sm text-left">
          <thead class="text-slate-500 border-b border-slate-200 dark:border-white/10">
            <tr><th class="p-3">Name</th><th class="p-3">Email</th><th class="p-3">Role</th><th class="p-3">Joined</th><th class="p-3">Actions</th></tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-white/10 text-slate-700 dark:text-slate-300">
            <tr v-for="u in users" :key="u.id">
              <td class="p-3 font-medium">{{ u.name }}</td>
              <td class="p-3">{{ u.email }}</td>
              <td class="p-3">
                <span class="px-2 py-0.5 rounded-full text-xs font-semibold" :class="u.role === 'admin' ? 'bg-cyan-400 text-navy-900' : 'bg-slate-200 text-slate-700'">{{ u.role }}</span>
              </td>
              <td class="p-3">{{ fmt(u.createdAt) }}</td>
              <td class="p-3">
                <div v-if="u.id !== user?.id" class="flex gap-2">
                  <button class="btn-secondary !px-3 !py-1 text-xs" @click="setRole(u.id, u.role === 'admin' ? 'student' : 'admin')">
                    {{ u.role === 'admin' ? 'Make student' : 'Make admin' }}
                  </button>
                  <button class="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg" @click="removeUser(u)" aria-label="Delete user">
                    <Trash2 :size="16" />
                  </button>
                </div>
                <span v-else class="text-xs text-slate-400">You</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section v-if="tab === 'lessons'" class="mt-8">
        <button class="btn-primary" @click="openTopic(null)"><Plus :size="18" /> Add Lesson</button>

        <div v-if="topicForm" class="mt-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-6 space-y-4">
          <h2 class="font-bold text-navy-900 dark:text-white">{{ topicForm.id ? 'Edit' : 'New' }} lesson</h2>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block text-sm font-medium mb-1">Module</label>
              <select v-model="topicForm.moduleId" class="input">
                <option v-for="m in modules" :key="m.id" :value="m.id">Module {{ m.number }}: {{ m.title }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Title</label>
              <input v-model="topicForm.title" class="input" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Short description</label>
            <input v-model="topicForm.description" class="input" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Introduction</label>
            <textarea v-model="topicForm.introduction" rows="2" class="input"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Main explanation</label>
            <textarea v-model="topicForm.explanation" rows="4" class="input"></textarea>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block text-sm font-medium mb-1">Important points (one per line)</label>
              <textarea v-model="topicForm.pointsText" rows="4" class="input"></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Real-world examples (one per line)</label>
              <textarea v-model="topicForm.examplesText" rows="4" class="input"></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Safety tips (one per line)</label>
              <textarea v-model="topicForm.tipsText" rows="4" class="input"></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Key takeaways (one per line)</label>
              <textarea v-model="topicForm.takeawaysText" rows="4" class="input"></textarea>
            </div>
          </div>
          <p v-if="topicError" class="text-sm text-red-600">{{ topicError }}</p>
          <div class="flex gap-3">
            <button class="btn-primary" @click="submitTopic">Save Lesson</button>
            <button class="btn-secondary" @click="topicForm = null">Cancel</button>
          </div>
        </div>

        <ul class="mt-6 divide-y divide-slate-100 dark:divide-white/10 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10">
          <li v-for="t in topics" :key="t.id" class="flex items-center gap-3 p-4">
            <span class="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 shrink-0">{{ moduleLabel(t.moduleId) }}</span>
            <span class="flex-1 min-w-0 truncate font-medium text-slate-800 dark:text-slate-100">{{ t.title }}</span>
            <button class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10" @click="openTopic(t)" aria-label="Edit"><Pencil :size="16" /></button>
            <button class="p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10" @click="removeTopic(t)" aria-label="Delete"><Trash2 :size="16" /></button>
          </li>
        </ul>
      </section>

      <section v-if="tab === 'questions'" class="mt-8">
        <button class="btn-primary" @click="openQuestion(null)"><Plus :size="18" /> Add Question</button>

        <div v-if="qForm" class="mt-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-6 space-y-4">
          <h2 class="font-bold text-navy-900 dark:text-white">{{ qForm.id ? 'Edit' : 'New' }} question</h2>
          <div>
            <label class="block text-sm font-medium mb-1">Module</label>
            <select v-model="qForm.moduleId" class="input">
              <option v-for="m in modules" :key="m.id" :value="m.id">Module {{ m.number }}: {{ m.title }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Question</label>
            <input v-model="qForm.question" class="input" />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium">Options (select the correct one)</label>
            <div v-for="(o, i) in qForm.options" :key="i" class="flex items-center gap-3">
              <input type="radio" :value="i" v-model="qForm.answer" />
              <input v-model="qForm.options[i]" class="input" :placeholder="`Option ${i + 1}`" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Explanation</label>
            <textarea v-model="qForm.explanation" rows="2" class="input"></textarea>
          </div>
          <p v-if="qError" class="text-sm text-red-600">{{ qError }}</p>
          <div class="flex gap-3">
            <button class="btn-primary" @click="submitQuestion">Save Question</button>
            <button class="btn-secondary" @click="qForm = null">Cancel</button>
          </div>
        </div>

        <ul class="mt-6 divide-y divide-slate-100 dark:divide-white/10 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10">
          <li v-for="q in questions" :key="q.id" class="flex items-center gap-3 p-4">
            <span class="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 shrink-0">{{ moduleLabel(q.moduleId) }}</span>
            <span class="flex-1 min-w-0 text-slate-800 dark:text-slate-100">{{ q.question }}</span>
            <button class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10" @click="openQuestion(q)" aria-label="Edit"><Pencil :size="16" /></button>
            <button class="p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10" @click="removeQuestion(q)" aria-label="Delete"><Trash2 :size="16" /></button>
          </li>
        </ul>
      </section>

      <section v-if="tab === 'results'" class="mt-8">
        <button v-if="results.length" class="btn-secondary !py-2 text-sm" @click="clearResults()">Clear all results</button>
        <div class="mt-4 overflow-x-auto rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10">
          <table class="w-full text-sm text-left">
            <thead class="text-slate-500 border-b border-slate-200 dark:border-white/10">
              <tr><th class="p-3">User</th><th class="p-3">Quiz</th><th class="p-3">Score</th><th class="p-3">Date</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-white/10 text-slate-700 dark:text-slate-300">
              <tr v-for="r in results" :key="r.id">
                <td class="p-3 font-medium">{{ r.name }}</td>
                <td class="p-3">{{ r.moduleId === 'all' ? 'All modules' : moduleLabel(r.moduleId) }}</td>
                <td class="p-3">{{ r.score }} / {{ r.total }} ({{ r.total ? Math.round((r.score / r.total) * 100) : 0 }}%)</td>
                <td class="p-3">{{ fmt(r.date) }}</td>
              </tr>
              <tr v-if="!results.length"><td colspan="4" class="p-6 text-center text-slate-500">No quiz attempts yet.</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
