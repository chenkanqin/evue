import './index.scss';

export default {
  name: 'select-demo',
  data() {
    return {
      obj: {
        value: 1,
        value1: [],
        value2: '',
        value3: '',
      },
      option: {
        labelWidth: '150px',
        column: [
          {
            children: [
              {
                itemLabel: '可清空可搜索： ',
                type: 'select',
                model: 'value',
                clearable: true,
                filterable: true,
                slotName: 'valueSlotName',
                clear: () => {
                  this.$message.success('你点击了清除');
                },
                data: [
                  {
                    value: 1,
                    label: '选项1'
                  },
                  {
                    value: 2,
                    label: '选项2'
                  },
                  {
                    value: 3,
                    label: '选项3'
                  },
                ],
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '可多选： ',
                type: 'select',
                model: 'value1',
                multiple: true,
                placeholder: '可选择多个',
                data: [
                  {
                    value: 1,
                    label: '选项1'
                  },
                  {
                    value: 2,
                    label: '选项2'
                  },
                  {
                    value: 3,
                    label: '选项3'
                  },
                ],
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '自定义defaultProps： ',
                type: 'select',
                model: 'value2',
                defaultProps: {
                  value: 'name',
                  label: 'desc',
                },
                data: [
                  {
                    name: 'a',
                    desc: '名称a'
                  },
                  {
                    name: 'b',
                    desc: '名称b'
                  },
                  {
                    name: 'c',
                    desc: '名称c'
                  },
                ],
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '分组isGroup： ',
                type: 'select',
                model: 'value3',
                isGroup: true,
                data: [
                  {
                    label: '年级',
                    data: [
                      {
                        value: 1,
                        label: '一年级'
                      },
                      {
                        value: 2,
                        label: '二年级'
                      },
                    ],
                  },
                  {
                    label: '课程',
                    data: [
                      {
                        value: 3,
                        label: '计算机'
                      },
                      {
                        value: 4,
                        label: '美术'
                      },
                    ],
                  },
                ],
              },
            ]
          },
        ]
      }
    }

  },
  watch: {},
  mounted() {
  },
  methods: {},
}