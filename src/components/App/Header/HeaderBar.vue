<template>
  <v-app-bar
    app
    color="white"
    height="100">
    <div class="d-flex w-100">
      <v-img
        contain
        alt="Sylvie Samson Logo"
        class="shrink mr-5"
        src="@/assets/logo.png"
        width="50" />

      <div style="display: grid;">
        <span class="headline text-uppercase"><b>Sylvie Samson</b></span>
        <span>Travailleuse Socale</span>
      </div>

      <v-spacer />

      <div style="display: grid;">
        <span class="text-uppercase"><b>Language</b></span>
        <v-row>
          <v-btn
            href="/"
            small
            text>
            EN
          </v-btn>
          <span>|</span>
          <v-btn
            href="/"
            small
            text>
            FR
          </v-btn>
        </v-row>
      </div>
    </div>
    <div />
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderBar',
};
</script>

<style scoped>
  .w-100 {
    width: 100%;
  }
</style>
