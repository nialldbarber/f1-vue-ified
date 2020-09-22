<template>
  <div
    class="championships"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <div v-if="hovered" class="modal">
      <p v-for="c in championships" v-bind:key="c">{{ c }}</p>
    </div>
    <div class="cell">
      {{ championshipCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChampionshipRow',
  props: ['championships'],
  data: () => ({
    hovered: false,
  }),
  computed: {
    championshipCount() {
      return this.championships.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.championships {
  position: relative;
  cursor: pointer;
}

.modal {
  position: absolute;
  bottom: 100%;
  right: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: dodgerblue;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  z-index: 2;

  p {
    margin: 0.5rem;
    color: #fff;
    font-weight: bold;
  }
}
</style>
