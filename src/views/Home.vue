<script setup>
import {
  Fingerprint,
  KeyRound,
  Search,
  Leaf,
  ArrowRight,
} from "lucide-vue-next";
import HeroSection from "../components/HeroSection.vue";
import ModuleCard from "../components/ModuleCard.vue";
import { modules } from "../data/modules";

// Educational facts taken from the course study materials (no invented statistics)
const facts = [
  {
    icon: Fingerprint,
    title: "Your data has value",
    text: "Stolen personal data from breaches, such as emails, passwords, and financial details, can end up on the dark web, even if you never visit it.",
  },
  {
    icon: KeyRound,
    title: "Reused passwords are risky",
    text: "Credential stuffing exploits reused passwords. Strong, unique passwords and two-factor authentication make accounts much harder to break into.",
  },
  {
    icon: Search,
    title: "Pause before you share",
    text: "Sharing unverified content spreads misinformation. Checking sources first helps everyone, and tools like Snopes and FactCheck.org can help.",
  },
  {
    icon: Leaf,
    title: "Digital habits have a footprint",
    text: "Screen time, data usage, and e-waste affect our health and the environment. Mindful use benefits both.",
  },
];

const benefits = [
  "Recognize threats such as phishing, malware, and social engineering",
  "Secure your devices, accounts, and Wi-Fi networks",
  "Understand privacy policies, cookies, and online tracking",
  "Spot deep fakes, fake news, and misinformation",
  "Build healthy habits for your mind, body, and the planet",
  "Test your knowledge with an interactive quiz",
];
</script>

<template>
  <div>
    <HeroSection />

    <!-- About Digital Safety -->
    <section class="py-16 bg-white dark:bg-navy-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-bold text-navy-900 dark:text-white">
          What Is Digital Safety?
        </h2>
        <p
          class="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Digital safety means protecting yourself, your information, and your
          well-being while using the internet and connected devices. We bank,
          study, chat, and play online every day, so one careless click can lead
          to data loss, identity theft, or financial loss. Cybersecurity
          awareness gives you the knowledge to avoid these problems and use
          technology with confidence.
        </p>
      </div>
    </section>

    <!-- Learning Modules -->
    <section
      id="modules"
      class="py-16 bg-slate-50 dark:bg-navy-900/40 scroll-mt-16"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-navy-900 dark:text-white">
            Learning Modules
          </h2>
          <p class="mt-3 text-slate-600 dark:text-slate-400">
            Four modules take you from understanding threats to protecting
            yourself and living healthier online.
          </p>
        </div>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ModuleCard v-for="m in modules" :key="m.id" :module="m" />
        </div>
      </div>
    </section>

    <!-- Why Digital Safety Matters -->
    <section class="py-16 bg-white dark:bg-navy-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl font-bold text-center text-navy-900 dark:text-white"
        >
          Why Digital Safety Matters
        </h2>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="f in facts"
            :key="f.title"
            class="rounded-2xl p-6 bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-white/10"
          >
            <component
              :is="f.icon"
              :size="28"
              class="text-cyan-600 dark:text-cyan-300"
            />
            <h3 class="mt-4 font-semibold text-navy-900 dark:text-white">
              {{ f.title }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {{ f.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Benefits -->
    <section class="py-16 bg-slate-50 dark:bg-navy-900/40">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl font-bold text-center text-navy-900 dark:text-white"
        >
          What You Will Learn
        </h2>
        <ul class="mt-10 grid gap-4 sm:grid-cols-2">
          <li
            v-for="b in benefits"
            :key="b"
            class="flex items-start gap-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-4"
          >
            <span
              class="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-cyan-400 text-navy-900 text-sm font-bold shrink-0"
              >✓</span
            >
            <span class="text-slate-700 dark:text-slate-300">{{ b }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-16 bg-linear-to-r from-navy-900 to-navy-700 text-white text-center"
    >
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-3xl font-bold">Ready to Protect Your Digital World?</h2>
        <p class="mt-4 text-slate-300">
          Start learning today, then test your knowledge with the interactive
          quiz.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <router-link
            to="/modules"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-navy-900 font-semibold hover:bg-cyan-300 transition"
          >
            Start Learning <ArrowRight :size="18" />
          </router-link>
          <router-link
            to="/quiz"
            class="px-6 py-3 rounded-xl border border-white/30 font-semibold hover:bg-white/10 transition"
          >
            Take the Quiz
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
