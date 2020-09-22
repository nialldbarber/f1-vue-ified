<template>
  <MainLayout>
    <h2>{{ driver.name }}</h2>
    <p>Born: {{ driver.born }}</p>
    <p v-if="driver.died">Died: {{ driver.died }}</p>
    <p>Country: {{ driver.country }}</p>
    <div class="teams">
      <span>Teams:</span>
      <span class="team" v-for="team in driver.teams" :key="team">{{
        team
      }}</span>
    </div>
    <p>Poles: {{ driver.poles }}</p>
    <p>Wins: {{ driver.wins }}</p>
    <div class="championships">
      <span>Championships: </span>
      <span
        class="championship"
        v-for="championship in driver.championships"
        :key="championship"
        >{{ championship }}</span
      >
    </div>
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

<style lang="scss" scoped>
.team {
  background: #0a2540;
  margin: 0.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
}

.championship {
  @extend .team;
}
</style>
