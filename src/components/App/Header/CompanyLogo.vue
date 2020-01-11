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
      <span class="headline text-uppercase font-weight-bold">
        Sylvie Samson
      </span>
      <span class="text-none">
        Travailleuse Sociale | Social Worker
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CompanyLogo',
};
</script>
