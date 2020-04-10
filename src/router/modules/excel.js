import Layout from 'layout/index.vue';

const dynamic = [
  {
    path: 'export',
    name: 'excel.export',
    component: () => import('../../views/excel/export-excel.vue'),
    meta: { title: 'excel.export' },
  },
];

export default [
  {
    path: '/excel',
    name: 'excel.default',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'excel.default' },
    children: [
      ...dynamic,
    ],
  },
];
