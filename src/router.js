import { createRouter, createWebHistory } from 'vue-router';
import Registration from './pages/Registration.vue';
import Autorization from './pages/Autorization.vue';
import MainPage from './pages/MainPage.vue';
import { authState } from './auth.js';

const routes = [
  { path: '/', name: 'Home', component: Registration },
  { path: '/success', component: MainPage, meta: { requiresAuth: true } },
  { path: '/auth', component: Autorization},
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authState.isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
