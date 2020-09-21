<template>
  <Navigation />
  <h1>Drivers</h1>
  <p>{{ drivers }}</p>
  <!-- <ul>
    <li v-for="{ name, age, team } in drivers" :key="age">
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Team: {{ team }}</p>
    </li>
  </ul> -->
  <p v-if="loading">LOADING</p>
  <p v-if="error">ERROR!</p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navigation from '~/components/Navigation.vue';

export default {
  name: 'App',
  components: { Navigation },
  computed: mapGetters(['drivers', 'loading', 'error']),
  methods: {
    ...mapActions(['fetchDrivers']),
  },
  mounted() {
    this.fetchDrivers();
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
