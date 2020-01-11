<template>
  <div>
    <app-header-bar />
    <h1>This is the home page</h1>
  </div>
</template>

<script>
import HeaderBar from '@/components/App/Header/HeaderBar.vue';

export default {
  name: 'Home',

  components: {
    appHeaderBar: HeaderBar,
  },
};
</script>
