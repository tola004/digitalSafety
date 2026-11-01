<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-white text-slate-800 dark:bg-navy-950 dark:text-slate-200 transition-colors"
  >
    <Navbar />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <SpeedInsights />
  </div>
</template>
