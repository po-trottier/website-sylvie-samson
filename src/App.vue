<template>
  <v-app>
    <app-header-bar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HeaderBar from '@/components/App/Header/HeaderBar.vue';

export default {
  components: {
    appHeaderBar: HeaderBar,
  },
};
</script>

<style>
  html {
    overflow: auto !important;
  }
</style>
