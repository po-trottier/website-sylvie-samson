<template>
  <div id="approach">
    <v-sheet
      tile
      color="primary">
      <v-container class="py-12 narrow">
        <v-row
          no-gutters
          justify="center"
          align="center">
          <v-col
            cols="12"
            md="6"
            lg="5">
            <v-card class="pa-4">
              <v-card-title class="justify-center">
                <h3 class="mb-2">
                  {{ $t('approach.title') }}
                </h3>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <p>
                  {{ $t('approach.subtitle') }}
                </p>
              </v-card-subtitle>
              <v-card-text class="text-justify">
                <p>{{ $t('approach.content1') }}</p>
                <p>{{ $t('approach.content2') }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="7">
            <v-card>
              <v-card-text class="pa-0">
                <v-img src="@/assets/images/hands.png" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'Approach',
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

  @media screen and (max-width: 960px) {
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
