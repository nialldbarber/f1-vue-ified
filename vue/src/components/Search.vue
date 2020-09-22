<template>
  <form>
    <input type="text" placeholder="Search..." v-on:keyup="searchAllDrivers" />
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Search',
  computed: mapGetters(['input']),
  methods: {
    ...mapActions(['searchDrivers']),
    searchAllDrivers(e) {
      this.searchDrivers(e.target.value);
    },
  },
};
</script>

<style></style>
