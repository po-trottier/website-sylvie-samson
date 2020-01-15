<template>
  <div>
    <h5 class="mb-4">
      Contact
    </h5>
    <p
      class="mb-0 mt-2"
      style="line-height: 1.2rem;"
      v-for="link in links"
      :key="link.id">
      <a
        :href="link.url"
        target="_blank">
        {{ link.text }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footerlinks',

  computed: {
    links() {
      return [
        { text: 'sylvie.samson.ts@gmail.com', url: 'mailto:sylvie.samson.ts@gmail.com' },
        { text: '(514) 756-4673', url: 'tel:+15147564673' },
        { text: '5777 Boulevard Gouin Ouest Montreal QC Canada H4J 1E3', url: 'https://goo.gl/maps/fnV2yrT3Byz' },
      ];
    },
  },
};
</script>
