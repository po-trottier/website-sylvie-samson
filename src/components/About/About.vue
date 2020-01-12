<template>
  <div id="about">
    <v-sheet
      tile
      color="primary">
      <v-container class="py-10 justify-center">
        <v-row
          no-gutters
          justify="center"
          align="center"
          class="my-5">
          <v-col
            cols="12"
            md="7">
            <v-card
              class="card-left"
              width="600">
              <v-img src="@/assets/profile.png" />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="5">
            <v-card
              raised
              class="card-right pa-4">
              <v-card-title class="justify-center mb-2">
                <h3 class="text-center">
                  {{ $t('about.title') }}
                </h3>
              </v-card-title>
              <v-card-text class="text-justify py-0">
                <p>{{ $t('about.content1') }}</p>
                <p>{{ $t('about.content2') }}</p>
                <p>{{ $t('about.content3') }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  rounded
                  depressed
                  outlined
                  large
                  class="px-4 mx-auto"
                  @click="$vuetify.goTo('#career', { duration: 500 })">
                  Ma carrière
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
  .card-left {
    transform: translateX(60px);
  }
  .card-right {
    transform: translateX(-60px);
  }

  @media screen and (max-width: 1263px) {
    .card-left {
      transform: translateX(20px);
    }
    .card-right {
      transform: translateX(-20px);
    }
  }

  @media screen and (max-width: 960px) {
    .card-left {
      transform: translateX(0);
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 48px;
    }
    .card-right {
      transform: translateX(0);
    }
  }
</style>
