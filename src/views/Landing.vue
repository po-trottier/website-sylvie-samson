<template>
  <div class="home">
    <h1>This is the Landing Page</h1>
    <v-btn @click="setFrench">
      Français
    </v-btn>
    <v-btn @click="setEnglish">
      English
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Landing',

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
