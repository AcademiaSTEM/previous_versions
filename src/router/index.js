/* eslint-disable consistent-return */
import { createRouter, createWebHistory } from 'vue-router';

import PreviousVersionsView from '../views/PreviousVersionsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PreviousVersionsView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: PreviousVersionsView,
    },
  ],
});

export default router;
