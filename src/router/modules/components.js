const dynamic = [
  {
    path: 'quill',
    name: 'components.quill',
    component: () => import('../../views/components-demo/quill.vue'),
    meta: { title: 'components.quill' },
  },
  {
    path: 'dialog',
    name: 'components.dialog',
    component: () => import('../../views/components-demo/dialog.vue'),
    meta: { title: 'components.dialog' },
  },
  {
    path: 'cropper',
    name: 'components.cropper',
    component: () => import('../../views/components-demo/cropper.vue'),
    meta: { title: 'components.cropper' },
  },
];

export default [
  {
    path: 'components',
    name: 'components.default',
    component: () => import('../../views/components-demo/layout.vue'),
    redirect: 'noRedirect',
    meta: { title: 'components.default' },
    children: [
      ...dynamic,
    ],
  },
];
