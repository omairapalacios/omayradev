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
      name: 'root',
      component: () => import('@/views/Root'),
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('@/views/Archive'),
    },
  ],
});

export default router;
