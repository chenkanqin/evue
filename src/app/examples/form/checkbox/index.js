import './index.scss';

export default {
  name: 'form-checkbox',
  data() {
    return {
      /** 基础*/
      basics: {
        obj: {
          value: true,
        },
        option: {
          column: [
            {
              children: [
                {
                  label: '备选项',
                  type: 'checkbox',
                  model: 'value',
                }
              ]
            },
          ]
        }
      },
      /** 禁用状态*/
      disabled: {
        obj: {
          value: [2],
          valueA: [2],
          valueC: [],
        },
        option: {
          column: [
            {
              children: [
                {
                  type: 'checkbox',
                  model: 'value',
                  isGroup: true,
                  disabled: true,
                  data: [
                    {
                      value: 1,
                      label: '备选项1',
                    },
                    {
                      value: 2,
                      label: '备选项2',
                    },
                  ],
                },
              ]
            },
            {
              children: [
                {
                  type: 'checkbox',
                  model: 'valueA',
                  isGroup: true,
                  data: [
                    {
                      value: 1,
                      label: '备选项A',
                    },
                    {
                      value: 2,
                      disabled: true,
                      label: '备选项B',
                    },
                  ],
                },
              ]
            },
            {
              children: [
                {
                  type: 'checkbox',
                  model: 'valueC',
                  isGroup: true,
                  isButton: true,
                  data: [
                    {
                      value: 1,
                      label: '备选项C',
                    },
                    {
                      value: 2,
                      disabled: true,
                      label: '备选项D',
                    },
                  ],
                },
              ]
            },
          ]
        }
      },

      /** children状态*/
      children: {
        obj: {
          value: []
        },
        option: {
          column: [
            {
              children: [
                {
                  type: 'checkbox',
                  model: 'value',
                  isGroup: true,
                  isBlock: true,
                  slotNameFormData: [
                    {
                      slotName: 'one'
                    },
                    {
                      slotName: 'two'
                    },
                  ],
                  data: [
                    {
                      value: 1,
                      label: '备选项1',
                      slotName: 'one'
                    },
                    {
                      value: 2,
                      label: '备选项2',
                      slotName: 'two',
                      children: [ // 子选项
                        {
                          type: 'input',
                          model: 'money',
                          clearable: true,
                          addEnd: '元',
                          addEndStyle: 'margin-left:10px;',
                        }
                      ],
                    },
                    {
                      value: 3,
                      label: '备选项3',
                      children: [ // 子选项
                        {
                          type: 'input',
                          model: 'money',
                          clearable: true,
                          addEnd: '次',
                          addEndStyle: 'margin-left:10px;',
                        }
                      ],
                    },
                  ],
                },
              ]
            }
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
