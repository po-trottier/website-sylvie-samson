<template>
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
</template>

<script>
export default {
  name: 'LanguageSwitcher',

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
