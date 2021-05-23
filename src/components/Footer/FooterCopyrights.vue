<template>
  <v-sheet
    tile
    color="black"
    class="white--text w-100">
    <v-container class="text-center">
      <p class="mb-0">
        © {{ year + ' ' + $t('general.company') }}
      </p>
      <p class="mb-0">
        {{ $t('footer.conception') }}
        <a
          href="https://p-o.me"
          target="_blank"
          class="white--text">
          <b>{{ $t('footer.designer') }}</b>
        </a>
      </p>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'FooterCopyrights',

  computed: {
    year() {
      const d = new Date();
      return d.getFullYear();
    },
  },
};
</script>
