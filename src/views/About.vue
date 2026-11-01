<script setup>
import { BookOpen, Target, ShieldCheck } from "lucide-vue-next";
import { modules } from "../data/modules";

const cards = [
  {
    icon: Target,
    title: "Our Purpose",
    text: "To educate students, young people, and general internet users about digital security, online privacy, responsible internet use, misinformation, and digital well-being.",
  },
  {
    icon: BookOpen,
    title: "What You Will Find",
    text: "Four learning modules with detailed lessons, practical safety tips, and an interactive quiz to test your knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Educational Use",
    text: "The content is based on course study materials and is intended for learning and awareness. It does not replace professional security advice.",
  },
];
</script>

<template>
  <div class="bg-slate-50 dark:bg-navy-950">
    <section class="bg-linear-to-br from-navy-950 to-navy-700 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold">
          About Digital Safety and Security Awareness
        </h1>
        <p class="mt-4 text-slate-300">
          A learning platform that helps you stay safe, stay smart, and protect
          your digital world.
        </p>
      </div>
    </section>

    <section
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-6 md:grid-cols-3"
    >
      <div
        v-for="c in cards"
        :key="c.title"
        class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-6"
      >
        <component
          :is="c.icon"
          :size="28"
          class="text-cyan-600 dark:text-cyan-300"
        />
        <h2 class="mt-4 font-bold text-navy-900 dark:text-white">
          {{ c.title }}
        </h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {{ c.text }}
        </p>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 class="text-2xl font-bold text-navy-900 dark:text-white">
        The Four Modules
      </h2>
      <ol class="mt-5 space-y-3">
        <li
          v-for="m in modules"
          :key="m.id"
          class="rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-4"
        >
          <router-link
            :to="`/modules/${m.id}`"
            class="font-semibold text-cyan-600 dark:text-cyan-300 hover:underline"
          >
            Module {{ m.number }}: {{ m.title }}
          </router-link>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {{ m.description }}
          </p>
        </li>
      </ol>
      <div class="mt-8 text-center">
        <router-link to="/modules" class="btn-primary"
          >Start Learning</router-link
        >
      </div>
    </section>
  </div>
</template>
