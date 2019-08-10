import './index.scss';

export default {
  name: 'e-table-header',
  data() {
    return {
      list: [
        {
          date: '',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516'
        }
      ],
      option: {
        showHeader: true,
        column: [
          {
            label: '姓名',
            prop: 'name',
            slotHeader: 'theName'
          },
          {
            label: '地址',
            prop: 'address',
          },
          {
            label: '时间',
            prop: 'date',
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