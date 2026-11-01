<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { LogIn } from 'lucide-vue-next'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const route = useRoute()
const { login } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  const res = await login(email.value, password.value)
  loading.value = false
  if (!res.ok) {
    error.value = res.error
    return
  }
  const redirect = String(route.query.redirect || '')
  router.push(redirect.startsWith('/') ? redirect : res.user.role === 'admin' ? '/admin' : '/')
}
</script>

<template>
  <div class="bg-slate-50 dark:bg-navy-950 py-16 min-h-[70vh]">
    <div class="max-w-md mx-auto px-4">
      <div class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-8 shadow-sm">
        <span class="grid place-items-center w-12 h-12 rounded-xl bg-cyan-400 text-navy-900"><LogIn :size="24" /></span>
        <h1 class="mt-4 text-2xl font-bold text-navy-900 dark:text-white">Welcome back</h1>
        <p class="text-sm text-slate-500">Log in to take the quiz and save your results.</p>

        <form class="mt-6 space-y-4" @submit.prevent="submit">
          <div>
            <label class="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Email</label>
            <input v-model="email" type="email" required class="input" placeholder="you@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Password</label>
            <input v-model="password" type="password" required class="input" placeholder="Your password" />
          </div>
          <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
          <button type="submit" class="btn-primary w-full" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <p class="mt-6 text-sm text-center text-slate-500">
          No account yet?
          <router-link to="/register" class="font-semibold text-cyan-600 dark:text-cyan-300">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
