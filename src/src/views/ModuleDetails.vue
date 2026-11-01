<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import TopicCard from '../components/TopicCard.vue'
import ProgressBar from '../components/ProgressBar.vue'
import { modules } from '../data/modules'
import { useContent } from '../composables/useContent'
import { useProgress } from '../composables/useProgress'

const route = useRoute()
const { topicsOf } = useContent()
const { completed } = useProgress()

const module = computed(() => modules.find((m) => m.id === route.params.moduleId))
const list = computed(() => topicsOf(route.params.moduleId))
const percent = computed(() => {
  if (!list.value.length) return 0
  const done = list.value.filter((t) => completed.value.includes(t.id)).length
  return Math.round((done / list.value.length) * 100)
})
</script>

<template>
  <div v-if="module" class="bg-slate-50 dark:bg-navy-950">
    <section class="bg-linear-to-br from-navy-950 to-navy-700 text-white py-14">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link to="/modules" class="inline-flex items-center gap-1 text-cyan-300 text-sm hover:underline">
          <ArrowLeft :size="16" /> Back to Modules
        </router-link>
        <p class="mt-4 text-cyan-300 font-semibold">Module {{ module.number }}</p>
        <h1 class="mt-1 text-3xl sm:text-4xl font-extrabold">{{ module.title }}</h1>
        <p class="mt-3 text-slate-300 max-w-2xl">{{ module.description }}</p>
        <div class="mt-6 max-w-md">
          <ProgressBar :value="percent" label="Module progress" />
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-navy-900 dark:text-white">{{ list.length }} Topics</h2>
      <div class="mt-6 grid gap-4">
        <TopicCard v-for="(t, i) in list" :key="t.id" :topic="t" :number="i + 1" />
        <p v-if="!list.length" class="text-slate-500">No topics in this module yet.</p>
      </div>
    </section>
  </div>

  <div v-else class="max-w-xl mx-auto py-24 text-center">
    <h1 class="text-2xl font-bold">Module not found</h1>
    <router-link to="/modules" class="btn-primary mt-6">Back to Modules</router-link>
  </div>
</template>
