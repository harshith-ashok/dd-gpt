import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import LandingPage from './pages/LandingPage.vue'
import NewPrompt from './pages/NewPrompt.vue'
import NewShard from './pages/NewShard.vue'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage },
  { path: '/landing', component: LandingPage },
  {
    path: '/new-prompt',
    component: NewPrompt,
    props: (route: { query: { title: string; llm: string } }) => ({
      title: route.query.title,
      llm: route.query.llm,
    }),
  },
  { path: '/new-shard', component: NewShard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/landing')
  } else {
    next()
  }
})

createApp(App).use(router).mount('#app')
