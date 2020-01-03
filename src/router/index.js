import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from 'layout/index.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import System from './modules/system';

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    name: '404',
    meta: { title: '404' },
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    name: '401',
    meta: { title: '401' },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: 'home', affix: true },
      },
      {
        path: 'icon',
        name: 'icon',
        component: () => import('../views/icon.vue'),
        meta: { title: 'icon' },
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('../views/t.vue'),
        meta: { title: 'test', affix: true },
      },
      ...System,
    ],
  },
  { path: '*', redirect: '/404', hidden: true },

];
const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
