<template>
  <v-card
    flat
    outlined
    height="100%">
    <v-img
      height="250"
      src="@/assets/images/professionals.png" />
    <v-card-subtitle class="mt-3">
      <h5 class="text-center">
        {{ $t('services.professionals') }}
      </h5>
    </v-card-subtitle>
    <v-card-text class="px-6 text-justify">
      <p class="mb-2">
        {{ $t('services.professionalsContent.part1') }}
      </p>
      <ul>
        <li>{{ $t('services.professionalsContent.bullet1') }}</li>
        <li>{{ $t('services.professionalsContent.bullet2') }}</li>
        <li>{{ $t('services.professionalsContent.bullet3') }}</li>
      </ul>
      <p class="mt-2">
        <b>
          {{ $t('services.professionalsContent.part2') }}
        </b>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ServicesProfessionals',
};
</script>
