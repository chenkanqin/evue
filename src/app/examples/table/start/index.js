import './index.scss';

export default {
  name: 'e-table-start',
  data() {
    return {
      list: [
        {
          goodsName: '液体颊彩',
          price: '￥1.00',
          img: 'https://www.ifnav.com/static/images/evue-logo.png',
          comeNum: 0,
          viewNum: 0,
          skuNum: 100,
          salesVolume: 10,
          gtmTime: '2019-08-02 15:30:30',
          xu: 0,
        },
        {
          goodsName: '立体丰盈睫毛膏',
          price: '￥4.00',
          img: 'https://www.ifnav.com/static/images/evue-logo.png',
          comeNum: 32,
          viewNum: 13,
          skuNum: 120,
          salesVolume: 10,
          gtmTime: '2019-08-02 15:36:30',
          xu: 11,
        },
      ],
      option: {
        isPagination: true,
        paginationTotal: 5,
        paginationCurrent: 1,
        paginationSize: 20,
        isSelection: true,
        menuDeleteOption: {
          type: 'text'
        },
        menuEditOption: {
          type: 'text'
        },
        column: [
          {
            label: '商品 价格',
            prop: 'goodsName',
            slotName: 'goodsName',
          },
          {
            label: '访问量',
            prop: 'comeNum',
            slotName: 'comeNum'
          },
          {
            label: '库存',
            prop: 'skuNum',
            sortable: true,
          },
          {
            label: '总销量',
            prop: 'salesVolume',
            sortable: true,
          },
          {
            label: '创建时间',
            prop: 'gtmTime',
            sortable: true,
          },
          {
            label: '序号',
            prop: 'xu',
          },
        ],
      }
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    selectionChange(ev) {
      if (this.notifyBox) {
        this.notifyBox.close();
      }
      this.notifyBox = this.$notify({
        title: '选中的结果返回',
        dangerouslyUseHTMLString: true,
        duration: 0,
        message: `<div class="demo-rest">${JSON.stringify(ev)}</div>`
      });
    },
  },
}