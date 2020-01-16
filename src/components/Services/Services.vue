<template>
  <div id="services">
    <v-container class="padding">
      <div class="narrow">
        <h1 class="text-center">
          {{ $t('services.title') }}
        </h1>
        <v-divider
          width="100px"
          class="mx-auto my-4" />
        <p class="text-center">
          {{ $t('services.description') }}
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
  .theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.75) !important;
    border-width: 3px !important;
  }

  .padding {
    padding: 64px 0;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 8px 0;
    }
  }
</style>
