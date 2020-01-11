<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Sylvie Samson',
    titleTemplate: '%s | Sylvie Samson',
  },
};
</script>
