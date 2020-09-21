<template>
  <div class="grid-container">
    <div
      class="row"
      v-for="{
        id,
        name,
        born,
        died,
        country,
        teams,
        poles,
        wins,
        championships,
      } in data"
      :key="id"
    >
      <Row :row="name" />
      <AgeRow :born="born" :died="died" />
      <Row :row="country" />
      <Row :row="teams" />
      <Row :row="poles" />
      <Row :row="wins" />
      <Row :row="championships" />
    </div>
  </div>
</template>

<script>
import Row from '~/components/grid/Row.vue';
import AgeRow from '~/components/grid/AgeRow.vue';

export default {
  name: 'Grid',
  props: ['data'],
  components: { Row, AgeRow },
};
</script>

<style lang="scss">
.grid-container {
  display: grid;

  .row {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr 3fr 2fr 2fr 2fr;
    min-height: 50px;
    align-items: center;
    border-top: 1px solid #555;
  }
}
</style>
