<template>
  <div class="grid-container">
    <ul>
      <li v-for="{ id, name } in data" :key="id">
        <p>Name: {{ name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// born,
// died,
// country,
// teams,
// poles,
// wins,
// championships,

export default {
  name: 'Grid',
  props: ['data'],
};
</script>

<style>
.grid-container {
  background: dodgerblue;
}
</style>
