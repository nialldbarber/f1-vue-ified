<template>
  <Navigation />
  <p v-if="filteredItemLength">EEEK! Error yo!</p>
  <ul>
    <li v-for="{ id, name, country, wins } in filteredDrivers" :key="id">
      <p>Name: {{ name }}</p>
      <p>Country: {{ country }}</p>
      <p>Wins: {{ wins }}</p>
    </li>
  </ul>
  <p v-if="loading">LOADING</p>
  <p v-if="error">ERROR!</p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navigation from '~/components/Navigation.vue';

export default {
  name: 'App',
  components: { Navigation },
  data: () => ({
    searchError: false,
  }),
  methods: {
    ...mapActions(['fetchDrivers']),
  },
  mounted() {
    this.fetchDrivers();
  },
  computed: {
    ...mapGetters(['drivers', 'loading', 'error', 'input']),
    filteredDrivers() {
      const updatedDriver = this.drivers.filter((driver) => {
        return driver.name.toLowerCase().includes(this.input.toLowerCase());
      });
      return updatedDriver;
    },
    filteredItemLength() {
      let cond;
      if (this.filteredDrivers.length === 0) {
        cond = true;
      }
      return cond;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
