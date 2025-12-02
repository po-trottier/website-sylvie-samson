<template>
  <div>
    <!--Page Header-->
    <app-desktop-header v-if="desktop" />
    <div v-else>
      <app-mobile-header />
      <app-mobile-drawer />
    </div>
    <!--Page Content-->
    <app-retirement-dialog />
    <app-home style="margin-top: -100px;" />
    <app-about />
    <app-career />
    <app-consult />
    <app-approach />
    <app-services />
    <app-contact />
    <app-resources />
    <app-footer />
    <!--Back To Top-->
    <app-back-to-top />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import DesktopHeader from '@/components/Header/Desktop/DesktopHeader.vue';
import MobileHeader from '@/components/Header/Mobile/MobileHeader.vue';
import MobileDrawer from '@/components/Header/Mobile/NavigationDrawer.vue';

import About from '@/components/About/About.vue';
import Approach from '@/components/Approach/Approach.vue';
import BackToTop from '@/components/BackToTop/BackToTop.vue';
import Career from '@/components/Career/Career.vue';
import Consult from '@/components/Consult/Consult.vue';
import Contact from '@/components/Contact/Contact.vue';
import Footer from '@/components/Footer/Footer.vue';
import Home from '@/components/Hero/Hero.vue';
import Resources from '@/components/Resources/Resources.vue';
import RetirementDialog from '@/components/Retirement/RetirementDialog.vue';
import Services from '@/components/Services/Services.vue';

export default {
  name: 'Home',

  metaInfo() {
    return {
      title: this.$t('views.home'),
    };
  },

  computed: {
    ...mapGetters('size', ['desktop']),
  },

  methods: {
    ...mapActions('dialogs', ['setRetirement']),
  },

  mounted() {
    // Show retirement dialog on page load
    this.setRetirement(true);
  },

  components: {
    appDesktopHeader: DesktopHeader,
    appMobileHeader: MobileHeader,
    appMobileDrawer: MobileDrawer,
    appAbout: About,
    appApproach: Approach,
    appBackToTop: BackToTop,
    appCareer: Career,
    appConsult: Consult,
    appContact: Contact,
    appFooter: Footer,
    appHome: Home,
    appResources: Resources,
    appRetirementDialog: RetirementDialog,
    appServices: Services,
  },
};
</script>
