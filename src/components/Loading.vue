<template>
  <p v-if="loading">Loading...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Loading',
  computed: {
    ...mapGetters(['loading']),
  },
};
</script>

<style scoped>
p {
  color: pink;
}
</style>
