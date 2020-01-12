<template>
  <div class="mx-auto pa-5 borders text-center">
    <h1 class="xl-text unselectable">
      {{ $t('landing.bienvenue') }}
    </h1>
    <div id="separator" />
    <h1 class="xl-text unselectable">
      {{ $t('landing.welcome') }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'LandingTitle',
};
</script>

<style scoped>
  #separator {
    background-color: white;
    border-radius: 2px;
    height: 4px;
    min-width: 0;
  }

  .borders {
    max-width: 800px;
    border-radius: 16px;
    border: 4px solid white;
    transition: ease 0.3s;
  }

  .xl-text {
    font-size: 85px;
    transition: ease 0.3s;
  }

  @media screen and (max-width: 960px) {
    .xl-text {
      font-size: 50px;
    }
    .borders {
      max-width: 500px;
    }
  }

  @media screen and (max-width: 600px) {
    .xl-text {
      font-size: 35px;
    }
    .borders {
      max-width: 350px;
    }
  }
</style>
