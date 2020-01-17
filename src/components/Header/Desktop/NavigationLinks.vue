<template>
  <v-container class="px-0">
    <v-btn
      text
      color="white"
      v-for="(link, index) in links"
      :key="link.id"
      :class="{ 'splitter': index < links.length - 1 }"
      @click="$vuetify.goTo(link.tag, { duration: 500, offset: -105 })">
      {{ link.text }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'NavigationLinks',

  computed: {
    links() {
      return [
        { text: this.$t('header.navigation.home'), tag: '#top' },
        { text: this.$t('header.navigation.about'), tag: '#about' },
        { text: this.$t('header.navigation.career'), tag: '#career' },
        { text: this.$t('header.navigation.whyConsult'), tag: '#consult' },
        { text: this.$t('header.navigation.approach'), tag: '#approach' },
        { text: this.$t('header.navigation.services'), tag: '#services' },
        { text: this.$t('header.navigation.contact'), tag: '#contact' },
      ];
    },
  },
};
</script>

<style scoped>
  .splitter {
    margin-right: 12px;
    padding: 0 8px !important;
  }
</style>
