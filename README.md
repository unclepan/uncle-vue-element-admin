# uncle-vue-element-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 目录结构
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── assets                 # 主题 字体等静态资源
│   ├── common                 # 国际化 language
│   ├── components             # 全局公用组件
│   ├── entry                  # 入口
│   │   │── loading            # 全局加载
│   │   └── main               # 项目入口
│   ├── filter                 # 全局 filter
│   ├── layout                 # 全局 layout
│   ├── lib                    # 全局公用方法
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── views                  # views 所有页面
│   ├── wrapper                # 外部交互
│   │   └── ajax               # ajax
├── tests                      # TDD，BDD
├── .browserslistrc            # 浏览器兼容
├── .editorconfig              # 编辑器配置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git 配置项
├── absolute.path.js           # 路径别名
├── babel.config.js            # babel 配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
