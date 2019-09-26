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
      config: {
        indexWidth: 50,
        expandWidth: 50,
        selectionWidth: 50,
      },
      currentSelection: [], // 当前选择的
      isCanChange: false, // 是否选择时可以改变了
    }
  },
  components: {
    pagination: () => import('../../pagination/index.vue'),
  },
  watch: {
    data: {
      deep: true,
      handler(list) {
        /** selectionKey 选择模式翻页时选择唯一key  选择模式翻页时是否不清空之前选择的*/
        this.isCanChange = false;
        if (this.currentSelection.length && this.option.selectionKey) { // 判断当前是否有选中的
          this.$nextTick(() => {
            this.currentSelection.map((li, ind) => {
              const $index = list.findIndex(x => x[this.option.selectionKey] === li[this.option.selectionKey]);
              if ($index >= 0) {
                this.$refs.eVueTable.toggleRowSelection(this.$refs.eVueTable.data[$index], true);
              }
              if (ind === this.currentSelection.length - 1) {
                this.isCanChange = true;
              }
            });
          })
        } else {
          this.isCanChange = true;
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    /*Table Events*/
    tableEvents(name, val) {
      if (!name) return;
      this.$emit(name, val);
    },
    //当选择项发生变化时会触发该事件
    selectionChange(ev) {
      let endSelectData = ev;
      if (this.option.selectionKey) { // 只要在存在key的情况下才梳理
        if (!this.isCanChange) return;
        this.data.map(res => {
          const $in = ev.find(x => x[this.option.selectionKey] === res[this.option.selectionKey]);
          //是否存在被选中
          const $selectionIndex = this.currentSelection.findIndex(x => x[this.option.selectionKey] === res[this.option.selectionKey]);
          if ($in) { //当前选中
            if ($selectionIndex < 0) {//不存在
              this.currentSelection.push(res);
            }
          } else {//取消
            if ($selectionIndex >= 0) {//存在
              this.currentSelection.splice($selectionIndex, 1);
            }
          }
        });
        endSelectData = this.currentSelection;
      }
      this.$emit('selectionChange', endSelectData);
    },
    //当用户手动勾选数据行的 Checkbox 时触发的事件
    select(ev) {
      this.$emit('select', ev);
    },
    //当用户手动勾选全选 Checkbox 时触发的事件
    selectAll(ev) {
      this.$emit('selectAll', ev);
    },
    //当表格的排序条件发生变化的时候会触发该事件
    sortChange(ev) {
      this.$emit('sortChange', ev);
    },
    //当某一行被点击时会触发该事件
    rowClick(ev) {
      this.$emit('rowClick', ev);
    },
    //当某个单元格被双击击时会触发该事件
    rowDblclick(ev) {
      this.$emit('rowDblclick', ev);
    },
    //当单元格 hover 进入时会触发该事件
    cellMouseEnter(ev) {
      this.$emit('cellMouseEnter', ev);
    },
    //当单元格 hover 退出时会触发该事件
    cellMouseLeave(ev) {
      this.$emit('cellMouseLeave', ev);
    },
    //当某个单元格被点击时会触发该事件
    cellClick(ev) {
      this.$emit('cellClick', ev);
    },
    //当某个单元格被双击击时会触发该事件
    cellDblclick(ev) {
      this.$emit('cellDblclick', ev);
    },
    //当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
    currentRowChange(ev) {
      this.$emit('currentRowChange', ev);
    },
    //当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）
    expandChange(ev) {
      this.$emit('expandChange', ev);
    },
    //当某一行被鼠标右键点击时会触发该事件
    rowContextmenu(ev) {
      this.$emit('rowContextmenu', ev);
    },
    //当某一列的表头被点击时会触发该事件
    headerClick(ev) {
      this.$emit('headerClick', ev);
    },
    //当拖动表头改变了列的宽度的时候会触发该事件
    headerDragend(ev) {
      this.$emit('headerDragend', ev);
    },
    /**Table Methods*/
    tableMethods(fun) {
      if (!fun) return;
      this.$refs.eVueTable[fun]();
    },
    //用于多选表格，清空用户的选择
    clearSelection() {
      this.tableMethods('clearSelection');
    },
    //用于多选表格，切换所有行的选中状态
    toggleAllSelection() {
      this.tableMethods('toggleAllSelection');
    },
    //用于清空排序条件，数据会恢复成未排序的状态
    clearSort() {
      this.tableMethods('clearSort');
    },
    //对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
    doLayout() {
      this.tableMethods('doLayout');
    },
    //用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
    toggleRowSelection(row, selected) {
      this.$refs.eVueTable.toggleRowSelection(row, selected);
    },
    //用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）
    toggleRowExpansion(row, expanded) {
      this.$refs.eVueTable.toggleRowExpansion(row, expanded);
    },
    //用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。
    setCurrentRow(row) {
      this.$refs.eVueTable.setCurrentRow(row);
    },
    //不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件
    clearFilter(columnKey) {
      this.$refs.eVueTable.clearFilter(columnKey);
    },
    //不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件
    sort(prop, order) {
      this.$refs.eVueTable.sort(prop, order);
    },
    /**table-column的方法*/
    filterMethod(value, row, column) {
      this.$emit('filterMethod', {value, row, column});
    },
    /**分页改变*/
    paginationChance(val) {
      this.$emit('paginationChance', val);
    }
  }
}
