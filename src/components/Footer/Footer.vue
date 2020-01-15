<template>
  <div>
    <v-divider />
    <v-footer class="pa-0">
      <v-sheet
        tile
        color="light"
        class="w-100">
        <v-container class="narrow text-sm-center text-md-left my-4">
          <v-row>
            <v-col
              cols="12"
              md="4">
              <h4>
                Sylvie Samson
              </h4>
              <p class="text-uppercase mb-1">
                Travailleuse Sociale
              </p>
              <p
                class="ma-0 limit-width">
                Je suis une travailleuse sociale d’expérience offrant des services psychosociaux
                aux familles.
              </p>
            </v-col>
            <v-col
              cols="12"
              md="4">
              <h5 class="mb-4">
                Accessibilité:
              </h5>
              <p class="ma-0">
                Métro Henri-Bourassa
              </p>
              <p class="ma-0">
                Autobus 69 (Gouin / de la Miséricorde)
              </p>
              <p class="ma-0">
                Ascenseurs disponibles
              </p>
              <p class="ma-0">
                Stationnement disponible
              </p>
            </v-col>
            <v-col
              cols="12"
              md="4">
              <h5 class="mb-4">
                Contact
              </h5>
              <p
                class="mb-0 mt-2"
                style="line-height: 1.2rem;"
                v-for="link in contact"
                :key="link.id">
                <a
                  :href="link.url"
                  target="_blank">
                  {{ link.text }}
                </a>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <v-sheet
        tile
        color="black"
        class="white--text w-100">
        <v-container class="text-center">
          <p class="mb-0">
            © 2018 Sylvie Samson
          </p>
          <p class="mb-0">
            Conception by
            <a
              href="https://p-o.design"
              target="_blank"
              class="white--text">
              <b>PO_Design</b>
            </a>
          </p>
        </v-container>
      </v-sheet>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    contact() {
      return [
        { text: 'sylvie.samson.ts@gmail.com', url: 'mailto:sylvie.samson.ts@gmail.com' },
        { text: '(514) 756-4673', url: 'tel:+15147564673' },
        { text: '5777 Boulevard Gouin Ouest Montreal QC Canada H4J 1E3', url: 'https://goo.gl/maps/fnV2yrT3Byz' },
      ];
    },
  },
};
</script>

<style scoped>
  .limit-width {
    max-width: 320px;
  }

  @media screen and (max-width: 959px) {
    .limit-width {
      max-width: 400px;
      margin-left: auto !important;
      margin-right: auto !important;;
    }
  }
</style>
