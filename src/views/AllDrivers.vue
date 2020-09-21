<template>
  <MainLayout>
    <h2>Drivers</h2>
    <Grid />
  </MainLayout>
</template>

<script>
import MainLayout from '~/components/layouts/MainLayout.vue';
import Grid from '~/components/Grid.vue';

export default {
  name: 'AllDrivers',
  components: { MainLayout, Grid },
};
</script>

<style></style>
