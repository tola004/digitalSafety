<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import {
  Shield,
  Menu,
  X,
  Sun,
  Moon,
  LogOut,
  LayoutDashboard,
} from "lucide-vue-next";
import { useTheme } from "../composables/useTheme";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const menuOpen = ref(false);
const { isDark, toggleTheme } = useTheme();
const { user, isAdmin, logout } = useAuth();

const links = computed(() => {
  const base = [
    { label: "Home", to: "/" },
    { label: "Learning Modules", to: "/modules" },
    { label: "Quiz", to: "/quiz" },
    { label: "About", to: "/about" },
  ];
  if (isAdmin.value) base.push({ label: "Admin", to: "/admin" });
  return base;
});

function handleLogout() {
  logout();
  menuOpen.value = false;
  router.push("/");
}
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-navy-900/95 backdrop-blur border-b border-white/10"
  >
    <nav
      class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
    >
      <router-link
        to="/"
        class="flex items-center gap-2 text-white font-bold text-lg"
        @click="menuOpen = false"
      >
        <span
          class="grid place-items-center w-9 h-9 rounded-lg bg-cyan-400 text-navy-900"
        >
          <Shield :size="20" />
        </span>
        <span>Digital<span class="text-cyan-400">Safety</span></span>
      </router-link>

      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            class="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition"
            active-class="!text-cyan-400"
            exact-active-class="!text-cyan-400"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle dark or light mode"
        >
          <Sun v-if="isDark" :size="20" />
          <Moon v-else :size="20" />
        </button>

        <!-- Desktop auth area -->
        <div class="hidden md:flex items-center gap-2">
          <template v-if="user">
            <span class="text-sm text-slate-300 flex items-center gap-1">
              <LayoutDashboard
                v-if="isAdmin"
                :size="16"
                class="text-cyan-400"
              />
              {{ user.name }}
            </span>
            <button
              @click="handleLogout"
              class="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 transition"
            >
              <LogOut :size="16" /> Logout
            </button>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition"
            >
              Login
            </router-link>
            <router-link
              to="/register"
              class="px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-400 text-navy-900 hover:bg-cyan-300 transition"
            >
              Register
            </router-link>
          </template>
        </div>

        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <X v-if="menuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="menuOpen"
      class="md:hidden border-t border-white/10 bg-navy-900 px-4 pb-4"
    >
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        @click="menuOpen = false"
        class="block px-3 py-3 rounded-lg text-slate-200 hover:bg-white/10"
        exact-active-class="!text-cyan-400"
      >
        {{ link.label }}
      </router-link>

      <div class="mt-2 pt-2 border-t border-white/10">
        <template v-if="user">
          <p class="px-3 py-2 text-sm text-slate-400">
            Signed in as {{ user.name }}
          </p>
          <button
            @click="handleLogout"
            class="w-full text-left px-3 py-3 rounded-lg text-slate-200 hover:bg-white/10"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <router-link
            to="/login"
            @click="menuOpen = false"
            class="block px-3 py-3 rounded-lg text-slate-200 hover:bg-white/10"
            >Login</router-link
          >
          <router-link
            to="/register"
            @click="menuOpen = false"
            class="block px-3 py-3 rounded-lg text-cyan-400 font-semibold hover:bg-white/10"
            >Register</router-link
          >
        </template>
      </div>
    </div>
  </header>
</template>
