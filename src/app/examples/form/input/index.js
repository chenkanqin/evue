import './index.scss';

export default {
  name: 'e-input',
  data() {
    return {
      obj: {
        value: '',
        value1: '',
        value2: '',
        value3: '',
        select: '1',
      },
      option: {
        column: [
          {
            children: [
              {
                itemLabel: '基础 :',
                itemProp: 'value',
                itemRules: [
                  {required: true, message: '请输入名称', trigger: 'blur'}
                ],
                type: 'input',
                model: 'value',
                placeholder: '请输入',
              },
              {
                type: 'input',
                model: 'value1',
                disabled: true,
                placeholder: '禁用状态',
              },
              {
                type: 'input',
                model: 'value2',
                suffixIcon: 'el-icon-date',
                placeholder: '带 icon 的输入框',
              },
              {
                type: 'input',
                model: 'value2',
                prefixIcon: 'el-icon-search',
                placeholder: '带 icon 的输入框',
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '文本域 :',
                type: 'input',
                model: 'value3',
                eleType: 'textarea',
                placeholder: '请输入',
                rows: 2,
              },
            ]
          },
          {
            title: '这里是额外的标题',
          },
          {
            children: [
              {
                itemLabel: '综合 :',
                type: 'input',
                model: 'value4',
                placeholder: '请输入',
                prepend: '前',
                suffix: 'ele',
              },
              {
                type: 'input',
                model: 'value5',
                placeholder: '请输入',
                append: '后',
                prefix: 'ele',
              },
              {
                type: 'input',
                model: 'value6',
                placeholder: '输入长度限制',
                maxLength: 10,
                showWordLimit: true,
              },
              {
                type: 'input',
                model: 'value7',
                placeholder: '输入长度限制',
                prependSlot: 'prependSlotName',
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '其他 :',
                type: 'input',
                model: 'value9',
                placeholder: '请输入',
                addPre: '订满',
                addPreStyle: 'margin-right:10px;',
                addEnd: '元',
                addEndClass: 'addEndClass',
              },
            ]
          },
          {
            slotName: 'columnSlotName',
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