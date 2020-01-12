<template>
  <div
    class="text-uppercase my-auto"
    style="display: grid;">
    <span class="font-weight-bold mx-auto">
      {{ $t('header.language') }}
    </span>
    <v-row
      no-gutters
      justify="end">
      <v-btn
        text
        small
        @click="setEnglish"
        class="slim">
        {{ $t('header.en') }}
      </v-btn>
      <span class="mx-1 unselectable">|</span>
      <v-btn
        text
        small
        @click="setFrench"
        class="slim">
        {{ $t('header.fr') }}
      </v-btn>
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

<style scoped>
  .slim {
    padding: 0 8px !important;
    min-width: 35px !important;
  }
</style>
