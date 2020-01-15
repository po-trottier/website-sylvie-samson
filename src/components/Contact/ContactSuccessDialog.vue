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
            {{ $t('dialogs.successMail.title') }}
          </h4>
        </v-card-title>
      </v-sheet>
      <v-sheet
        tile
        color="light"
        class="pa-2">
        <v-card-text class="text-center">
          <p>
            {{ $t('dialogs.successMail.text') }}
          </p>
          <p class="mb-0">
            <b>
              {{ $t('dialogs.successMail.call') }}
            </b>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="success"
            block
            depressed
            @click="setSuccessMail(false)">
            {{ $t('dialogs.successMail.button') }}
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactSuccessDialog',

  computed: {
    ...mapGetters('dialogs', ['successMail']),

    dialog: {
      get() {
        return this.successMail;
      },
      set(val) {
        this.setSuccessMail(val);
      },
    },
  },

  methods: {
    ...mapActions('dialogs', ['setSuccessMail']),
  },
};
</script>

<style scoped>

</style>
