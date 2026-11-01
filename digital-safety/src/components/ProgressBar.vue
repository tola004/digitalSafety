<script setup>
defineProps({
  value: { type: Number, default: 0 },
  label: { type: String, default: '' },
})
</script>

<template>
  <div>
    <div v-if="label" class="flex justify-between text-sm mb-1.5 text-slate-600 dark:text-slate-300">
      <span>{{ label }}</span>
      <span class="font-semibold">{{ value }}%</span>
    </div>
    <div class="h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
      <div
        class="h-full rounded-full bg-linear-to-r from-cyan-400 to-sky-500 transition-all duration-500"
        :style="{ width: value + '%' }"
      ></div>
    </div>
  </div>
</template>
