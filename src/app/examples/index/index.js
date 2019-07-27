import './index.scss';

export default {
  name: 'form-index',
  data() {
    return {
      routes: [
        {
          title: '基础',
          routerName: 'start',
        },
        {
          title: 'Input 输入框',
          routerName: 'input',
        },
        {
          title: 'InputNumber 计数器',
          routerName: 'inputNumber',
        },
        {
          title: 'Radio 单选框',
          routerName: 'radio',
        },
        {
          title: 'Checkbox 多选框',
          routerName: 'checkbox',
        },
        {
          title: 'Select 选择器',
          routerName: 'select',
        },
        {
          title: 'Cascader 级联选择器',
          routerName: 'cascader',
        },
        {
          title: 'Switch 开关',
          routerName: 'switch',
        },
        {
          title: 'Slider 滑块',
          routerName: 'slider',
        },
        {
          title: 'TimePicker 时间选择器',
          routerName: 'timePicker',
        },
        {
          title: 'DatePicker 日期选择器',
          routerName: 'datePicker',
        },
        {
          title: 'Upload 上传',
          routerName: 'upload',
        },
        {
          title: 'Rate 评分',
          routerName: 'rate',
        },
        {
          title: 'ColorPicker 颜色选择器',
          routerName: 'colorPicker',
        },
        {
          title: 'Transfer 穿梭框',
          routerName: 'transfer',
        },
      ],
    }
  },
  watch: {},
  methods: {
    toRouter(val) {
      this.$router.push({
        name: val.routerName,
      })
    },
  },
  mounted() {
  },
}