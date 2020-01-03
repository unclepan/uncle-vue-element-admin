const path = require('path');

const project = path.resolve(__dirname, './');
const dist = path.resolve(project, 'dist');
const src = path.resolve(project, 'src');
const build = path.resolve(project, 'build');
const lib = path.resolve(src, 'lib');
const layout = path.resolve(src, 'layout');
const api = path.resolve(src, 'api');
const assets = path.resolve(src, 'assets');
const components = path.resolve(src, 'components');
const filter = path.resolve(src, 'filter');
const global = path.resolve(src, 'global');
const directive = path.resolve(src, 'directive');
const mixin = path.resolve(src, 'mixin');
const router = path.resolve(src, 'router');
const store = path.resolve(src, 'store');
const styles = path.resolve(src, 'styles');
const utils = path.resolve(src, 'utils');
const views = path.resolve(src, 'views');
const wrapper = path.resolve(src, 'wrapper');

module.exports = {
  project,
  dist,
  src,
  build,
  lib,
  layout,
  api,
  assets,
  components,
  directive,
  filter,
  global,
  mixin,
  router,
  store,
  styles,
  utils,
  views,
  wrapper,
};
