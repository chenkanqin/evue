# evue
<p align="center"><a href="http://ele-vue.ifnav.com/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://www.ifnav.com/static/images/evue-logo.png" alt="Evue logo"></a></p>

#### 介绍
二次聚合封装element-ui的form、table组件、实现数据驱动视图。http://ele-vue.ifnav.com/

## 文档

要查看[Live Examples](http://ele-vue.ifnav.com/#/form/installation/)和文档，请访问[http://ele-vue.ifnav.com/](http://ele-vue.ifnav.com/).

#### 安装
```shell
npm install evue -S
```

## 开始使用
``` javascript
 import Vue from 'vue';
 import EVue from 'evue';
 import App from './App.vue';
 
 Vue.use(EVue);
 
 Vue.use(EVue);
     new Vue({
     el: '#app',
     render: h => h(App)
 });
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, chenkanqin