<template>
  <div>
    <span class="d-flex align-center justify-center text-center justify-md-start text-md-left mb-4">
      <v-icon
        color="grey"
        class="mr-2">
        mdi-bus
      </v-icon>
      <h5>
        {{ $t('footer.accessibility') }}
      </h5>
    </span>
    <ul>
      <li>
        {{ $t('footer.metro') }}
      </li>
      <li>
        {{ $t('footer.bus') }}
      </li>
      <li>
        {{ $t('footer.elevator') }}
      </li>
      <li>
        {{ $t('footer.parking') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterAccessibility',
};
</script>

<style scoped>
  @media screen and (max-width: 959px) {
    .v-application ul, .v-application ol {
      padding-left: 0 !important;
    }
    ul {
      list-style-type: none;
    }
    li {
      text-align: center !important;
    }
  }
</style>
