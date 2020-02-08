<template>
  <div id="consult">
    <v-divider />
    <v-sheet
      tile
      color="light">
      <v-container class="padding">
        <v-row class="narrow">
          <v-col
            cols="12"
            md="4"
            class="hide-mobile">
            <v-img
              height="100%"
              class="rounded-card outlined"
              src="@/assets/images/zen.png" />
          </v-col>
          <v-col
            cols="12"
            md="8">
            <v-card
              flat
              outlined
              class="card-padding">
              <v-card-title class="justify-center mb-3">
                <h3 class="text-center">
                  {{ $t('consult.title') }}
                </h3>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <h4 class="avenir font-weight-regular">
                  {{ $t('consult.subtitle') }}
                </h4>
              </v-card-subtitle>
              <v-divider class="mx-6 my-4" />
              <v-card-text class="text--secondary px-6">
                <p>{{ $t('consult.content1') }}</p>
                <ul class="mb-4">
                  <li
                    v-for="bullet in bullets1"
                    :key="bullet.id">
                    {{ bullet }}
                  </li>
                </ul>
                <p>{{ $t('consult.content2') }}</p>
                <ul class="mb-4">
                  <li
                    v-for="bullet in bullets2"
                    :key="bullet.id">
                    {{ bullet }}
                  </li>
                </ul>
                <p>{{ $t('consult.content3') }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'Consult',

  computed: {
    bullets1() {
      return [
        this.$t('consult.bullet1'),
        this.$t('consult.bullet2'),
        this.$t('consult.bullet3'),
        this.$t('consult.bullet4'),
        this.$t('consult.bullet5'),
        this.$t('consult.bullet6'),
        this.$t('consult.bullet7'),
        this.$t('consult.bullet8'),
        this.$t('consult.bullet9'),
        this.$t('consult.bullet10'),
        this.$t('consult.bullet11'),
      ];
    },
    bullets2() {
      return [
        this.$t('consult.bullet12'),
        this.$t('consult.bullet13'),
        this.$t('consult.bullet14'),
        this.$t('consult.bullet15'),
        this.$t('consult.bullet16'),
        this.$t('consult.bullet17'),
        this.$t('consult.bullet18'),
        this.$t('consult.bullet19'),
      ];
    },
  },
};
</script>

<style scoped>
  .padding {
    padding: 48px 0;
  }
  .card-padding {
    padding: 16px;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 0;
    }
    .card-padding {
      padding: 0;
    }
    .hide-mobile {
      display: none;
    }
  }
</style>
