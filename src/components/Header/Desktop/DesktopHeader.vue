<template>
  <v-app-bar
    app
    flat
    tile
    extended
    hide-on-scroll
    scroll-threshold="1"
    extension-height="48"
    height="110"
    color="white">
    <!--Main Content-->
    <v-container class="century">
      <v-row>
        <!--Company Logo + Name-->
        <app-company-logo />
        <!--Push to the Right-->
        <v-spacer />
        <!--Language Switcher-->
        <app-language-switcher />
      </v-row>
    </v-container>
    <!--Navigation Bar-->
    <template v-slot:extension>
      <v-sheet
        tile
        color="dark"
        class="w-100">
        <app-navigation />
      </v-sheet>
    </template>
  </v-app-bar>
</template>

<script>
import CompanyLogo from './CompanyLogo.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import Navigation from './NavigationLinks.vue';

export default {
  name: 'DesktopHeader',

  components: {
    appCompanyLogo: CompanyLogo,
    appLanguageSwitcher: LanguageSwitcher,
    appNavigation: Navigation,
  },
};
</script>
