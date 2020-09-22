<template>
  <div>
    <p>{{ output }}</p>
  </div>
</template>

<script>
export default {
  name: 'TeamRow',
  props: ['teams'],
  data: () => ({
    output: '',
  }),
  computed: {
    showTeams() {
      if (this.teams.length === 1) {
        return this.teams[0];
      } else {
        return this.cycleTeams();
      }
    },
  },
  methods: {
    cycleTeams() {
      let current = 0;
      this.output = this.teams[0];

      setInterval(() => {
        if (this.teams[current] === undefined) {
          current = 0;
          this.output = this.teams[0];
        } else {
          this.output = this.teams[current];
        }
        current++;
      }, 2000);
    },
  },
  created() {
    this.cycleTeams();
  },
};
</script>

<style></style>
