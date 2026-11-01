<script setup>
import { Shield } from "lucide-vue-next";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-navy-900 text-slate-300">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3"
    >
      <div>
        <div class="flex items-center gap-2 text-white font-bold text-lg">
          <span
            class="grid place-items-center w-9 h-9 rounded-lg bg-cyan-400 text-navy-900"
          >
            <Shield :size="20" />
          </span>
          Digital<span class="text-cyan-400">Safety</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-slate-400">
          An educational website that helps students and everyday internet users
          understand digital security, privacy, and responsible technology use.
        </p>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <router-link to="/" class="hover:text-cyan-400 transition"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/modules" class="hover:text-cyan-400 transition"
              >Learning Modules</router-link
            >
          </li>
          <li>
            <router-link to="/quiz" class="hover:text-cyan-400 transition"
              >Quiz</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="hover:text-cyan-400 transition"
              >About</router-link
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4">Educational Purpose</h3>
        <p class="text-sm leading-relaxed text-slate-400">
          This website was created for learning and awareness only. The content
          is based on course study materials about digital safety and security.
        </p>
      </div>
    </div>
    <div
      class="border-t border-white/10 py-5 text-center text-xs text-slate-500"
    >
      © {{ year }} OCT- Digital Safety and Security Awareness. All rights
      reserved.
    </div>
  </footer>
</template>
