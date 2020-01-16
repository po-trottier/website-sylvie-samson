<template>
  <div class="text-center text-md-left">
    <h4>
      {{ $t('general.company') }}
    </h4>
    <p class="text-uppercase grey--text mb-1">
      {{ $t('general.socialWorker') }}
    </p>
    <p class="ma-0 limit-width">
      {{ $t('footer.description') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FooterDescription',
};
</script>

<style scoped>
  .limit-width {
    max-width: 320px;
  }

  @media screen and (max-width: 959px) {
    .limit-width {
      max-width: 400px;
      margin-left: auto !important;
      margin-right: auto !important;;
    }
  }
</style>
