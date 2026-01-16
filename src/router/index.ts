import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user.store';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'Main' },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/Register.vue'),
      meta: { layout: 'Auth' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: { layout: 'Auth' },
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('@/views/Subscribe.vue'),
      meta: { layout: 'Main' },
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('@/views/Invoices.vue'),
      meta: { layout: 'Main', role: 'Admin' },
    },
    {
      path: '/:notFound(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue'),
      meta: { layout: 'Main' },
    },
  ],
});

// Проверка авторизации
router.beforeEach((to, from) => {
  const userStore = useUserStore();

  if (!userStore.isUserAuth && to.meta.layout !== 'Auth') {
    return {
      name: 'login',
      query: {
        code: 'auth',
      },
    };
  } else if (userStore.isUserAuth && to.meta.layout === 'Auth') {
    return {
      name: 'home',
    };
  } else {
    if (!userStore.isAdmin && to.meta.role === 'Admin') {
      return {
        name: 'home',
      };
    }
  }
});

//
export default router;
