import './index.scss';

export default {
  name: 'e-table-isExpand',
  data() {
    return {
      list: [
        {
          date: '',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518',
          amount: 2,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517',
          amount: 1,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519',

          amount: 4,
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516',
          amount: 9,
        },
      ],
      option: {
        border: true,
        showSummary: true,
        column: [
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '地址',
            prop: 'address',
          },
          {
            label: '时间',
            prop: 'date',
          },
          {
            label: '分数',
            prop: 'amount',
          },
        ],
      }
    }
  },
  watch: {},
  mounted() {
  },
  methods: {

  },
}