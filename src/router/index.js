import Vue from 'vue';
import VueRouter from 'vue-router';
import i18n from '@/plugins/i18n';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path.includes('/en')) {
    i18n.locale = 'en';
  } else {
    i18n.locale = 'fr';
  }
  next();
});

export default router;
