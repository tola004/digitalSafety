<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserPlus } from "lucide-vue-next";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const { register } = useAuth();

const name = ref("");
const email = ref("");
const password = ref("");
const confirm = ref("");
const error = ref("");
const loading = ref(false);

async function submit() {
  error.value = "";
  if (name.value.trim().length < 2)
    return (error.value = "Please enter your name.");
  if (password.value.length < 6)
    return (error.value = "Password must be at least 6 characters.");
  if (password.value !== confirm.value)
    return (error.value = "Passwords do not match.");

  loading.value = true;
  const res = await register({
    name: name.value,
    email: email.value,
    password: password.value,
  });
  loading.value = false;
  if (!res.ok) {
    error.value = res.error;
    return;
  }
  router.push("/modules");
}
</script>

<template>
  <div class="bg-slate-50 dark:bg-navy-950 py-16 min-h-[70vh]">
    <div class="max-w-md mx-auto px-4">
      <div
        class="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 p-8 shadow-sm"
      >
        <span
          class="grid place-items-center w-12 h-12 rounded-xl bg-cyan-400 text-navy-900"
          ><UserPlus :size="24"
        /></span>
        <h1 class="mt-4 text-2xl font-bold text-navy-900 dark:text-white">
          Create your account
        </h1>
        <p class="text-sm text-slate-500">
          Register to take quizzes and track your results.
        </p>

        <form class="mt-6 space-y-4" @submit.prevent="submit">
          <div>
            <label
              class="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
              >Full name</label
            >
            <input
              v-model="name"
              type="text"
              required
              class="input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              required
              class="input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              required
              class="input"
              placeholder="At least 6 characters"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
              >Confirm password</label
            >
            <input
              v-model="confirm"
              type="password"
              required
              class="input"
              placeholder="Repeat password"
            />
          </div>
          <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
          <button type="submit" class="btn-primary w-full" :disabled="loading">
            {{ loading ? "Creating account..." : "Register" }}
          </button>
        </form>

        <p class="mt-6 text-sm text-center text-slate-500">
          Already registered?
          <router-link
            to="/login"
            class="font-semibold text-cyan-600 dark:text-cyan-300"
            >Login</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
