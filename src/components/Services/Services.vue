<template>
  <div id="services">
    <v-container class="padding">
      <h1>Services</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
  .padding {
    padding: 64px 0;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 8px 0;
    }
  }
</style>
