import './index.scss';

export default {
  name: 'pagination',
  props: {
    hideOnSinglePage: { //当只有一页时隐藏分页
      type: Boolean,
      default: false,
    },
    current: { //当前位于页数
      type: Number,
      default: 1,
    },
    pageSizes: {//每页显示个数选择器的选项设置
      default: () => {
        return [10, 20, 30, 40];
      }
    },
    total: { //全部数据
      type: Number,
      default: 100,
    },
    size: {//每页显示条目个数
      type: Number,
      default: 20,
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    handleSizeChange(val) {
      this.emitData('pageSize', val);
    },
    handleCurrentChange(val) {
      this.emitData('current', val);
    },
    emitData($type = 'pageSize', val) {
      this.$emit('paginationChance', {
        type: $type, // pageSize  每页多少条改变   current 当前页改变
        data: {
          size: $type === 'pageSize' && val ? val : this.size,
          total: this.total,
          pageSizes: this.pageSizes,
          current: $type === 'current' && val ? val : this.current,
        },
      })
    },
  },
}