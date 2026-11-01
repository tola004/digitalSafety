<script setup>
import { ArrowRight, BookOpen } from "lucide-vue-next";
</script>

<template>
  <section
    class="relative overflow-hidden bg-linear-to-br from-navy-950 via-navy-900 to-navy-700 text-white"
  >
    <div
      class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"
    ></div>
    <div
      class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl"
    ></div>

    <div
      class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <span
          class="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-semibold tracking-wide border border-cyan-400/30"
        >
          DIGITAL SAFETY & SECURITY AWARENESS
        </span>
        <h1 class="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
          Stay Safe. Stay Smart.
          <span class="text-cyan-400">Protect Your Digital World.</span>
        </h1>
        <p class="mt-6 text-lg text-slate-300 max-w-xl">
          Explore the world of digital safety and security. Learn how to protect
          your personal information, recognize online threats, and develop
          responsible digital habits.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <router-link
            to="/modules"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-navy-900 font-semibold shadow-lg shadow-cyan-400/20 hover:bg-cyan-300 transition"
          >
            Get Started <ArrowRight :size="18" />
          </router-link>
          <a
            href="#modules"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
          >
            <BookOpen :size="18" /> Explore Modules
          </a>
        </div>
      </div>

      <!-- Cybersecurity illustration (inline SVG) -->
      <div class="flex justify-center">
        <svg
          viewBox="0 0 400 400"
          class="w-full max-w-md"
          role="img"
          aria-label="Shield with padlock illustration"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#22d3ee" />
              <stop offset="100%" stop-color="#0ea5e9" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="#22d3ee"
            stroke-opacity="0.25"
            stroke-dasharray="6 10"
          />
          <circle
            cx="200"
            cy="200"
            r="130"
            fill="none"
            stroke="#38bdf8"
            stroke-opacity="0.2"
          />
          <path
            d="M200 60 L310 105 V200 C310 265 262 315 200 342 C138 315 90 265 90 200 V105 Z"
            fill="url(#shieldGrad)"
            fill-opacity="0.15"
            stroke="url(#shieldGrad)"
            stroke-width="5"
          />
          <rect
            x="155"
            y="185"
            width="90"
            height="70"
            rx="12"
            fill="url(#shieldGrad)"
          />
          <path
            d="M172 185 V165 a28 28 0 0 1 56 0 V185"
            fill="none"
            stroke="#e0f2fe"
            stroke-width="10"
            stroke-linecap="round"
          />
          <circle cx="200" cy="220" r="9" fill="#0b1b3a" />
          <rect x="196" y="223" width="8" height="18" rx="3" fill="#0b1b3a" />
          <!-- network nodes -->
          <g fill="#22d3ee">
            <circle cx="60" cy="120" r="7" />
            <circle cx="345" cy="150" r="7" />
            <circle cx="70" cy="290" r="7" />
            <circle cx="340" cy="300" r="7" />
          </g>
          <g stroke="#22d3ee" stroke-opacity="0.4" stroke-width="2">
            <line x1="60" y1="120" x2="110" y2="150" />
            <line x1="345" y1="150" x2="300" y2="160" />
            <line x1="70" y1="290" x2="115" y2="260" />
            <line x1="340" y1="300" x2="295" y2="265" />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>
