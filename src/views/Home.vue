<template>
  <div>
    <app-desktop-header />
    <v-container>
      <h1>This is the home page</h1>
      <v-img src="@/assets/logo.png" />
      <v-img src="@/assets/logo.png" />
    </v-container>
  </div>
</template>

<script>
import DesktopHeader from '@/components/App/Header/DesktopHeader.vue';

export default {
  name: 'Home',

  metaInfo: {
    title: 'Accueil',
  },

  components: {
    appDesktopHeader: DesktopHeader,
  },
};
</script>
