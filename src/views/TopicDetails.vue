<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ListChecks,
  Globe,
  ShieldCheck,
  Lightbulb,
} from "lucide-vue-next";
import { modules } from "../data/modules";
import { useContent } from "../composables/useContent";
import { useProgress } from "../composables/useProgress";

const route = useRoute();
const { topicsOf, getTopic } = useContent();
const { isDone, toggle } = useProgress();

const topic = computed(() => getTopic(route.params.topicId));
const module = computed(() =>
  modules.find((m) => m.id === route.params.moduleId),
);
const siblings = computed(() => topicsOf(route.params.moduleId));
const index = computed(() =>
  siblings.value.findIndex((t) => t.id === route.params.topicId),
);
const prev = computed(() =>
  index.value > 0 ? siblings.value[index.value - 1] : null,
);
const next = computed(() =>
  index.value >= 0 && index.value < siblings.value.length - 1
    ? siblings.value[index.value + 1]
    : null,
);
</script>

<template>
  <div v-if="topic && module" class="bg-slate-50 dark:bg-navy-950">
    <section class="bg-linear-to-br from-navy-950 to-navy-700 text-white py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link
          :to="`/modules/${module.id}`"
          class="inline-flex items-center gap-1 text-cyan-300 text-sm hover:underline"
        >
          <ArrowLeft :size="16" /> Module {{ module.number }}:
          {{ module.title }}
        </router-link>
        <p class="mt-4 text-cyan-300 text-sm font-semibold">
          Topic {{ index + 1 }} of {{ siblings.length }}
        </p>
        <h1 class="mt-1 text-3xl sm:text-4xl font-extrabold">
          {{ topic.title }}
        </h1>
      </div>
    </section>

    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <!-- Introduction -->
      <div
        class="rounded-2xl p-6 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20"
      >
        <h2 class="font-bold text-navy-900 dark:text-white">Introduction</h2>
        <p class="mt-2 text-slate-700 dark:text-slate-200 leading-relaxed">
          {{ topic.introduction }}
        </p>
      </div>

      <!-- Main explanation -->
      <section>
        <h2 class="text-2xl font-bold text-navy-900 dark:text-white">
          Main Explanation
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
          {{ topic.explanation }}
        </p>
      </section>

      <!-- Important points -->
      <section v-if="topic.points?.length">
        <h2
          class="flex items-center gap-2 text-2xl font-bold text-navy-900 dark:text-white"
        >
          <ListChecks :size="24" class="text-cyan-500" /> Important Points
        </h2>
        <ul class="mt-4 space-y-3">
          <li
            v-for="(p, i) in topic.points"
            :key="i"
            class="flex gap-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-4 text-slate-700 dark:text-slate-300"
          >
            <span
              class="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-cyan-400 text-navy-900 text-xs font-bold shrink-0"
              >{{ i + 1 }}</span
            >
            <span>{{ p }}</span>
          </li>
        </ul>
      </section>

      <!-- Examples -->
      <section v-if="topic.examples?.length">
        <h2
          class="flex items-center gap-2 text-2xl font-bold text-navy-900 dark:text-white"
        >
          <Globe :size="24" class="text-cyan-500" /> Real-World Examples
        </h2>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <div
            v-for="(e, i) in topic.examples"
            :key="i"
            class="rounded-xl p-5 bg-white dark:bg-navy-900 border-l-4 border-l-cyan-400 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
          >
            {{ e }}
          </div>
        </div>
      </section>

      <!-- Tips -->
      <section v-if="topic.tips?.length">
        <h2
          class="flex items-center gap-2 text-2xl font-bold text-navy-900 dark:text-white"
        >
          <ShieldCheck :size="24" class="text-cyan-500" /> Safety
          Recommendations
        </h2>
        <ul class="mt-4 space-y-2">
          <li
            v-for="(t, i) in topic.tips"
            :key="i"
            class="flex gap-3 text-slate-700 dark:text-slate-300"
          >
            <Check :size="20" class="text-green-500 shrink-0 mt-0.5" /> {{ t }}
          </li>
        </ul>
      </section>

      <!-- Key takeaways -->
      <section
        v-if="topic.takeaways?.length"
        class="rounded-2xl p-6 bg-navy-900 text-white"
      >
        <h2 class="flex items-center gap-2 text-xl font-bold">
          <Lightbulb :size="22" class="text-cyan-300" /> Key Takeaways
        </h2>
        <ul class="mt-3 space-y-2 list-disc pl-5 text-slate-200">
          <li v-for="(k, i) in topic.takeaways" :key="i">{{ k }}</li>
        </ul>
      </section>

      <!-- Mark complete -->
      <div class="flex justify-center">
        <button
          @click="toggle(topic.id)"
          class="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition"
          :class="
            isDone(topic.id)
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-cyan-400 text-navy-900 hover:bg-cyan-300'
          "
        >
          <Check :size="18" />
          {{
            isDone(topic.id) ? "Completed (click to undo)" : "Mark as Completed"
          }}
        </button>
      </div>

      <!-- Previous / Next -->
      <nav
        class="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200 dark:border-white/10"
      >
        <router-link
          v-if="prev"
          :to="`/modules/${module.id}/${prev.id}`"
          class="btn-secondary"
        >
          <ArrowLeft :size="16" /> Previous Topic
        </router-link>
        <span v-else></span>

        <router-link to="/modules" class="btn-secondary"
          >Back to Modules</router-link
        >

        <router-link
          v-if="next"
          :to="`/modules/${module.id}/${next.id}`"
          class="btn-primary"
        >
          Next Topic <ArrowRight :size="16" />
        </router-link>
        <router-link v-else to="/quiz" class="btn-primary"
          >Take the Quiz <ArrowRight :size="16"
        /></router-link>
      </nav>
    </article>
  </div>

  <div v-else class="max-w-xl mx-auto py-24 text-center">
    <h1 class="text-2xl font-bold">Topic not found</h1>
    <router-link to="/modules" class="btn-primary mt-6"
      >Back to Modules</router-link
    >
  </div>
</template>
