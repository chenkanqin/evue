export const eeFormInit = {
  name: 'eeFormInit',
  props: {},
  data() {
    return {
      componentLists: [//所有可用的组件
        {
          type: 'input',//通过鼠标或键盘输入字符
          routerPath: () => import('../packages/input/index.vue'),//路由地址
        },
        {
          type: 'radio',//在一组备选项中进行单选
          routerPath: () => import('../packages/radio/index.vue'),
        },
        {
          type: 'inputNumber',//仅允许输入标准的数字值，可定义范围
          routerPath: () => import('../packages/inputNumber/index.vue'),
        },
        {
          type: 'switch',//表示两种相互对立的状态间的切换，多用于触发「开/关」
          routerPath: () => import('../packages/switch/index.vue'),
        },
        {
          type: 'slider',//通过拖动滑块在一个固定区间内进行选择
          routerPath: () => import('../packages/slider/index.vue'),
        },
        {
          type: 'rate',//评分组件
          routerPath: () => import('../packages/rate/index.vue'),
        },
        {
          type: 'colorPicker',//用于颜色选择，支持多种格式
          routerPath: () => import('../packages/colorPicker/index.vue'),
        },
        {
          type: 'timePicker',//用于选择或输入日期
          routerPath: () => import('../packages/timePicker/index.vue'),
        },
        {
          type: 'datePicker',//在同一个选择器里选择日期和时间
          routerPath: () => import('../packages/datePicker/index.vue'),
        },
        {
          type: 'transfer',//Transfer 穿梭框
          routerPath: () => import('../packages/transfer/index.vue'),
        },
        {
          type: 'select',//当选项过多时，使用下拉菜单展示并选择内容。
          routerPath: () => import('../packages/select/index.vue'),
        },
        {
          type: 'checkbox',//一组备选项中进行多选
          routerPath: () => import('../packages/checkbox/index.vue'),
        },
        {
          type: 'cascader',//当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
          routerPath: () => import('../packages/cascader/index.vue'),
        },
        {
          type: 'upload',//上传
          routerPath: () => import('../packages/upload/index.vue'),
        },
      ],
      specialComponent: () => import('../packages/special/index/index.vue'),//路由地址,
    };
  },
};