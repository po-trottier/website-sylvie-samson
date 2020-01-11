import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8fc63e',
        secondary: '#855446',
        accent: '#c2bf04',
        info: '#0087c4',
        success: '#48a493',
        warning: '#dc8b41',
        error: '#bd1544',
        light: '#f7f7f7',
        dark: '#242323',
      },
    },
  },
});
