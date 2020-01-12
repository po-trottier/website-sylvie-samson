<template>
  <div
    id="consult"
    class="py-10">
    <v-container class="py-10 narrow">
      <div class="text-center">
        <h3>
          {{ $t('consult.title') }}
        </h3>
        <h4 class="avenir font-weight-regular">
          {{ $t('consult.subtitle') }}
        </h4>
      </div>
      <v-divider class="ma-6" />
      <div class="text--secondary mx-6">
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
      </div>
    </v-container>
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
  .narrow {
    margin-left: auto;
    margin-right: auto;
    max-width: 1350px;
  }
</style>
