<template>
  <div id="services">
    <v-container class="padding">
      <app-services-description />
      <v-row no-gutters>
        <v-col
          class="pa-4"
          cols="12"
          md="6"
          xl="3">
          <app-services-individual />
        </v-col>
        <v-col
          class="pa-4"
          cols="12"
          md="6"
          xl="3">
          <app-services-family />
        </v-col>
        <v-col
          class="pa-4"
          cols="12"
          md="6"
          xl="3">
          <app-services-parents />
        </v-col>
        <v-col
          class="pa-4"
          cols="12"
          md="6"
          xl="3">
          <app-services-professionals />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ServicesDescription from './ServicesDescription.vue';
import ServicesIndividual from './ServicesIndividual.vue';
import ServicesFamily from './ServicesFamily.vue';
import ServicesProfessionals from './ServicesProfessionals.vue';
import ServicesParents from './ServicesParents.vue';

export default {
  name: 'Services',

  components: {
    appServicesDescription: ServicesDescription,
    appServicesFamily: ServicesFamily,
    appServicesIndividual: ServicesIndividual,
    appServicesProfessionals: ServicesProfessionals,
    appServicesParents: ServicesParents,
  },
};
</script>

<style scoped>
  .padding {
    padding: 64px 0;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 32px 16px;
    }
  }
</style>
