import Vue from 'vue';
import VueRouter from 'vue-router';
import Loading from '../components/Loading.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading,
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/Main'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects'),
    },
  ],
});

export default router;
