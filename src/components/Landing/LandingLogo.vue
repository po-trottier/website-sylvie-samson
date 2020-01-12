<template>
  <div
    class="justify-center align-center"
    :class="{
      'd-flex': desktop,
      'mt-12 text-center': !desktop,
    }">
    <v-avatar
      size="100"
      color="white"
      class="pa-4 mr-5"
      :class="{
        'mb-4': !desktop,
      }">
      <v-img
        contain
        src="@/assets/logo.png" />
    </v-avatar>
    <div style="display: grid;">
      <h2 class="large-text unselectable">
        {{ $t('landing.company') }}
      </h2>
      <span class="text-uppercase unselectable">
        {{ $t('landing.description') }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LandingTitle',

  computed: {
    ...mapGetters('size', ['desktop']),
  },
};
</script>

<style scoped>
  .large-text {
    font-size: 28px;
  }
</style>
