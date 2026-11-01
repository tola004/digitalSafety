import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'

import Home from '../views/Home.vue'
import Modules from '../views/Modules.vue'
import ModuleDetails from '../views/ModuleDetails.vue'
import TopicDetails from '../views/TopicDetails.vue'
import Quiz from '../views/Quiz.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/modules', name: 'modules', component: Modules },
  { path: '/modules/:moduleId', name: 'module', component: ModuleDetails },
  { path: '/modules/:moduleId/:topicId', name: 'topic', component: TopicDetails },
  { path: '/quiz', name: 'quiz', component: Quiz, meta: { requiresAuth: true } },
  { path: '/about', name: 'about', component: About },
  { path: '/login', name: 'login', component: Login, meta: { guestOnly: true } },
  { path: '/register', name: 'register', component: Register, meta: { guestOnly: true } },
  { path: '/admin', name: 'admin', component: Admin, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const { user } = useAuth()
  if ((to.meta.requiresAuth || to.meta.requiresAdmin) && !user.value) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.meta.requiresAdmin && user.value.role !== 'admin') return { name: 'home' }
  if (to.meta.guestOnly && user.value) return { name: 'home' }
})

export default router
