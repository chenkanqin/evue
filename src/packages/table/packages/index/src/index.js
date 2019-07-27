import './index.scss';

export default {
  name: 'evueTable',
  props: {
    option: {//所有数据结构
      type: Object,
      default: () => {
        return {}
      },
    },
    data: {//数据
      type: Array,
      default: () => [],
    },
    obj: { //数据默认的值
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  model: {
    prop: 'obj',
  },
  data() {
    return {
      /**备份*/
      copyObj: {},
    }
  },
  components: {},
  watch: {},
  mounted() {
  },
  methods: {
    selectionChange(ev) {
      this.option.selectionChange ? this.option.selectionChange(ev) : '';
    },
    select(ev) {
      this.option.select ? this.option.select(ev) : '';
    },
    selectAll(ev) {
      this.option.selectAll ? this.option.selectAll(ev) : '';
    },
    sortChange(ev) {
      this.option.sortChange ? this.option.sortChange(ev) : '';
    },
    rowClick(ev) {
      this.option.rowClick ? this.option.rowClick(ev) : '';
    },
    rowDblclick(ev) {
      this.option.rowDblclick ? this.option.rowDblclick(ev) : '';
    },
    cellMouseEnter(ev) {
      this.option.cellMouseEnter ? this.option.cellMouseEnter(ev) : '';
    },
    cellMouseLeave(ev) {
      this.option.cellMouseLeave ? this.option.cellMouseLeave(ev) : '';
    },
    cellClick(ev) {
      this.option.cellClick ? this.option.cellClick(ev) : '';
    },
    cellDblclick(ev) {
      this.option.cellDblclick ? this.option.cellDblclick(ev) : '';
    },
    currentRowChange(ev) {
      this.option.currentRowChange ? this.option.currentRowChange(ev) : '';
    },
    expandChange(ev) {
      this.option.expandChange ? this.option.expandChange(ev) : '';
    },
  }
}