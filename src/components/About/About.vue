<template>
  <div id="about">
    <v-sheet
      tile
      color="primary">
      <v-container class="padding justify-center">
        <v-row
          no-gutters
          justify="center"
          align="center">
          <v-col
            cols="12"
            md="7">
            <v-img
              width="600"
              class="card-left rounded-card outlined"
              src="@/assets/images/profile.png" />
          </v-col>
          <v-col
            cols="12"
            md="5">
            <v-card
              :elevation="phone ? 0 : 10"
              class="card-right pa-4">
              <v-card-title class="justify-center mb-2">
                <h3 class="text-center">
                  {{ $t('about.title') }}
                </h3>
              </v-card-title>
              <v-card-text class="text-center py-0">
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
                  @click="$vuetify.goTo('#career', { duration: 500, offset: -105 })">
                  {{ $t('about.career') }}
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
import { mapGetters } from 'vuex';

export default {
  name: 'About',

  computed: {
    ...mapGetters('size', ['phone']),
  },
};
</script>

<style scoped>
  .card-left {
    transform: translateX(230px);
  }
  .card-right {
    transform: translateX(-230px);
  }
  .padding {
    padding: 64px 0;
  }

  @media screen and (max-width: 1903px) {
    .card-left {
      transform: translateX(60px);
    }
    .card-right {
      transform: translateX(-60px);
    }
  }

  @media screen and (max-width: 1263px) {
    .card-left {
      transform: translateX(20px);
    }
    .card-right {
      transform: translateX(-20px);
    }
  }

  @media screen and (max-width: 959px) {
    .card-left {
      transform: translateX(0);
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 16px;
    }
    .card-right {
      transform: translateX(0);
    }
    .padding {
      padding: 16px 16px;
    }
  }
</style>
