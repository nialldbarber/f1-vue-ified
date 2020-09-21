import { createStore } from 'vuex';
import { API } from '~/constants';

export const store = createStore({
  // State
  state: {
    drivers: [],
    loading: true,
    error: false,
  },
  // Getters
  getters: {
    drivers: (state) => state.drivers,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  // Mutations
  actions: {
    async fetchDrivers({ commit }) {
      try {
        await fetch(API)
          .then((res) => res.json())
          .then((data) => {
            console.log('data', data);
            commit('setDrivers', data);
            commit('setLoading', false);
          });
      } catch (err) {
        console.log(err);
        commit('setError', true);
        commit('setLoading', false);
      }
    },
  },
  // Actions
  mutations: {
    setDrivers: (state, drivers) => (state.drivers = drivers),
    setLoading: (state, loading) => (state.loading = loading),
    setError: (state, error) => (state.error = error),
  },
});
