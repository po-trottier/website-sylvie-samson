<template>
  <div>
    <!--Page Header-->
    <app-desktop-header v-if="desktop" />
    <div v-else>
      <app-mobile-header />
      <app-mobile-drawer />
    </div>
    <!--Page Content-->
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
import { mapGetters } from 'vuex';

import DesktopHeader from '@/components/Header/Desktop/DesktopHeader.vue';
import MobileHeader from '@/components/Header/Mobile/MobileHeader.vue';
import MobileDrawer from '@/components/Header/Mobile/NavigationDrawer.vue';

import Home from '@/components/Hero/Hero.vue';
import About from '@/components/About/About.vue';
import Consult from '@/components/Consult/Consult.vue';
import Career from '@/components/Career/Career.vue';
import Approach from '@/components/Approach/Approach.vue';
import Services from '@/components/Services/Services.vue';
import Contact from '@/components/Contact/Contact.vue';
import BackToTop from '@/components/BackToTop/BackToTop.vue';
import Resources from '@/components/Resources/Resources.vue';
import Footer from '@/components/Footer/Footer.vue';

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

  components: {
    appDesktopHeader: DesktopHeader,
    appMobileHeader: MobileHeader,
    appMobileDrawer: MobileDrawer,
    appHome: Home,
    appAbout: About,
    appConsult: Consult,
    appCareer: Career,
    appApproach: Approach,
    appServices: Services,
    appContact: Contact,
    appResources: Resources,
    appFooter: Footer,
    appBackToTop: BackToTop,
  },
};
</script>
