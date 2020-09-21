<template>
  <MainLayout>
    <h2>Drivers</h2>
    <Loading />
    <Error :empty="filteredItemLength" />
    <Error />
    <div class="grid">
      <GridHeader />
      <Grid :data="filteredDrivers" />
    </div>
  </MainLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainLayout from '~/components/layouts/MainLayout.vue';
import GridHeader from '~/components/GridHeader.vue';
import Grid from '~/components/Grid.vue';
import Loading from '~/components/Loading.vue';
import Error from '~/components/Error.vue';

export default {
  name: 'AllDrivers',
  components: { MainLayout, GridHeader, Grid, Loading, Error },
  methods: {
    ...mapActions(['fetchDrivers']),
  },
  mounted() {
    this.fetchDrivers();
  },
  computed: {
    ...mapGetters(['drivers', 'loading', 'input']),
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
