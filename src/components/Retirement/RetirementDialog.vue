<template>
  <v-dialog
    v-model="dialog"
    overlay-opacity="0.8"
    max-width="400">
    <v-card class="pa-0">
      <v-sheet
        tile
        color="success"
        class="white--text">
        <v-card-title class="pa-4 justify-center">
          <h4 class="text-center">
            {{ $t('dialogs.retirement.title') }}
          </h4>
        </v-card-title>
      </v-sheet>
      <v-sheet
        tile
        color="light"
        class="pa-2">
        <v-card-text class="text-center">
          <!--eslint-disable-next-line-->
          <p v-html="$t('dialogs.retirement.text')" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            depressed
            @click="setRetirement(false)">
            {{ $t('dialogs.retirement.button') }}
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RetirementDialog',

  computed: {
    ...mapGetters('dialogs', ['retirement']),

    dialog: {
      get() {
        return this.retirement;
      },
      set(val) {
        this.setRetirement(val);
      },
    },
  },

  methods: {
    ...mapActions('dialogs', ['setRetirement']),
  },
};
</script>

<style scoped>
</style>
