<template>
  <div id="contact">
    <v-sheet
      tile
      color="light">
      <v-container class="padding">
        <v-row
          no-gutters
          justify="center"
          class="narrow">
          <v-col
            cols="12"
            md="7">
            <div class="right-spacing text-center text-md-left">
              <app-contact-description />
              <app-contact-form />
            </div>
          </v-col>
          <v-col
            cols="12"
            md="5">
            <v-img
              height="100%"
              position="right"
              class="rounded-card outlined no-mobile"
              src="@/assets/images/contact.png" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import ContactDescription from './ContactDescription.vue';
import ContactForm from './ContactForm.vue';

export default {
  name: 'Contact',

  components: {
    appContactDescription: ContactDescription,
    appContactForm: ContactForm,
  },
};
</script>

<style scoped>
  .right-spacing {
    margin-right: 32px;
  }
  .padding {
    padding: 64px 16px;
  }

  @media screen and (max-width: 959px) {
    .right-spacing {
      margin-right: 0;
    }
    .padding {
      padding: 32px 16px;
    }
    .no-mobile {
      display: none !important;
    }
  }
</style>
