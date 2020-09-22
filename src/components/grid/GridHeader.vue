<template>
  <div class="grid-container">
    <div class="header row">
      <div>Name</div>
      <div>Age</div>
      <div>Country</div>
      <div>Team(s)</div>
      <div>Poles</div>
      <div>Wins</div>
      <div>Championship(s)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridHeader',
};
</script>

<style lang="scss" scoped>
.grid-container {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 2;
  border-bottom: 1px solid #555;
}
</style>
