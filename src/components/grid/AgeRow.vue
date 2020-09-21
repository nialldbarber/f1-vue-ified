<template>
  <div v-bind:class="{ died: died }">{{ getAge }}</div>
</template>

<script>
export default {
  name: 'Row',
  props: ['born', 'died'],
  computed: {
    getAge() {
      let date;

      if (this.died) {
        date = Math.floor(
          (new Date(this.died) - new Date(this.born).getTime()) / 3.15576e10
        );
      } else {
        date = Math.floor(
          (new Date() - new Date(this.born).getTime()) / 3.15576e10
        );
      }

      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  .died {
    color: red;
  }
}
</style>
