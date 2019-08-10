import './index.scss';

export default {
  name: 'switch-demo',
  data() {
    return {
      /**基础*/
      basics: {
        obj: {
          value: true,
        },
        option: {
          column: [
            {
              children: [
                {
                  type: 'switch',
                  model: 'value',
                }
              ]
            },
          ]
        }
      },
      /**禁用状态*/
      disabled: {
        obj: {
          value1: true,
          value2: 0,
          value3: false,
        },
        option: {
          itemLabelWidth: '150px',
          column: [
            {
              children: [
                {
                  itemLabel: '文字描述 :',
                  type: 'switch',
                  model: 'value1',
                  activeText: '按月付费',
                  inactiveText: '按年付费',
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '扩展的 value 类型 :',
                  type: 'switch',
                  model: 'value2',
                  activeText: '10',
                  inactiveValue: '0',
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '禁用状态 :',
                  type: 'switch',
                  model: 'value3',
                  disabled: true,
                },
              ]
            },
          ]
        }
      },
    }

  },
  watch: {},
  mounted() {
  },
  methods: {},
}