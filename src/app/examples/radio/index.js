import './index.scss';
export default {
  name: 'form-radio',
  data() {
    return {
      state: {
        basics: false,
      },
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
                  type: 'radio',
                  model: 'value',
                  inline: true,
                  data: [
                    {
                      value: 1,
                      label: '备选项',
                    },
                    {
                      value: 2,
                      label: '备选项',
                    },
                  ],
                }
              ]
            },
          ]
        }
      },
      /**禁用状态*/
      disabled: {
        obj: {
          value: 2,
        },
        option: {
          column: [
            {
              children: [
                {
                  type: 'radio',
                  model: 'value',
                  inline: true,
                  disabled: true,
                  data: [
                    {
                      value: 1,
                      label: '备选项',
                    },
                    {
                      value: 2,
                      label: '备选项',
                    },
                  ],
                }
              ]
            },
          ]
        }
      },

      /**综合*/
      model: {
        goodsType: 1,
        limit: 0,
      },
      option: {
        labelWidth: '100px',
        size: 'small',
        submitBtn: true,
        column: [
          {
            children: [
              {
                itemLabel: '适用商品',
                type: 'radio',
                model: 'goodsType',
                desc: '若活动商品中存在分销商品（知识付费的分销专栏除外），优惠后可能造成利润受损',
                slotNameFormData: [
                  {
                    slotName: 'onlyGoods'
                  },
                  {
                    slotName: 'onlyGoodsNoUse'
                  },
                ],
                data: [
                  {
                    value: 1,
                    label: '全部商品可用',
                  },
                  {
                    value: 2,
                    label: '指定商品可用',
                    slotName: 'onlyGoods',
                  },
                  {
                    value: 3,
                    label: '指定商品不可用',
                    slotName: 'onlyGoodsNoUse',
                  },
                ],
              }
            ],
          },
          {
            children: [
              {
                itemLabel: '使用门槛',
                type: 'radio',
                model: 'limit',
                data: [
                  {
                    value: 0,
                    label: '无使用门槛',
                  },
                  {
                    value: 2,
                    label: '订单满',
                    children: [//子选项
                      {
                        type: 'input',
                        model: 'money',
                        clearable: true,
                        addEnd: '元',
                        addEndStyle: 'margin-left:10px;',
                      }
                    ],
                  },
                ],
              }
            ],
          },
        ]
      },
    }

  },
  watch: {},
  mounted() {
  },
  methods: {},
}