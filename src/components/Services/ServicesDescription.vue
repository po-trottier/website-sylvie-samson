<template>
  <div class="narrow">
    <h1 class="text-center">
      {{ $t('services.title') }}
    </h1>
    <v-divider
      width="100px"
      class="mx-auto my-6" />
    <p class="text-center">
      {{ $t('services.description') }}
    </p>
    <v-icon
      size="64"
      color="primary"
      class="w-100 mx-auto mt-2 mb-6">
      mdi-chevron-double-down
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'ServicesDescription',
};
</script>

<style scoped>
  .theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.75) !important;
    border-width: 3px !important;
  }
</style>
