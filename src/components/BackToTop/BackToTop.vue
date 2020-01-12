<template>
  <v-fab-transition>
    <v-btn
      v-if="show"
      fab
      bottom
      right
      fixed
      class="ma-5"
      @click="$vuetify.goTo('#top', { duration: 500 })">
      <v-icon>
        mdi-arrow-up
      </v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'BackToTop',

  data() {
    return {
      scroll: false,
    };
  },

  computed: {
    show() {
      return this.scroll > 400;
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = window.scrollY;
    });
  },
};
</script>
