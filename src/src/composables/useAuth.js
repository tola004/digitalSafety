import { ref, computed } from 'vue'
import { readJSON, writeJSON } from '../utils/storage'

const USERS_KEY = 'ds_users'
const SESSION_KEY = 'ds_session'

async function hash(text) {
  if (window.crypto && window.crypto.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
  }
  return btoa(unescape(encodeURIComponent(text))) // fallback for non-secure contexts
}

const users = ref(readJSON(USERS_KEY, []))
const currentId = ref(localStorage.getItem(SESSION_KEY))

const persist = () => writeJSON(USERS_KEY, users.value)

// Create the default admin account the first time the app runs
const ready = (async () => {
  if (!users.value.some((u) => u.role === 'admin')) {
    users.value.push({
      id: 'admin-1',
      name: 'Administrator',
      email: 'admin@digitalsafety.com',
      passwordHash: await hash('Admin@123'),
      role: 'admin',
      createdAt: new Date().toISOString(),
    })
    persist()
  }
})()

const user = computed(() => users.value.find((u) => u.id === currentId.value) || null)
const isAdmin = computed(() => user.value?.role === 'admin')

function setSession(id) {
  currentId.value = id
  if (id) localStorage.setItem(SESSION_KEY, id)
  else localStorage.removeItem(SESSION_KEY)
}

async function register({ name, email, password }) {
  await ready
  const e = email.trim().toLowerCase()
  if (users.value.some((u) => u.email === e)) {
    return { ok: false, error: 'An account with this email already exists.' }
  }
  const newUser = {
    id: 'u-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: name.trim(),
    email: e,
    passwordHash: await hash(password),
    role: 'student',
    createdAt: new Date().toISOString(),
  }
  users.value.push(newUser)
  persist()
  setSession(newUser.id)
  return { ok: true, user: newUser }
}

async function login(email, password) {
  await ready
  const e = email.trim().toLowerCase()
  const h = await hash(password)
  const found = users.value.find((u) => u.email === e && u.passwordHash === h)
  if (!found) return { ok: false, error: 'Incorrect email or password.' }
  setSession(found.id)
  return { ok: true, user: found }
}

function logout() {
  setSession(null)
}

function deleteUser(id) {
  if (id === currentId.value) return
  users.value = users.value.filter((u) => u.id !== id)
  persist()
}

function setRole(id, role) {
  if (id === currentId.value) return
  const target = users.value.find((u) => u.id === id)
  if (target) {
    target.role = role
    persist()
  }
}

export function useAuth() {
  return { users, user, isAdmin, register, login, logout, deleteUser, setRole }
}
