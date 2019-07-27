import './index.scss';

export default {
  name: 'e-start-demo',
  data() {
    const pickerOptions = {
      disabledDate(time) {
        return time.getTime() + 12 * 60 * 60 * 1000 > Date.now();
      },
    };
    return {
      notifyBox: null,
      /**客户查询*/
      basics: {
        obj: {
          tagId: '',
          gender: '',
          current: 1,
          size: 20,
          keyWord: '',
          customerType: '',
          vipType: '',
          pointMax: '',
          pointMin: '',
          OrderTimesMin: '',
          OrderTimesMax: '',
          gmtLastOrderMax: '',
          gmtLastOrderMin: '',
          unitPriceMax: '',
          unitPriceMin: '',
          gmtCreateMax: '',
          gmtCreateMin: '',
          gmtVipMax: '',
          gmtVipMin: '',
          qu: '',
          quType: '',
          address: '',
        },
        option: {
          itemSize: 'small',
          submitBtn: true,
          emptyBtn: true,
          emptyType: 'text',
          emptyTxt: '清空筛选条件',
          column: [
            {
              span: 5,
              children: [
                {
                  itemLabel: '关键词: ',
                  type: 'input',
                  model: 'keyWord',
                  clearable: true,
                  placeholder: '手机号/微信昵称/姓名',
                },
              ]
            },
            {
              span: 5,
              children: [
                {
                  itemLabel: '客户身份: ',
                  type: 'select',
                  model: 'customerType',
                  placeholder: '全部',
                  clearable: true,

                  data: [
                    {
                      value: 1,
                      label: '普通会员',
                    },
                    {
                      value: 2,
                      label: 'VIP',
                    },
                  ]
                },
              ]
            },
            {
              span: 12,
              children: [
                {
                  itemLabel: '标签: ',
                  type: 'select',
                  model: 'tagId',
                  placeholder: '全部',
                  clearable: true,
                  data: [
                    {
                      value: 1,
                      label: '标签A',
                    },
                    {
                      value: 2,
                      label: '标签B',
                    },
                  ]
                },
              ]
            },
            {
              span: 5,
              children: [
                {
                  itemLabel: '性别: ',
                  type: 'select',
                  model: 'gender',
                  placeholder: '全部',
                  clearable: true,
                  data: [
                    {
                      value: 1,
                      label: '男',
                    },
                    {
                      value: 2,
                      label: '女',
                    },
                  ]
                },
              ]
            },
            {
              span: 19,
              children: [
                {
                  itemLabel: '积分: ',
                  type: 'input',
                  model: 'pointMin',
                  style: 'width:80px;',
                  clearable: true,
                  addEnd: '分',
                  addEndStyle: 'margin-left:10px;',
                },
                {
                  type: 'input',
                  model: 'pointMax',
                  style: 'width:80px;',
                  clearable: true,
                  addPre: '-',
                  addEnd: '分',
                  addEndStyle: 'margin-left:10px;',
                  addPreStyle: 'margin-right:10px;',
                },
              ]
            },
            {
              span: 5,
              children: [
                {
                  itemLabel: '购买次数: ',
                  type: 'input',
                  model: 'OrderTimesMin',
                  style: 'width:80px;',
                  clearable: true,
                },
                {
                  type: 'input',
                  model: 'OrderTimesMax',
                  style: 'width:80px;',
                  clearable: true,
                  addPre: '-',
                  addPreStyle: 'margin-right:10px;margin-left:10px;',
                },
              ]
            },
            {
              span: 19,
              children: [
                {
                  itemLabel: '客单价: ',
                  type: 'input',
                  model: 'unitPriceMin',
                  style: 'width:120px;',
                  clearable: true,
                  prepend: '¥',
                },
                {
                  type: 'input',
                  model: 'unitPriceMax',
                  style: 'width:120px;',
                  clearable: true,
                  prepend: '¥',
                  addPre: '-',
                  addPreStyle: 'margin-right:10px;margin-left:10px;',
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '上次消费时间: ',
                  type: 'datePicker',
                  model: 'gmtLastOrderMin&gmtLastOrderMax',
                  eleType: 'datetimerange',
                  rangeSeparator: '至',
                  startPlaceholder: '开始日期',
                  endPlaceholder: '结束日期',
                  clearable: true,
                  pickerOptions: pickerOptions,
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '成为客户时间: ',
                  type: 'datePicker',
                  model: 'gmtVipMin&gmtVipMax',
                  eleType: 'datetimerange',
                  rangeSeparator: '至',
                  startPlaceholder: '开始日期',
                  endPlaceholder: '结束日期',
                  clearable: true,
                  pickerOptions: pickerOptions,
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '成为会员时间: ',
                  type: 'datePicker',
                  model: 'gmtCreateMin&gmtCreateMax',
                  eleType: 'datetimerange',
                  rangeSeparator: '至',
                  startPlaceholder: '开始日期',
                  endPlaceholder: '结束日期',
                  clearable: true,
                  pickerOptions: pickerOptions,
                },
              ]
            },
            {
              span: 5,
              children: [
                {
                  itemLabel: '来源渠道: ',
                  type: 'select',
                  model: 'qu',
                  placeholder: '全部',
                  clearable: true,
                  data: [
                    {
                      value: 1,
                      label: '渠道A',
                    },
                    {
                      value: 2,
                      label: '渠道B',
                    },
                  ]
                },
              ]
            },
            {
              span: 5,
              children: [
                {
                  itemLabel: '来源方式: ',
                  type: 'select',
                  model: 'quType',
                  placeholder: '全部',
                  clearable: true,
                  data: [
                    {
                      value: 1,
                      label: '方式A',
                    },
                    {
                      value: 2,
                      label: '方式B',
                    },
                  ]
                },
              ]
            },
            {
              span: 5,
              children: [
                {
                  itemLabel: '地域: ',
                  type: 'select',
                  model: 'address',
                  placeholder: '全部',
                  clearable: true,
                  data: [
                    {
                      value: 1,
                      label: '地域A',
                    },
                    {
                      value: 2,
                      label: '地域B',
                    },
                  ]
                },
              ]
            },
          ]
        }
      },
      /**新建满减优惠券*/
      coupon: {
        obj: {
          name: '',
          allNumber: '',
          goodsType: 1,
          limit: 0,
          oneNumber: 0,
          money: '',
          useTime: 1,
          getNumbers: '',
          share: 1,
          users: 1,
          desc: '',
        },
        option: {
          itemSize: 'small',
          submitBtn: true,
          emptyType: 'text',
          column: [
            {
              title: '基本信息',
            },
            {
              children: [
                {
                  itemLabel: '优惠券名称 : ',
                  type: 'input',
                  model: 'name',
                  itemProp: 'name',
                  itemRules: [
                    {required: true, message: '请填写优惠券名称', trigger: 'blur'}
                  ],
                  clearable: true,
                  placeholder: '如：庆国庆优惠券，最多10个字',
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '发放总量 : ',
                  type: 'input',
                  model: 'allNumber',
                  itemProp: 'allNumber',
                  desc: '修改优惠券总量时只能增加不能减少，请谨慎设置',
                  itemRules: [
                    {required: true, message: '请输入优惠券总量', trigger: 'blur'}
                  ],
                  clearable: true,
                  placeholder: '最多100000000张',
                },
              ]
            },
            {
              children: [
                {
                  itemLabel: '适用商品 : ',
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
                  itemLabel: '使用门槛 : ',
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
            {
              children: [
                {
                  itemLabel: '优惠内容 : ',
                  type: 'input',
                  model: 'discounts',
                  addPre: '减免',
                  addPreStyle: 'margin-right:10px',
                  addEndStyle: 'margin-left:10px',
                  addEnd: '元',
                }
              ]
            },
            {
              children: [
                {
                  itemLabel: '用券时间 : ',
                  type: 'radio',
                  model: 'useTime',
                  style: 'margin-bottom:10px;',
                  data: [
                    {
                      value: 1,
                      children: [//子选项
                        {
                          itemLabel: '选择日期范围：',
                          type: 'datePicker',
                          model: 'value4',
                          eleType: 'daterange',
                          startPlaceholder: '开始日期',
                          endPlaceholder: '结束日期',
                          rangeSeparator: '至',
                          pickerOptions: {
                            disabledDate(time) {
                              return time.getTime() + 2 * 12 * 60 * 60 * 1000 < Date.now();
                            },
                          },
                        },
                      ],
                    },
                    {
                      value: 2,
                      children: [
                        {
                          type: 'input',
                          model: 'toDay',
                          clearable: true,
                          addPre: '领券当日起',
                          addPreStyle: 'margin-right:10px;',
                          addEnd: '天内可用',
                          addEndStyle: 'margin-left:10px;',
                        }
                      ],
                    },
                    {
                      value: 3,
                      children: [
                        {
                          type: 'input',
                          model: 'day',
                          clearable: true,
                          addPre: '领券次日起',
                          addPreStyle: 'margin-right:10px;',
                          addEnd: '天内可用',
                          addEndStyle: 'margin-left:10px;',
                        }
                      ],
                    },
                  ],
                }
              ]
            },
            {
              title: '领取和使用规则'
            },
            {
              children: [
                {
                  itemLabel: '领取人限制 : ',
                  type: 'radio',
                  model: 'users',
                  slotNameFormData: [
                    {
                      slotName: 'onlyUsers'
                    },
                  ],
                  data: [
                    {
                      value: 1,
                      label: '不限制，所有人可领',
                    },
                    {
                      value: 2,
                      label: '指定客户身份可领',
                      slotName: 'onlyUsers',
                    },
                  ],
                }
              ]
            },
            {
              children: [
                {
                  itemLabel: '每人限领次数 : ',
                  type: 'radio',
                  model: 'oneNumber',
                  data: [
                    {
                      value: 0,
                      label: '不限次数',
                    },
                    {
                      value: 2,
                      children: [
                        {
                          itemLabel: '请选择： ',
                          type: 'select',
                          model: 'getNumbers',
                          data: [
                            {
                              value: 1,
                              label: 1
                            },
                            {
                              value: 2,
                              label: 2
                            },
                            {
                              value: 3,
                              label: 3
                            },
                            {
                              value: 4,
                              label: 4
                            },
                            {
                              value: 5,
                              label: 5
                            },
                            {
                              value: 10,
                              label: 10
                            },
                          ],
                        },
                      ],
                    },
                  ],
                }

              ]
            },
            {
              children: [
                {
                  itemLabel: '分享设置 : ',
                  label: '优惠券允许分享给好友领取',
                  type: 'checkbox',
                  trueLabel: 1,
                  falseLabel: 0,
                  model: 'share',
                }

              ]
            },
            {
              children: [
                {
                  itemLabel: '使用说明 : ',
                  type: 'input',
                  model: 'desc',
                  eleType: 'textarea',
                  itemProp: 'desc',
                  itemRules: [
                    {required: true, message: '请填写使用说明', trigger: 'blur'}
                  ],
                  placeholder: '使用说明',
                }

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
  methods: {
    /**保存回调*/
    submit(ev) {
      console.log(ev);
      if (ev.status === 0) return;
      if (this.notifyBox) {
        this.notifyBox.close();
      }
      this.notifyBox = this.$notify({
        title: '数据结构',
        dangerouslyUseHTMLString: true,
        duration: 0,
        message: `<div class="demo-rest">${JSON.stringify(ev.data)}</div>`
      });
    },
  },
}