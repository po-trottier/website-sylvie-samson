<template>
  <div>
    <span class="d-flex align-center justify-sm-center justify-md-start mb-4">
      <v-icon
        color="grey"
        class="mr-2">
        mdi-email
      </v-icon>
      <h5>
        {{ $t('footer.contact') }}
      </h5>
    </span>
    <ul>
      <li
        v-for="link in links"
        :key="link.id">
        <a
          :href="link.url"
          target="_blank">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterContact',

  computed: {
    links() {
      return [
        { text: this.$t('contact.email'), url: 'mailto:sylvie.samson.ts@gmail.com' },
        { text: this.$t('contact.phone'), url: 'tel:+15147564673' },
        { text: this.$t('contact.address'), url: 'https://goo.gl/maps/fnV2yrT3Byz' },
      ];
    },
  },
};
</script>

<style scoped>
  @media screen and (max-width: 959px) {
    .v-application ul, .v-application ol {
      padding-left: 0 !important;
    }
    ul {
      list-style-type: none;
    }
  }
</style>
