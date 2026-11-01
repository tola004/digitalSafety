<script setup>
import { ref, computed } from "vue";
import { Search } from "lucide-vue-next";
import ModuleCard from "../components/ModuleCard.vue";
import TopicCard from "../components/TopicCard.vue";
import ProgressBar from "../components/ProgressBar.vue";
import { modules } from "../data/modules";
import { useContent } from "../composables/useContent";
import { useProgress } from "../composables/useProgress";

const { topics } = useContent();
const { completed } = useProgress();

const query = ref("");
const filter = ref("all");

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return topics.value.filter(
    (t) =>
      (filter.value === "all" || t.moduleId === filter.value) &&
      (t.title + " " + t.description).toLowerCase().includes(q),
  );
});

const percent = computed(() => {
  const total = topics.value.length;
  if (!total) return 0;
  const done = topics.value.filter((t) =>
    completed.value.includes(t.id),
  ).length;
  return Math.round((done / total) * 100);
});

const numberOf = (t) =>
  topics.value
    .filter((x) => x.moduleId === t.moduleId)
    .findIndex((x) => x.id === t.id) + 1;
const moduleLabel = (t) =>
  "Module " + modules.find((m) => m.id === t.moduleId)?.number;
</script>

<template>
  <div class="bg-slate-50 dark:bg-navy-950">
    <section class="bg-linear-to-br from-navy-950 to-navy-700 text-white py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold">Learning Modules</h1>
        <p class="mt-3 text-slate-300 max-w-2xl">
          Choose a module to start learning, or search all lessons below.
        </p>
        <div class="mt-6 max-w-md">
          <ProgressBar :value="percent" label="Your overall progress" />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ModuleCard v-for="m in modules" :key="m.id" :module="m" />
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 class="text-2xl font-bold text-navy-900 dark:text-white">
        All Lessons
      </h2>

      <div class="mt-5 relative">
        <Search
          :size="18"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          v-model="query"
          type="text"
          placeholder="Search lessons..."
          class="input pl-10!"
        />
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <button
          @click="filter = 'all'"
          class="px-4 py-1.5 rounded-full text-sm font-medium border transition"
          :class="
            filter === 'all'
              ? 'bg-cyan-400 border-cyan-400 text-navy-900'
              : 'border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300'
          "
        >
          All
        </button>
        <button
          v-for="m in modules"
          :key="m.id"
          @click="filter = m.id"
          class="px-4 py-1.5 rounded-full text-sm font-medium border transition"
          :class="
            filter === m.id
              ? 'bg-cyan-400 border-cyan-400 text-navy-900'
              : 'border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300'
          "
        >
          Module {{ m.number }}
        </button>
      </div>

      <div class="mt-6 grid gap-4">
        <TopicCard
          v-for="t in filtered"
          :key="t.id"
          :topic="t"
          :number="numberOf(t)"
          :module-label="moduleLabel(t)"
        />
        <p v-if="!filtered.length" class="text-center py-10 text-slate-500">
          No lessons match your search.
        </p>
      </div>
    </section>
  </div>
</template>
