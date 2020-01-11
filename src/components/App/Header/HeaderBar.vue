<template>
  <v-app-bar
    app
    flat
    extended
    hide-on-scroll
    color="white"
    height="100">
    <!--Company Logo + Text-->
    <v-row
      no-gutters
      class="century">
      <router-link
        :to="{ name: 'landing' }"
        class="d-flex">
        <v-img
          contain
          alt="Sylvie Samson Logo"
          class="shrink mr-5"
          src="@/assets/logo.png"
          width="50" />
        <div
          class="unselectable my-auto"
          style="display: grid;">
          <span class="headline text-uppercase font-weight-bold">
            Sylvie Samson
          </span>
          <span class="text-none">
            Travailleuse Sociale
          </span>
        </div>
      </router-link>
      <!--Push to the Right-->
      <v-spacer />
      <!--Language Switcher-->
      <div
        class="text-uppercase my-auto"
        style="display: grid;">
        <span class="font-weight-bold">
          Language
        </span>
        <v-row
          no-gutters
          justify="end">
          <span
            @click="setEnglish"
            class="link unselectable">
            En
          </span>
          <span class="mx-2 unselectable">
            |
          </span>
          <span
            @click="setFrench"
            class="link unselectable">
            Fr
          </span>
        </v-row>
      </div>
    </v-row>
    <div />
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderBar',

  methods: {
    setEnglish() {
      this.$i18n.locale = 'en';
      if (this.$route.name !== 'home') {
        this.$router.replace({ name: 'home' });
      }
    },
    setFrench() {
      this.$i18n.locale = 'fr';
      if (this.$route.name !== 'accueil') {
        this.$router.replace({ name: 'accueil' });
      }
    },
  },
};
</script>

<style scoped>
  .w-100 {
    width: 100%;
  }
</style>
