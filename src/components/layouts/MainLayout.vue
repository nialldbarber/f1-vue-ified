<template>
  <Header />
  <div class="container">
    <slot />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  name: 'MainLayout',
  components: { Header },
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
}
</style>
