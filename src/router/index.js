import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from 'layout/index.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Excel from './modules/excel';
import Table from './modules/table';
import Form from './modules/form';
import Components from './modules/components';

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
        meta: { title: 'home', affix: true }, // affix 固定钉
      },
      {
        path: 'iframe/:url',
        component: () => import('@/views/iframe'),
        name: 'iframe',
        meta: { title: 'iframe', ignore: true, noRefresh: true }, // ignore 忽略
      },
      {
        path: 'documentation',
        component: () => import('@/views/documentation/index'),
        name: 'documentation',
        meta: { title: 'documentation', affix: true },
      },
      {
        path: 'guide',
        component: () => import('@/views/guide/index'),
        name: 'guide',
        meta: { title: 'guide', affix: true },
      },
      {
        path: 'condition',
        component: () => import('@/views/condition/index'),
        name: 'condition',
        meta: { title: 'condition' },
      },
      {
        path: 'comprehensive',
        component: () => import('@/views/comprehensive/index'),
        name: 'comprehensive',
        meta: { title: 'comprehensive' },
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
        component: () => import('../views/test.vue'),
        meta: { title: 'test', affix: true },
      },
      {
        path: 'pdf',
        name: 'pdf',
        component: () => import('../views/pdf/index.vue'),
        meta: { title: 'pdf' },
      },
    ],
  },
  {
    path: '/pdf/download',
    name: 'pdfDownload',
    component: () => import('../views/pdf/download.vue'),
    meta: { title: 'pdfDownload' },
  },
  ...Excel,
  ...Table,
  ...Form,
  ...Components,
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
