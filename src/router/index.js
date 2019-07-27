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
    component: () => import(/* webpackChunkName: "form-index" */ '@/app/examples/index/index.vue'),
    children: [
      // 基础
      {
        path: 'start',
        name: 'start',
        meta: {
          title: 'start - Evue'
        },
        component: () => import(/* webpackChunkName: "form-start" */ '@/app/examples/start/index.vue')
      },
      // radio
      {
        path: 'radio',
        name: 'radio',
        meta: {
          title: 'radio - Evue'
        },
        component: () => import(/* webpackChunkName: "form-radio" */ '@/app/examples/radio/index.vue')
      },
      // checkbox
      {
        path: 'checkbox',
        name: 'checkbox',
        meta: {
          title: 'checkbox - Evue'
        },
        component: () => import(/* webpackChunkName: "form-checkbox" */ '@/app/examples/checkbox/index.vue')
      },
      // inputNumber
      {
        path: 'input-number',
        name: 'inputNumber',
        meta: {
          title: 'inputNumber - Evue'
        },
        component: () => import(/* webpackChunkName: "form-inputNumber" */ '@/app/examples/inputNumber/index.vue')
      },
      // switch
      {
        path: 'switch',
        name: 'switch',
        meta: {
          title: 'switch - Evue'
        },
        component: () => import(/* webpackChunkName: "form-switch" */ '@/app/examples/switch/index.vue')
      },
      // slider
      {
        path: 'slider',
        name: 'slider',
        meta: {
          title: 'slider - Evue'
        },
        component: () => import(/* webpackChunkName: "form-slider" */ '@/app/examples/slider/index.vue')
      },
      // colorPicker
      {
        path: 'color-picker',
        name: 'colorPicker',
        meta: {
          title: 'colorPicker - Evue'
        },
        component: () => import(/* webpackChunkName: "form-colorPicker" */ '@/app/examples/colorPicker/index.vue')
      },
      // transfer
      {
        path: 'transfer',
        name: 'transfer',
        meta: {
          title: 'transfer - Evue'
        },
        component: () => import(/* webpackChunkName: "form-transfer" */ '@/app/examples/transfer/index.vue')
      },
      // rate
      {
        path: 'rate',
        name: 'rate',
        meta: {
          title: 'rate - Evue'
        },
        component: () => import(/* webpackChunkName: "form-rate" */ '@/app/examples/rate/index.vue')
      },
      // select
      {
        path: 'select',
        name: 'select',
        meta: {
          title: 'select - Evue'
        },
        component: () => import(/* webpackChunkName: "form-select" */ '@/app/examples/select/index.vue')
      },
      // time-picker
      {
        path: 'time-picker',
        name: 'timePicker',
        meta: {
          title: 'select - Evue'
        },
        component: () => import(/* webpackChunkName: "form-timePicker" */ '@/app/examples/timePicker/index.vue')
      },
      // datePicker
      {
        path: 'date-picker',
        name: 'datePicker',
        meta: {
          title: 'datePicker - Evue'
        },
        component: () => import(/* webpackChunkName: "form-datePicker" */ '@/app/examples/datePicker/index.vue')
      },
      // cascader
      {
        path: 'cascader',
        name: 'cascader',
        meta: {
          title: 'cascader - Evue'
        },
        component: () => import(/* webpackChunkName: "form-cascader" */ '@/app/examples/cascader/index.vue')
      },
      // input
      {
        path: 'input',
        name: 'input',
        meta: {
          title: 'input - Evue'
        },
        component: () => import(/* webpackChunkName: "form-input" */ '@/app/examples/input/index.vue')
      },
      // upload
      {
        path: 'upload',
        name: 'upload',
        meta: {
          title: 'upload - Evue'
        },
        component: () => import(/* webpackChunkName: "form-upload" */ '@/app/examples/upload/index.vue')
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
