<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    disable-resize-watcher>
    <app-drawer-content
      class="h-100"
      style="overflow-y: hidden" />
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DrawerContent from './DrawerContent.vue';

export default {
  name: 'NavigationDrawer',

  computed: {
    ...mapGetters('drawer', ['isOpened']),

    drawer: {
      get() {
        return this.isOpened;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },

  methods: {
    ...mapActions('drawer', ['setDrawer']),
  },

  components: {
    appDrawerContent: DrawerContent,
  },
};
</script>
