import './index.scss';

export default {
  name: 'inputNumber',
  data() {
    return {
      /**基础*/
      basics: {
        obj: {
          value: 1,
        },
        option: {
          column: [
            {
              children: [
                {
                  type: 'inputNumber',
                  model: 'value',
                  min: 1,
                  max: 10,
                }
              ]
            },
          ]
        }
      },
      /**禁用状态*/
      disabled: {
        obj: {
          value1: 1,
          value2: 1,
          value3: 1,
          value4: 1,
        },
        dom: '',
        option: {
          column: [
            {
              children: [
                {
                  itemLabel: '禁用状态',
                  type: 'inputNumber',
                  model: 'value1',
                  disabled: true
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '步数',
                  type: 'inputNumber',
                  model: 'value2',
                  step: 2,
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '严格步数',
                  type: 'inputNumber',
                  model: 'value3',
                  step: 2,
                  stepStrictly: true,
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '精度',
                  type: 'inputNumber',
                  model: 'value4',
                  step: 0.1,
                  max: 10,
                  precision: 2,
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