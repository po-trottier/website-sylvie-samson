<template>
  <v-container>
    <v-row
      v-if="desktop"
      no-gutters
      justify="center"
      align="center"
      class="pt-4 top-border">
      <div
        class="d-flex text-center"
        v-for="(link, index) in links"
        :key="link.id">
        <a
          target="_blank"
          :href="link.url"
          :class="{ 'spacer': index < links.length - 1 }"
          class="white--text"
          style="text-decoration: underline solid white !important;">
          {{ link.text }}
        </a>
        <v-divider
          v-if="index < links.length - 1"
          color="white"
          class="mr-2"
          vertical />
      </div>
    </v-row>
    <div
      v-else
      class="pt-4 top-border text-center"
      style="display: grid;">
      <a
        v-for="(link, index) in links"
        :key="link.id"
        :href="link.url"
        target="_blank"
        :class="{ 'spacer': index < links.length - 1 }"
        class="white--text mb-2">
        {{ link.text }}
      </a>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Landing',

  data() {
    return {
      links: [
        { text: this.$t('footer.address'), url: 'https://goo.gl/maps/fnV2yrT3Byz' },
        { text: this.$t('footer.email'), url: 'mailto:sylvie.samson.ts@gmail.com' },
        { text: this.$t('footer.phone'), url: 'tel:+15147564673' },
        { text: this.$t('footer.facebook'), url: 'https://fb.me/sylvie.samson.ts' },
      ],
    };
  },

  computed: {
    ...mapGetters('size', ['desktop']),
  },
};
</script>

<style scoped>
  .spacer {
    margin-right: 8px;
  }

  .top-border {
    border-top: 4px solid white;
  }
</style>
