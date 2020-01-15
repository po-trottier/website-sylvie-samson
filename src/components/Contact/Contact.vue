<template>
  <div id="contact">
    <v-sheet
      tile
      color="light">
      <v-container class="padding">
        <v-row
          no-gutters
          justify="center"
          class="narrow">
          <v-col
            cols="12"
            md="7">
            <div class="right-spacing  text-center text-md-left">
              <h3 class="mb-6">
                Any Questions?
              </h3>
              <p>
                If you have questions about my services or any other inquiries,
                feel free to send me an e-mail at any time.
              </p>
              <div
                class="mb-6"
                style="display: grid;">
                <span>
                  <a
                    href="https://goo.gl/maps/gpK73aX3ZnP2"
                    target="_blank">
                    <u>
                      5777 Boulevard Gouin Ouest, Montreal, QC, Canada, H4J 1E3
                    </u>
                  </a>
                </span>
                <span>
                  <a
                    href="mailto:sylvie.samson.ts@gmail.com"
                    target="_blank">
                    <u>
                      sylvie.samson.ts@gmail.com
                    </u>
                  </a>
                </span>
                <span>
                  <a
                    href="tel:+15147564673"
                    target="_blank">
                    <u>
                      (514) 756-4673
                    </u>
                  </a>
                </span>
              </div>
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
                  no-resize
                  name="message"
                  placeholder="Message" />
                <v-btn
                  depressed
                  large
                  block
                  dark
                  color="#000a"
                  type="submit">
                  Send
                </v-btn>
              </v-form>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="5">
            <v-img
              height="100%"
              position="right"
              class="rounded-card outlined"
              src="@/assets/images/contact.png" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  computed: {
    fields() {
      return [
        { name: 'name', type: 'text', placeholder: 'Name' },
        { name: 'email', type: 'email', placeholder: 'Email' },
        { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
        { name: 'subject', type: 'text', placeholder: 'Subject' },
      ];
    },
  },
};
</script>

<style scoped>
  .left-spacing {
    margin-left: 32px;
  }
  .right-spacing {
    margin-right: 32px;
  }
  .padding {
    padding: 64px 16px;
  }

  @media screen and (max-width: 960px) {
    .left-spacing {
      display: none;
    }
    .right-spacing {
      margin-right: 0;
    }
    .padding {
      padding: 16px;
    }
  }
</style>
