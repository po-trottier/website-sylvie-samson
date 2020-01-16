<template>
  <div>
    <v-img
      src="@/assets/images/family.png"
      gradient="#000a, #000a"
      style="position: fixed;"
      height="100vh"
      width="100vw" />
    <v-container style="position: relative; z-index: 1; height: 100vh;">
      <v-row
        no-gutters
        justify="center"
        align="center"
        class="h-100">
        <v-card
          raised
          max-width="600"
          class="pa-6">
          <v-card-title class="justify-center">
            <v-icon
              size="150"
              color="primary"
              class="mb-6">
              mdi-emoticon-sad-outline
            </v-icon>
          </v-card-title>
          <v-card-subtitle class="mb-2">
            <h1 class="text-center mb-6">
              {{ $t('404.oops') }}
            </h1>
            <h4 class="text-center mb-2">
              {{ $t('404.fr') }}
            </h4>
            <h4 class="text-center">
              {{ $t('404.en') }}
            </h4>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              :to="{ name: 'landing' }"
              depressed
              large
              color="primary darken-1"
              class="white--text mx-auto mb-4 px-4">
              {{ $t('404.button') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Invalid',

  metaInfo() {
    return {
      title: 'Page introuvable | Page not found',
    };
  },
};
</script>
