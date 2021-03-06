import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { API } from '~/constants';

export const store = createStore({
  plugins: [createPersistedState()],
  state: {
    input: '',
    drivers: [],
    loading: true,
    error: false,
  },
  getters: {
    input: (state) => state.input,
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
            commit('setDrivers', data);
            commit('setLoading', false);
          });
      } catch (err) {
        console.log(err);
        commit('setError', true);
        commit('setLoading', false);
      }
    },
    searchDrivers: ({ commit }, input) => {
      commit('setInput', input);
    },
  },
  mutations: {
    setInput: (state, input) => (state.input = input),
    setDrivers: (state, drivers) => (state.drivers = drivers),
    setLoading: (state, loading) => (state.loading = loading),
    setError: (state, error) => (state.error = error),
  },
});
