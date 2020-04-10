import Layout from 'layout/index.vue';

const dynamic = [
  {
    path: 'dynamic',
    name: 'table.dynamic',
    component: () => import('../../views/table/dynamic.vue'),
    meta: { title: 'table.dynamic' },
  },
  {
    path: 'drag',
    name: 'table.drag',
    component: () => import('../../views/table/drag.vue'),
    meta: { title: 'table.drag' },
  },
];

export default [
  {
    path: '/table',
    name: 'table.default',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'table.default' },
    children: [
      ...dynamic,
    ],
  },
];
