<template>
  <p v-if="error">Error!</p>
  <p v-if="empty">EEEK! Error yo!</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Error',
  props: ['empty'],
  computed: {
    ...mapGetters(['error']),
  },
};
</script>

<style scoped>
p {
  color: blue;
}
</style>
