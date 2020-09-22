<template>
  <header>
    <router-link to="/">
      <h1>F1 Stats</h1>
    </router-link>
    <Search v-if="isDriverPage" />
  </header>
</template>

<script>
import Search from '~/components/Search.vue';

export default {
  name: 'Header',
  components: { Search },
  computed: {
    isDriverPage() {
      return this.$route.name !== 'driver';
    },
  },
};
</script>

<style></style>
