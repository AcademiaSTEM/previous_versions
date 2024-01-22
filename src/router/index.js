/* eslint-disable consistent-return */
import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import ClassView from '../views/ClassView.vue';
import ProjectView from '../views/ProjectView.vue';
import PreviousVersionsView from '../views/PreviousVersionsView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';
import info from '../storage/info';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
    },
    {
      path: '/class/:id',
      name: 'Class',
      component: ClassView,
      props: true,
      beforeEnter: (to) => {
        const data = info[to.params.id];
        if (typeof data === 'undefined') {
          return { name: 'PageNotFound' };
        }
      },
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectView,
    },
    {
      path: '/previous_versions',
      name: 'PreviousVersions',
      component: PreviousVersionsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView,
    },
  ],
});

export default router;
