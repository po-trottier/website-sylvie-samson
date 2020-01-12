<template>
  <v-row
    no-gutters
    class="w-100 mx-auto"
    style="max-width: 700px;">
    <v-col
      class="text-center pa-5"
      cols="12"
      md="6">
      <p
        class="mx-auto unselectable"
        style="max-width: 350px;">
        {{ $t('landing.frDescription') }}
      </p>
      <v-btn
        rounded
        depressed
        color="white"
        width="150"
        @click="setFrench">
        {{ $t('landing.fr') }}
      </v-btn>
    </v-col>
    <v-col
      class="text-center pa-5"
      cols="12"
      md="6">
      <p
        class="mx-auto unselectable"
        style="max-width: 350px;">
        {{ $t('landing.enDescription') }}
      </p>
      <v-btn
        rounded
        depressed
        color="white"
        width="150"
        @click="setEnglish">
        {{ $t('landing.en') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LandingLinks',

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
