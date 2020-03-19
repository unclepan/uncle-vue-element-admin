const dynamic = [
  {
    path: 'layout',
    name: 'form.layout',
    component: () => import('../../views/form/index.vue'),
    meta: { title: 'form.layout' },
  },
  {
    path: 'basic',
    name: 'form.basic',
    component: () => import('../../views/form/basic.vue'),
    meta: { title: 'form.basic' },
  },
];

export default [
  {
    path: 'form',
    name: 'form.default',
    component: () => import('../../views/form/layout.vue'),
    redirect: 'noRedirect',
    meta: { title: 'form.default' },
    children: [
      ...dynamic,
    ],
  },
];
