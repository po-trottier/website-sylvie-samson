<template>
  <v-container class="white--text w-100 pa-5">
    <app-landing-logo class="mb-12" />
    <app-landing-title class="mb-10" />
    <app-landing-links />
  </v-container>
</template>

<script>
import LandingLogo from './LandingLogo.vue';
import LandingTitle from './LandingTitle.vue';
import LandingLinks from './LandingLinks.vue';

export default {
  name: 'Landing',

  components: {
    appLandingLogo: LandingLogo,
    appLandingTitle: LandingTitle,
    appLandingLinks: LandingLinks,
  },
};
</script>
