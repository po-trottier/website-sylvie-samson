<template>
  <div id="resources">
    <v-container class="text-center padding">
      <h3 class="mb-6">
        {{ $t('resources.title') }}
      </h3>
      <v-row
        no-gutters
        class="narrow">
        <v-col
          v-for="resource in resources"
          :key="resource.id"
          cols="12"
          md="4"
          class="py-2 px-4">
          <v-hover v-slot:default="{ hover }">
            <v-card
              height="100%"
              target="_blank"
              :href="resource.url"
              :elevation="hover ? 6 : 0"
              outlined>
              <v-card-title class="justify-center">
                <v-icon
                  size="100"
                  :color="resource.color">
                  mdi-earth
                </v-icon>
              </v-card-title>
              <v-card-text class="text-center">
                <h5 class="mb-0">
                  {{ resource.text }}
                </h5>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Resources',

  computed: {
    resources() {
      return [
        { color: 'info', text: this.$t('resources.link1'), url: 'https://otstcfq.org/' },
        { color: 'primary', text: this.$t('resources.link2'), url: 'http://adoption.gouv.qc.ca/' },
        { color: 'warning', text: this.$t('resources.link3'), url: 'http://petalesquebec.org/' },
      ];
    },
  },
};
</script>

<style scoped>
  .padding {
    padding: 48px 0;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 16px 0;
    }
  }
</style>
