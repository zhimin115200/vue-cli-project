# demo-project

> 熙康脚手架工程

> 下载脚手架
npm zhimin115200/webpack demo-project
包含：路由跳转、状态管理、父子组件通信等

## 项目结构

``` bash
│  index.html
│  package.json
│  README.md
├─build
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
├─config
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
├─node_modules
├─src
│  │  App.vue
│  │  main.js
│  │
│  ├─assets //静态资源
│  │  │  logo.png
│  │  │  readme.txt
│  │  │
│  │  └─style
│  │          app.css
│  │
│  ├─common //通用
│  │  │  readme.txt
│  │  │
│  │  ├─directive //全局指令
│  │  │      directive.js
│  │  │
│  │  ├─filter //全局过滤器
│  │  │      filter.js
│  │  │
│  │  └─util //工具函数
│  ├─components //项目内通用组件
│  │      MyButton.vue
│  │      readme.txt
│  │
│  ├─page //页面
│  │      Navgitor.vue
│  │      page1.vue
│  │      readme.txt
│  │
│  ├─router //路由
│  │      index.js
│  │      readme.txt
│  │
│  ├─service //业务逻辑
│  │      page1.service.js
│  │      readme.txt
│  │
│  └─store //全局状态管理
│          readme.txt
│          store.js
│
├─static
│
└─test
```
