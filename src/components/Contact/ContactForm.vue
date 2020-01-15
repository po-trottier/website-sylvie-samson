<template>
  <v-form
    lazy-validation
    action="https://submit-form.com/taRj1iCup2tM14J9Uru9a">
    <v-text-field
      v-for="field in fields"
      dense
      outlined
      flat
      :key="field.id"
      :name="field.name"
      :type="field.type"
      :placeholder="field.placeholder" />
    <v-textarea
      outlined
      flat
      name="message"
      :placeholder="$t('questions.message')" />
    <v-btn
      depressed
      large
      block
      dark
      color="#000a"
      type="submit">
      {{ $t('questions.send') }}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',

  computed: {
    fields() {
      return [
        { name: 'name', type: 'text', placeholder: this.$t('questions.name') },
        { name: 'email', type: 'email', placeholder: this.$t('questions.email') },
        { name: 'phone', type: 'tel', placeholder: this.$t('questions.phone') },
        { name: 'subject', type: 'text', placeholder: this.$t('questions.subject') },
      ];
    },
  },
};
</script>
