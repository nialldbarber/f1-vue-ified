import { createStore } from 'vuex';
import { API } from '~/constants';

export const store = createStore({
  state: {
    drivers: [],
    loading: true,
    error: false,
  },
  getters: {
    drivers: (state) => state.drivers,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  actions: {
    fetchDrivers: async ({ commit }) => {
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
  mutations: {
    setDrivers: (state, drivers) => (state.drivers = drivers),
    setLoading: (state, loading) => (state.loading = loading),
    setError: (state, error) => (state.error = error),
  },
});
