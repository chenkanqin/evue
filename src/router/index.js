import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 默认路由表
const staticRouteMap = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'EVue - Evue'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/app/home/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    redirect: '/examples/installation',
    meta: {
      title: 'form - Evue'
    },
    component: () => import(/* webpackChunkName: "form-index" */ '@/app/examples/form/index/index.vue'),
    children: [
      // 基础
      {
        path: 'start',
        name: 'start',
        meta: {
          title: 'start - Evue'
        },
        component: () => import(/* webpackChunkName: "form-start" */ '@/app/examples/form/start/index.vue')
      },
      // radio
      {
        path: 'radio',
        name: 'radio',
        meta: {
          title: 'radio - Evue'
        },
        component: () => import(/* webpackChunkName: "form-radio" */ '@/app/examples/form/radio/index.vue')
      },
      // checkbox
      {
        path: 'checkbox',
        name: 'checkbox',
        meta: {
          title: 'checkbox - Evue'
        },
        component: () => import(/* webpackChunkName: "form-checkbox" */ '@/app/examples/form/checkbox/index.vue')
      },
      // inputNumber
      {
        path: 'input-number',
        name: 'inputNumber',
        meta: {
          title: 'inputNumber - Evue'
        },
        component: () => import(/* webpackChunkName: "form-inputNumber" */ '@/app/examples/form/inputNumber/index.vue')
      },
      // switch
      {
        path: 'switch',
        name: 'switch',
        meta: {
          title: 'switch - Evue'
        },
        component: () => import(/* webpackChunkName: "form-switch" */ '@/app/examples/form/switch/index.vue')
      },
      // slider
      {
        path: 'slider',
        name: 'slider',
        meta: {
          title: 'slider - Evue'
        },
        component: () => import(/* webpackChunkName: "form-slider" */ '@/app/examples/form/slider/index.vue')
      },
      // colorPicker
      {
        path: 'color-picker',
        name: 'colorPicker',
        meta: {
          title: 'colorPicker - Evue'
        },
        component: () => import(/* webpackChunkName: "form-colorPicker" */ '@/app/examples/form/colorPicker/index.vue')
      },
      // transfer
      {
        path: 'transfer',
        name: 'transfer',
        meta: {
          title: 'transfer - Evue'
        },
        component: () => import(/* webpackChunkName: "form-transfer" */ '@/app/examples/form/transfer/index.vue')
      },
      // rate
      {
        path: 'rate',
        name: 'rate',
        meta: {
          title: 'rate - Evue'
        },
        component: () => import(/* webpackChunkName: "form-rate" */ '@/app/examples/form/rate/index.vue')
      },
      // select
      {
        path: 'select',
        name: 'select',
        meta: {
          title: 'select - Evue'
        },
        component: () => import(/* webpackChunkName: "form-select" */ '@/app/examples/form/select/index.vue')
      },
      // time-picker
      {
        path: 'time-picker',
        name: 'timePicker',
        meta: {
          title: 'select - Evue'
        },
        component: () => import(/* webpackChunkName: "form-timePicker" */ '@/app/examples/form/timePicker/index.vue')
      },
      // datePicker
      {
        path: 'date-picker',
        name: 'datePicker',
        meta: {
          title: 'datePicker - Evue'
        },
        component: () => import(/* webpackChunkName: "form-datePicker" */ '@/app/examples/form/datePicker/index.vue')
      },
      // cascader
      {
        path: 'cascader',
        name: 'cascader',
        meta: {
          title: 'cascader - Evue'
        },
        component: () => import(/* webpackChunkName: "form-cascader" */ '@/app/examples/form/cascader/index.vue')
      },
      // input
      {
        path: 'input',
        name: 'input',
        meta: {
          title: 'input - Evue'
        },
        component: () => import(/* webpackChunkName: "form-input" */ '@/app/examples/form/input/index.vue')
      },
      // upload
      {
        path: 'upload',
        name: 'upload',
        meta: {
          title: 'upload - Evue'
        },
        component: () => import(/* webpackChunkName: "form-upload" */ '@/app/examples/form/upload/index.vue')
      },
    ]
  },
  {
    path: '/table',
    name: 'table',
    redirect: '/table/start',
    meta: {
      title: 'table - Evue'
    },
    component: () => import(/* webpackChunkName: "table-index" */ '@/app/examples/table/index/index.vue'),
    children: [
      // 文档
      {
        path: 'start',
        name: 'table-start',
        meta: {
          title: 'table基础 - Evue'
        },
        component: () => import(/* webpackChunkName: "table-start" */ '@/app/examples/table/start/index.vue')
      },
      // 自定义头部
      {
        path: 'header',
        name: 'table-header',
        meta: {
          title: '自定义头部 - table'
        },
        component: () => import(/* webpackChunkName: "table-header" */ '@/app/examples/table/header/index.vue')
      },
      // 自定义内容
      {
        path: 'content',
        name: 'table-content',
        meta: {
          title: '自定义内容 - table'
        },
        component: () => import(/* webpackChunkName: "table-content" */ '@/app/examples/table/content/index.vue')
      },
      // 自定义按钮
      {
        path: 'menu',
        name: 'table-menu',
        meta: {
          title: '自定义按钮 - table'
        },
        component: () => import(/* webpackChunkName: "table-menu" */ '@/app/examples/table/menu/index.vue')
      },
      // 显示序列号
      {
        path: 'isIndex',
        name: 'table-isIndex',
        meta: {
          title: '显示序列号 - table'
        },
        component: () => import(/* webpackChunkName: "table-isIndex" */ '@/app/examples/table/isIndex/index.vue')
      },
      // 排序
      {
        path: 'sortable',
        name: 'table-sortable',
        meta: {
          title: '排序 - table'
        },
        component: () => import(/* webpackChunkName: "table-sortable" */ '@/app/examples/table/sortable/index.vue')
      },
      // 排序
      {
        path: 'isSelection',
        name: 'table-isSelection',
        meta: {
          title: '多选 - table'
        },
        component: () => import(/* webpackChunkName: "table-isSelection" */ '@/app/examples/table/isSelection/index.vue')
      },
      // 排序
      {
        path: 'isExpand',
        name: 'table-isExpand',
        meta: {
          title: '展开行 - table'
        },
        component: () => import(/* webpackChunkName: "table-isExpand" */ '@/app/examples/table/isExpand/index.vue')
      },
      // 排序
      {
        path: 'showSummary',
        name: 'table-showSummary',
        meta: {
          title: '统计 - table'
        },
        component: () => import(/* webpackChunkName: "table-showSummary" */ '@/app/examples/table/showSummary/index.vue')
      },
      // 分页
      {
        path: 'pagination',
        name: 'table-pagination',
        meta: {
          title: '分页 - table'
        },
        component: () => import(/* webpackChunkName: "table-pagination" */ '@/app/examples/table/pagination/index.vue')
      },

    ]
  },
];

//初始化路由
const router = new VueRouter({
  routes: staticRouteMap,
});
// 路由拦截
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Evue';
  next();
});

export default router;
