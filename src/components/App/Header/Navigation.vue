<template>
  <v-container class="px-0">
    <v-btn
      text
      color="white"
      v-for="(section, index) in sections"
      :key="section.id"
      :class="{ 'splitter': index < sections.length - 1 }">
      {{ section.text }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Naviagtion',

  data() {
    return {
      sections: [
        { text: 'Accueil', tag: '#accueil' },
        { text: 'À propos', tag: '#a-propos' },
        { text: 'Pourquoi consulter', tag: '#pourquoi-consulter' },
        { text: 'Carrière', tag: '#carrière' },
        { text: 'Approche', tag: '#approche' },
        { text: 'Services', tag: '#services' },
        { text: 'Me contacter', tag: '#contacter' },
      ],
    };
  },
};
</script>

<style scoped>
  .splitter {
    margin-right: 16px;
    padding: 0 8px !important;
  }
</style>
