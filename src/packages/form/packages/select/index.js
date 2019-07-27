import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-select',
  mixins: [eeFormChildrenInit],
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    /**下拉框出现/隐藏时触发*/
    visibleChange(ev) {
      this.option.visibleChange ? this.option.visibleChange(ev) : '';
    },
    /**多选模式下移除tag时触发*/
    removeTag(ev) {
      this.option.removeTag ? this.option.removeTag(ev) : '';
    },
  }
}