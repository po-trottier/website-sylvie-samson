<template>
  <v-app-bar
    app
    tile
    elevate-on-scroll
    clipped-right
    height="64"
    color="white">
    <v-img
      contain
      alt="Sylvie Samson Logo"
      class="shrink mr-3"
      src="@/assets/logo.png"
      width="35" />
    <div
      v-if="!phone"
      class="unselectable my-auto"
      style="display: grid; line-height: 1.4rem; opacity: 0.9;">
      <h4 class="text-uppercase font-weight-bold">
        {{ $t('general.company') }}
      </h4>
      <span class="text-none text--secondary">
        {{ $t('general.description') }}
      </span>
    </div>
    <v-spacer />
    <v-app-bar-nav-icon @click="setDrawer" />
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MobileHeader',

  computed: {
    ...mapGetters('size', ['phone']),
  },

  methods: {
    ...mapActions('drawer', ['setDrawer']),
  },
};
</script>

<style scoped>

</style>
