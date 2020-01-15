<template>
  <v-form>
    <v-text-field
      v-model="name"
      dense
      outlined
      flat
      required
      type="text"
      :placeholder="$t('questions.name')" />
    <v-text-field
      v-model="email"
      dense
      outlined
      flat
      required
      type="email"
      :placeholder="$t('questions.email')" />
    <v-text-field
      v-model="phone"
      dense
      outlined
      flat
      required
      type="tel"
      :placeholder="$t('questions.phone')" />
    <v-text-field
      v-model="subject"
      dense
      outlined
      flat
      required
      type="text"
      :placeholder="$t('questions.subject')" />
    <v-textarea
      outlined
      flat
      required
      v-model="message"
      name="message"
      :placeholder="$t('questions.message')" />
    <v-btn
      :disabled="!valid"
      :loading="progress"
      depressed
      large
      block
      dark
      color="#000a"
      @click="submitForm">
      {{ $t('questions.send') }}
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',

  data() {
    return {
      progress: false,
      name: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
    };
  },

  computed: {
    valid() {
      return this.name
        && this.email
        && this.phone
        && this.subject
        && this.message;
    },
  },

  methods: {
    ...mapActions('dialogs', ['setSuccessMail', 'setFailMail']),

    submitForm() {
      this.progress = true;
      emailjs.send('sendgrid', 'sylviesamson', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message,
        _replyto: this.email,
      }, process.env.VUE_APP_EMAIL_JS).then(() => {
        this.name = null;
        this.email = null;
        this.phone = null;
        this.subject = null;
        this.message = null;
        this.setSuccessMail(true);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        this.setFailMail(true);
      }).finally(() => {
        this.progress = false;
      });
    },
  },
};
</script>
