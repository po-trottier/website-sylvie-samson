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
        class="mx-auto"
        style="max-width: 350px;">
        Si vous désirez accéder ce site en Français, veuillez cliquer sur ce bouton.
      </p>
      <v-btn
        rounded
        depressed
        width="150"
        @click="setFrench">
        Français
      </v-btn>
    </v-col>
    <v-col
      class="text-center pa-5"
      cols="12"
      md="6">
      <p
        class="mx-auto"
        style="max-width: 350px;">
        If you want to access the website in English, please click the following button.
      </p>
      <v-btn
        rounded
        depressed
        width="150"
        @click="setEnglish">
        English
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
