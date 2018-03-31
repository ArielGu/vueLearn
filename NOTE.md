# Vue学习记录

## 2018.3.30
`-Task:` 
完成 vue+webpack 简单脚手架搭建工作

`-坑总结`

1. Do not mount Vue to <html> or <body> - mount tonormal elements instead.


原因：webpack中我使用了htmlWebpackPlugin将js文件加入html文件中，其中inject:'body';
vue2.X 之后不允许开发者以<html>或<body>作为挂载点，而是要通过独立的节点挂载，如div

2.  [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.(found in )

原因：vue默认配置的是runtime版本；在npm包的dist/目录下存在不同构建版本的Vue.js。完整版本包括编译器(compiler)和运行时(runtime)的构建版本

`编译器`:将模板字符串编译成js渲染函数(render function)的代码

vue.js是包括runtime和compiler，而默认我们引入的vue.common.js不包括编译器

`-webpack总结`

chunk的概念：每一个入口文件都是一个单独的chunk；如果通过entry:common提取了一些公共的库，此时需要使用CommonsChunkPlugin将其分离出来，否则会出现重复(Multiple)
