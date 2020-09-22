import { createRouter, createWebHistory } from 'vue-router';
import AllDrivers from '~/views/AllDrivers.vue';
import Driver from '~/views/Driver.vue';

const routes = [
  { path: '/', component: AllDrivers },
  { path: '/driver/:id', component: Driver, name: 'driver' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
