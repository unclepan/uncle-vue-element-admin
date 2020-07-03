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
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].chunksSortMode = _chuck => (_chuck.names[0].indexOf('loading') > -1 ? -1 : 1); // 将loading.js模块加载提前
      return args;
    });

    config.output.filename('[name].[hash:8].js').end();
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
