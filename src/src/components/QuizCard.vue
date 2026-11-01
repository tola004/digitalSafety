<script setup>
import { computed } from 'vue'
import { Check, X } from 'lucide-vue-next'

const props = defineProps({
  question: { type: Object, required: true },
  index: { type: Number, required: true },
  total: { type: Number, required: true },
  selected: { type: Number, default: null },
})
const emit = defineEmits(['select', 'next'])

const answered = computed(() => props.selected !== null)
const isLast = computed(() => props.index === props.total - 1)
const letters = ['A', 'B', 'C', 'D']

function optionClass(i) {
  if (!answered.value) {
    return 'border-slate-200 dark:border-white/15 hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/10'
  }
  if (i === props.question.answer) return 'border-green-500 bg-green-50 dark:bg-green-500/15'
  if (i === props.selected) return 'border-red-500 bg-red-50 dark:bg-red-500/15'
  return 'border-slate-200 dark:border-white/10 opacity-60'
}
</script>

<template>
  <div class="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-sm">
    <p class="text-sm font-semibold text-cyan-600 dark:text-cyan-300">Question {{ index + 1 }} of {{ total }}</p>
    <h2 class="mt-2 text-xl sm:text-2xl font-bold text-navy-900 dark:text-white">{{ question.question }}</h2>

    <div class="mt-6 space-y-3">
      <button
        v-for="(opt, i) in question.options"
        :key="i"
        type="button"
        :disabled="answered"
        @click="emit('select', i)"
        class="w-full flex items-center gap-3 text-left rounded-xl border-2 px-4 py-3 transition"
        :class="optionClass(i)"
      >
        <span class="grid place-items-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 text-sm font-bold shrink-0">
          {{ letters[i] }}
        </span>
        <span class="flex-1 text-slate-800 dark:text-slate-100">{{ opt }}</span>
        <Check v-if="answered && i === question.answer" :size="20" class="text-green-600" />
        <X v-else-if="answered && i === selected" :size="20" class="text-red-600" />
      </button>
    </div>

    <div v-if="answered" class="mt-6 rounded-xl p-4 bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-white/10">
      <p class="font-semibold" :class="selected === question.answer ? 'text-green-600' : 'text-red-600'">
        {{ selected === question.answer ? 'Correct!' : 'Not quite.' }}
      </p>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ question.explanation }}</p>
    </div>

    <div class="mt-6 flex justify-end">
      <button v-if="answered" type="button" class="btn-primary" @click="emit('next')">
        {{ isLast ? 'See Results' : 'Next Question' }}
      </button>
    </div>
  </div>
</template>
