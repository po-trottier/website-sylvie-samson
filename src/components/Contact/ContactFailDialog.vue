<template>
  <v-dialog
    v-model="dialog"
    overlay-opacity="0.8"
    max-width="400">
    <v-card class="pa-0">
      <v-sheet
        tile
        color="error"
        class="white--text">
        <v-card-title class="pa-4 justify-center">
          <h4 class="text-center">
            {{ $t('dialogs.failMail.title') }}
          </h4>
        </v-card-title>
      </v-sheet>
      <v-sheet
        tile
        color="light"
        class="pa-2">
        <v-card-text class="text-center">
          <p>
            {{ $t('dialogs.failMail.text') }}
          </p>
          <p class="mb-0">
            <b>
              {{ $t('dialogs.failMail.call') }}
            </b>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="error"
            block
            depressed
            dark
            @click="setFailMail(false)">
            {{ $t('dialogs.failMail.button') }}
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactFailDialog',

  computed: {
    ...mapGetters('dialogs', ['failMail']),

    dialog: {
      get() {
        return this.failMail;
      },
      set(val) {
        this.setFailMail(val);
      },
    },
  },

  methods: {
    ...mapActions('dialogs', ['setFailMail']),
  },
};
</script>

<style scoped>

</style>
