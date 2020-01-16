<template>
  <v-card
    flat
    outlined
    height="100%">
    <v-img
      height="250"
      src="@/assets/images/family.png" />
    <v-card-subtitle class="mt-3">
      <h5 class="text-center">
        {{ $t('services.family') }}
      </h5>
    </v-card-subtitle>
    <v-card-text class="px-6 text-justify">
      <p class="ma-0">
        {{ $t('services.familyContent') }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ServicesFamily',
};
</script>
