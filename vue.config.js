const path = require('path');
const absolutePath = require('./absolute.path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  css: {
    sourceMap: true,
  },
  devServer: {
    port: 8989,
    host: 'localhost',
    open: true,
    disableHostCheck: true,
  },
  configureWebpack: {
    entry: {
      loading: './src/entry/loading/index.js',
      app: './src/entry/main/index.js',
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: Object.assign({
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        $static: resolve('static'),
        jquery: 'jquery',
      }, absolutePath),
    },
    performance: {
      maxEntrypointSize: 2048000,
      maxAssetSize: 2048000,
    },
  },
};
