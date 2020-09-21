<template>
  <header>
    <router-link to="/">
      <h1>F1 Stats</h1>
    </router-link>
    <Search />
  </header>
</template>

<script>
import Search from '~/components/Search.vue';

export default {
  name: 'Header',
  components: { Search },
};
</script>

<style></style>
