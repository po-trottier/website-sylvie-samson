import Landing from '@/views/Landing.vue';

export default [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/en',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/fr',
    name: 'accueil',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/404',
    name: 'invalid',
    component: () => import('@/views/Invalid.vue'),
  },
  {
    path: '*',
    redirect: { name: 'invalid' },
  },
];
