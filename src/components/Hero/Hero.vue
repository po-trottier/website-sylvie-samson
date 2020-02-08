<template>
  <div id="top">
    <v-parallax
      height="900"
      style="padding-top: 100px"
      src="@/assets/images/family.png">
      <div id="home-overlay" />
      <v-container class="elevate text-center">
        <h2>
          {{ $t('general.socialWorker') }}
        </h2>
        <h1 class="xl-text mb-5">
          {{ $t('home.tagline') }}
        </h1>
        <p
          class="mx-auto mb-10"
          style="max-width: 800px">
          {{ $t('home.description') }}
        </p>
        <v-btn
          rounded
          depressed
          large
          color="white"
          @click="$vuetify.goTo('#contact', { duration: 500, offset: -105 })">
          {{ $t('home.action') }}
        </v-btn>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
  #home-overlay {
    position: absolute;
    width: 100vw;
    height: 1000px;
    background-color: black;
    opacity: 0.40;
    top: 0;
  }

  .elevate {
    position: relative;
    z-index: 1;
  }

  .xl-text {
    font-size: 60px;
    transition: ease 0.3s;
  }

  @media screen and (max-width: 959px) {
    .xl-text {
      font-size: 45px;
    }
  }
</style>
