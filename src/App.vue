<template>
  <v-app style="overflow-x: hidden;">
    <v-content>
      <transition name="fade">
        <router-view />
      </transition>
      <app-contact-success />
      <app-contact-fail />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import ContactSuccessDialog from '@/components/Contact/ContactSuccessDialog.vue';
import ContactFailDialog from '@/components/Contact/ContactFailDialog.vue';

export default {
  name: 'App',

  metaInfo() {
    return {
      title: 'Sylvie Samson',
      titleTemplate: '%s | Sylvie Samson',
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },

  methods: {
    ...mapActions('size', ['setWidth', 'setHeight']),
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.setWidth(window.innerWidth);
      this.setHeight(window.innerHeight);
    });
  },

  components: {
    appContactSuccess: ContactSuccessDialog,
    appContactFail: ContactFailDialog,
  },
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition-duration: 0.075s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 50%
  }
</style>
