<template>
  <div id="career">
    <v-container class="padding">
      <h1 class="text-center mb-6">
        {{ $t('career.title') }}
      </h1>
      <v-row
        no-gutters
        class="narrow">
        <v-col
          cols="12"
          md="6"
          class="text-center my-4 px-4"
          v-for="item in items"
          :key="item.id">
          <v-img
            :src="item.image"
            height="100"
            width="100"
            class="mx-auto mb-4" />
          <h4 class="mb-4">
            {{ item.title }}
          </h4>
          <p class="text-justify mb-4">
            {{ item.text }}
          </p>
          <a
            v-if="item.link && item.linkContent && item.url"
            :href="item.url"
            target="_blank">
            <p>
              <u>
                <b>{{ item.link }}</b> {{ item.linkContent }}
              </u>
            </p>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import family from '@/assets/icons/family.png';
import hands from '@/assets/icons/hands.png';
import school from '@/assets/icons/school.png';
import suit from '@/assets/icons/suit.png';

export default {
  name: 'Career',

  data() {
    return {
      family,
      hands,
      school,
      suit,
    };
  },

  computed: {
    items() {
      return [
        {
          image: school,
          title: this.$t('career.university'),
          text: this.$t('career.universityContent'),
        },
        {
          image: family,
          title: this.$t('career.psychosocial'),
          text: this.$t('career.psychosocialContent'),
        },
        {
          image: hands,
          title: this.$t('career.adoption'),
          text: this.$t('career.adoptionContent'),
        },
        {
          image: suit,
          title: this.$t('career.order'),
          text: this.$t('career.orderContent'),
          link: this.$t('career.orderMember'),
          linkContent: this.$t('career.orderNumber'),
          url: `http://legisquebec.gouv.qc.ca/${this.$i18n.locale}/showdoc/cs/C-26`,
        },
      ];
    },
  },
};
</script>

<style scoped>
  .padding {
    padding: 64px 0;
  }

  @media screen and (max-width: 959px) {
    .padding {
      padding: 32px 16px;
    }
  }
</style>
