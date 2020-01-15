<template>
  <div>
    <h3 class="mb-6">
      {{ $t('questions.title') }}
    </h3>
    <p>
      {{ $t('questions.description') }}
    </p>
    <div
      class="mb-6"
      style="display: grid;">
      <span
        class="mb-2"
        v-for="link in links"
        :key="link.id">
        <a
          :href="link.url"
          target="_blank">
          <u>
            {{ link.text }}
          </u>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDescription',

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
