import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-transfer',
  mixins: [eeFormChildrenInit],
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    /**左侧列表元素被用户选中 / 取消选中时触发*/
    leftCheckChange(ev) {
      this.option.leftCheckChange ? this.option.leftCheckChange(ev) : '';
    },
    /**右侧列表元素被用户选中 / 取消选中时触发*/
    rightCheckChange(ev) {
      this.option.rightCheckChange ? this.option.rightCheckChange(ev) : '';
    },
  }
}