<template>
  <MainLayout>
    <h2>Drivers</h2>
    <p v-if="filteredItemLength">EEEK! Error yo!</p>
    <p v-if="loading">LOADING</p>
    <p v-if="error">ERROR!</p>
    <GridHeader />
    <Grid :data="filteredDrivers" />
  </MainLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainLayout from '~/components/layouts/MainLayout.vue';
import GridHeader from '~/components/GridHeader.vue';
import Grid from '~/components/Grid.vue';

export default {
  name: 'AllDrivers',
  components: { MainLayout, GridHeader, Grid },
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
      if (this.filteredDrivers.length === 0 && !this.loading) {
        cond = true;
      }
      return cond;
    },
  },
};
</script>

<style></style>
