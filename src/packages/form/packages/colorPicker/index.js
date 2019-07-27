import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-colorPicker',
  mixins: [eeFormChildrenInit],
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    /**面板中当前显示的颜色发生改变时触发*/
    activeChange(ev) {
      this.option.activeChange ? this.option.activeChange(ev) : '';
    },
  }
}