import './index.scss';

export default {
  name: 'slider',
  data() {
    return {
      state: {
        basics: false,
      },
      /**基础*/
      basics: {
        obj: {
          value: 0,
          value1: 10,
          value2: 20,
          value3: 30,
          value4: 40,
        },
        option: {
          labelWidth: '150px',
          column: [
            {
              children: [
                {
                  itemLabel: '默认：',
                  type: 'slider',
                  model: 'value',
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '自定义初始值：',
                  type: 'slider',
                  model: 'value1',
                }
              ]
            },
            {
              children: [
                {
                  itemLabel: '隐藏 Tooltip：',
                  type: 'slider',
                  model: 'value2',
                  showTooltip: false,
                }
              ]
            },
            {
              children: [
                {
                  itemLabel: '格式化 Tooltip: ',
                  type: 'slider',
                  model: 'value3',
                  formatTooltip: (val) => {
                    return val / 100;
                  },
                }
              ]
            },
            {
              children: [
                {
                  itemLabel: '禁用: ',
                  type: 'slider',
                  model: 'value4',
                  disabled: true
                }
              ]
            },
          ]
        }
      },
      /**范围选择*/
      range: {
        obj: {
          value: [3, 7],
          value1: [16, 50],
        },
        option: {
          column: [
            {
              children: [
                {
                  itemLabel: '范围选择 : ',
                  type: 'slider',
                  model: 'value',
                  range: true,
                  showStops: true,
                  max: 10,
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '展示标记 : ',
                  type: 'slider',
                  model: 'value1',
                  range: true,
                  marks: {
                    0: '0°C',
                    8: '8°C',
                    37: '37°C',
                    50: {
                      style: {
                        color: '#1989FA'
                      },
                      label: this.$createElement('strong', '50%')
                    }
                  },
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