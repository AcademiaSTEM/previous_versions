import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import ClassView from '../views/ClassView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
    },
    {
      path: "/class/:id",
      name: "Class",
      component: ClassView,
      props: true,
    },
  ],
});

export default router;
