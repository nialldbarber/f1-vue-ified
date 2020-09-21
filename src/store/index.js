import { createStore } from 'vuex';

export const store = createStore({
  // State
  state: {
    drivers: [],
  },
  // Getters
  getters: {
    drivers: (state) => state.drivers,
  },
  // Mutations
  mutations: {
    addDriver: (state, driver) => {
      state.drivers.push(driver);
      console.log(state.drivers);
    },
  },
  // Actions
  actions: {
    addDriver: ({ commit }, driver) => commit('addDriver', driver),
  },
});
