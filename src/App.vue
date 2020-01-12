<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  metaInfo: {
    title: 'Sylvie Samson',
    titleTemplate: '%s | Sylvie Samson',
  },

  methods: {
    ...mapActions('size', ['setWidth', 'setHeight']),
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.setWidth(window.innerWidth);
      this.setHeight(window.innerHeight);
    });
  },
};
</script>
