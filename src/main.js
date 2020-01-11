// Import Packages
import meta from 'vue-meta';

// Import Vue Application
import Vue from 'vue';
import App from './App.vue';

// Import Plugins
import router from '@/router';
import store from '@/store';
import i18n from '@/plugins/i18n';
import vuetify from '@/plugins/vuetify';

// Import Stylesheets
import '@/styles/fonts/AvenirNextLT/index.css';
import '@/styles/fonts/LuloClean/index.css';
import '@/styles/general.css';
import '@/styles/layout.css';
import '@/styles/vuetify.css';

// Use the Packages
Vue.use(meta);

// Initiate Vue
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app');
