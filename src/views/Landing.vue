<template>
  <div>
    <video
      v-if="desktop"
      id="landing-video"
      autoplay
      loop>
      <source
        src="@/assets/videos/landing.mp4"
        type="video/mp4">
    </video>
    <v-img
      v-else
      id="landing-image"
      src="@/assets/family.png" />
    <div id="landing-overlay" />
    <app-landing-content id="landing-content" />
    <app-landing-footer id="landing-footer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LandingContent from '@/components/Landing/LandingContent.vue';
import LandingFooter from '@/components/Landing/LandingFooter.vue';

export default {
  name: 'Landing',

  metaInfo() {
    return {
      title: this.$t('views.landing'),
    };
  },

  computed: {
    ...mapGetters('size', ['desktop']),
  },

  components: {
    appLandingContent: LandingContent,
    appLandingFooter: LandingFooter,
  },
};
</script>

<style scoped>
  #landing-video {
    position: fixed;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }

  #landing-image {
    position: fixed;
    height: 100vh;
    width: 100vw;
  }

  #landing-overlay {
    position: fixed;
    background-color: black;
    opacity: 0.5;
    height: 100vh;
    width: 100vw;
  }

  #landing-content {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }

  #landing-footer {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-height: 1100px) {
    #landing-content {
      position: relative;
      left: 0;
      top: 0;
      transform: translate(0, 0);
    }
    #landing-footer {
      position: relative;
      margin-top: 64px;
    }
  }
</style>
