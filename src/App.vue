<template>
  <Navigation />
  <h1>Drivers</h1>
  <ul>
    <li v-for="{ name, age, team } in drivers" :key="age">
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Team: {{ team }}</p>
    </li>
  </ul>

  <form @submit="addNewDriver">
    <input type="text" v-model="state.name" placeholder="Name" />
    <input type="text" v-model="state.age" placeholder="Age" />
    <input type="text" v-model="state.team" placeholder="Team" />
    <button>Add</button>
  </form>
</template>

<script>
import { reactive } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Navigation from '~/components/Navigation.vue';

export default {
  name: 'App',
  components: { Navigation },
  computed: mapGetters(['drivers']),
  methods: {
    ...mapActions(['addDriver']),
  },

  setup: () => {
    const state = reactive({
      name: '',
      age: null,
      team: '',
    });

    function addNewDriver(e) {
      e.preventDefault();
      this.addDriver(state);
      state.name = '';
      state.age = '';
      state.team = '';
    }

    return { state, addNewDriver };
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
