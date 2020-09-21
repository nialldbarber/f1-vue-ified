<template>
  <form>
    <input type="text" placeholder="Search..." v-model="name" />
  </form>
  <p>Name: {{ name }}</p>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    name: '',
  }),
};
</script>

<style></style>
