<template>
  <MainLayout>
    <h2>{{ driver.name }}</h2>
  </MainLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainLayout from '~/components/layouts/MainLayout.vue';

export default {
  name: 'Driver',
  components: { MainLayout },
  data: () => ({
    driver: [],
  }),
  computed: {
    ...mapGetters(['drivers', 'loading']),
  },
  methods: {
    ...mapActions(['fetchDrivers']),
    findDriver() {
      this.drivers.filter((d) => {
        if (d.id === this.$route.params.id) {
          this.driver = d;
        }
      });
    },
  },
  created() {
    this.fetchDrivers();
  },
  mounted() {
    this.findDriver();
  },
};
</script>

<style></style>
