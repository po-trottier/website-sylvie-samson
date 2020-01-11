// Import Base Vue Plugins
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import Extra Plugins
import i18n from '@/plugins/i18n';
import vuetify from './plugins/vuetify';

// Import Stylesheets
import '@/styles/fonts/AvenirNextLT/index.css';
import '@/styles/fonts/LuloClean/index.css';
import '@/styles/general.css';
import '@/styles/layout.css';
import '@/styles/vuetify.css';

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app');
