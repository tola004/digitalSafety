<script setup>
import { computed } from 'vue'
import { Check, ArrowRight } from 'lucide-vue-next'
import { useProgress } from '../composables/useProgress'

const props = defineProps({
  topic: { type: Object, required: true },
  number: { type: Number, required: true },
  moduleLabel: { type: String, default: '' },
})

const { isDone } = useProgress()
const done = computed(() => isDone(props.topic.id))
</script>

<template>
  <router-link
    :to="`/modules/${topic.moduleId}/${topic.id}`"
    class="group flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
  >
    <span
      class="grid place-items-center w-10 h-10 shrink-0 rounded-xl font-bold"
      :class="done ? 'bg-cyan-400 text-navy-900' : 'bg-navy-900 text-cyan-300 dark:bg-cyan-400/10'"
    >
      <Check v-if="done" :size="20" />
      <span v-else>{{ number }}</span>
    </span>
    <div class="flex-1 min-w-0">
      <p v-if="moduleLabel" class="text-xs font-semibold text-cyan-600 dark:text-cyan-300">{{ moduleLabel }}</p>
      <h3 class="font-semibold text-navy-900 dark:text-white">{{ topic.title }}</h3>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ topic.description }}</p>
    </div>
    <ArrowRight :size="18" class="mt-1 text-slate-400 group-hover:text-cyan-500 transition" />
  </router-link>
</template>
