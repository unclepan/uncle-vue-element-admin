const dynamic = [
  {
    path: 'dynamic/index',
    name: 'table.dynamic',
    component: () => import('../../views/table/dynamic/index.vue'),
    meta: { title: 'table.dynamic' },
  },
];

export default [
  {
    path: 'table',
    name: 'table.default',
    component: () => import('../../views/table/layout.vue'),
    redirect: 'noRedirect',
    meta: { title: 'table.default' },
    children: [
      ...dynamic,
    ],
  },
];
