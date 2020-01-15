<template>
  <div>
    <v-divider />
    <v-footer class="pa-0">
      <v-sheet
        tile
        color="light"
        class="w-100">
        <v-container class="text-sm-center text-md-left padding">
          <v-row class="narrow">
            <v-col
              cols="12"
              md="4">
              <app-footer-description />
            </v-col>
            <v-col
              cols="12"
              md="4">
              <app-footer-accessibility />
            </v-col>
            <v-col
              cols="12"
              md="4">
              <app-footer-contact />
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <app-footer-copyrights />
    </v-footer>
  </div>
</template>

<script>
import FooterDescription from './FooterDescription.vue';
import FooterAccessibility from './FooterAccessibility.vue';
import FooterContact from './FooterContact.vue';
import FooterCopyrights from './FooterCopyrights.vue';

export default {
  name: 'Footer',

  components: {
    appFooterDescription: FooterDescription,
    appFooterAccessibility: FooterAccessibility,
    appFooterContact: FooterContact,
    appFooterCopyrights: FooterCopyrights,
  },
};
</script>

<style scoped>
  .padding {
    padding: 32px 0;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 16px;
    }
  }
</style>
