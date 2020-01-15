<template>
  <div class="h-100">
    <router-link :to="{ name: 'landing' }">
      <v-img
        contain
        src="@/assets/logo.png"
        height="64"
        class="my-4" />
      <div
        class="unselectable mx-auto text-center"
        style="display: grid; line-height: 1.4rem; opacity: 0.9;">
        <h4 class="text-uppercase font-weight-bold">
          {{ $t('general.company') }}
        </h4>
      </div>
    </router-link>
    <v-container class="text-center">
      <v-row
        no-gutters
        justify="center">
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
    </v-container>
    <v-divider />
    <v-sheet
      tile
      color="light"
      class="pt-2 h-100">
      <v-list
        nav
        class="py-0">
        <v-list-item
          color="primary"
          class="text-center"
          v-for="link in links"
          :key="link.id">
          <v-btn
            depressed
            outlined
            large
            block
            class="black--text"
            @click="scrollTo(link.tag)">
            {{ link.text }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DrawerContent',

  computed: {
    links() {
      return [
        { text: this.$t('header.navigation.home'), tag: '#top' },
        { text: this.$t('header.navigation.about'), tag: '#about' },
        { text: this.$t('header.navigation.career'), tag: '#career' },
        { text: this.$t('header.navigation.whyConsult'), tag: '#consult' },
        { text: this.$t('header.navigation.approach'), tag: '#approach' },
        { text: this.$t('header.navigation.services'), tag: '#services' },
        { text: this.$t('header.navigation.resources'), tag: '#resources' },
        { text: this.$t('header.navigation.contact'), tag: '#contact' },
      ];
    },
  },

  methods: {
    ...mapActions('drawer', ['setDrawer']),

    setEnglish() {
      this.$i18n.locale = 'en';
      if (this.$route.name !== 'home') {
        this.$router.replace({ name: 'home' });
        this.scrollTo('#top');
      }
    },
    setFrench() {
      this.$i18n.locale = 'fr';
      if (this.$route.name !== 'accueil') {
        this.$router.replace({ name: 'accueil' });
        this.scrollTo('#top');
      }
    },
    scrollTo(tag) {
      this.$vuetify.goTo(tag, { duration: 500 });
      this.setDrawer(false);
    },
  },
};
</script>

<style scoped>
  .v-btn--outlined {
    border: 2px solid #b2d330 !important;
  }
</style>
