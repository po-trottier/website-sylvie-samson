<template>
  <v-app>
    <v-content>
      <transition name="fade">
        <router-view />
      </transition>
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

<style>
  .fade-enter-active, .fade-leave-active {
    transition-duration: 0.075s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 50%
  }
</style>
