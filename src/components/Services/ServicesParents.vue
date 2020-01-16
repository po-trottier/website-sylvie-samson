<template>
  <v-card
    flat
    outlined
    height="100%">
    <v-img
      height="250"
      src="@/assets/images/parents.png" />
    <v-card-subtitle class="mt-3">
      <h5 class="text-center">
        {{ $t('services.parents') }}
      </h5>
    </v-card-subtitle>
    <v-card-text class="px-6 text-justify">
      <p class="mb-2">
        {{ $t('services.parentsContent.part1') }}
      </p>
      <p class="my-2">
        {{ $t('services.parentsContent.part2') }}
      </p>
      <p class="my-2">
        {{ $t('services.parentsContent.part3') }}
      </p>
      <p class="my-2">
        <b>
          {{ $t('services.parentsContent.part4') }}
        </b>
      </p>
      <p class="my-2">
        <b>
          {{ $t('services.parentsContent.part5') }}
        </b>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ServicesParents',
};
</script>
