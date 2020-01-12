<template>
  <router-link
    :to="{ name: 'landing' }"
    class="d-flex">
    <v-img
      contain
      alt="Sylvie Samson Logo"
      class="shrink mr-5"
      src="@/assets/logo.png"
      width="50" />
    <div
      class="unselectable my-auto"
      style="display: grid;">
      <h4 class="headline text-uppercase font-weight-bold">
        {{ $t('header.company') }}
      </h4>
      <span class="text-none">
        {{ $t('header.description') }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CompanyLogo',
};
</script>
