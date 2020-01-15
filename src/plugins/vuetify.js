import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#b2d330',
        secondary: '#855e53',
        accent: '#855e53',
        info: '#0087c4',
        success: '#aed11f',
        warning: '#cfab1f',
        error: '#cf1f3c',
        light: '#f7f7f7',
        dark: '#242323',
      },
    },
  },
});
