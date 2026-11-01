<script setup>
import { computed } from 'vue'
import { ShieldAlert, Lock, SearchCheck, HeartPulse, GraduationCap, ArrowRight } from 'lucide-vue-next'
import { useContent } from '../composables/useContent'

const props = defineProps({
  module: { type: Object, required: true },
})

const { topicsOf } = useContent()
const icons = { ShieldAlert, Lock, SearchCheck, HeartPulse, GraduationCap }
const iconComponent = computed(() => icons[props.module.icon] || ShieldAlert)
const topicCount = computed(() => topicsOf(props.module.id).length)
</script>

<template>
  <article
    class="group flex flex-col h-full rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
  >
    <div class="flex items-center justify-between">
      <span class="grid place-items-center w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-300">
        <component :is="iconComponent" :size="26" />
      </span>
      <span class="text-xs font-semibold px-3 py-1 rounded-full bg-navy-900 text-cyan-300 dark:bg-cyan-400/10">
        Module {{ module.number }}
      </span>
    </div>

    <h3 class="mt-5 text-lg font-bold text-navy-900 dark:text-white">{{ module.title }}</h3>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1">{{ module.description }}</p>

    <div class="mt-5 flex items-center justify-between">
      <span class="text-sm text-slate-500 dark:text-slate-400">{{ topicCount }} topics</span>
      <router-link
        :to="`/modules/${module.id}`"
        class="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-300 group-hover:gap-2 transition-all"
      >
        Explore Module <ArrowRight :size="16" />
      </router-link>
    </div>
  </article>
</template>
