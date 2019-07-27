import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-cascader',
  mixins: [eeFormChildrenInit],
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    /**当展开节点发生变化时触发*/
    expandChange(ev) {
      this.option.expandChange ? this.option.expandChange(ev) : '';
    },
    /**下拉框出现/隐藏时触发*/
    visibleChange(ev) {
      this.option.visibleChange ? this.option.visibleChange(ev) : '';
    },
    /**在多选模式下，移除Tag时触发*/
    removeTag(ev) {
      this.option.removeTag ? this.option.removeTag(ev) : '';
    },
  }
}