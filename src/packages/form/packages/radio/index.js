import './index.scss';
import {eeFormInit} from "../../mixins/eeFormInit";
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-radio',
  mixins: [eeFormInit,eeFormChildrenInit],
  data() {
    return {}
  },
  mounted() {
    this.radioChange(this.obj[this.option.model]);
  },
  methods: {
    /**
     * 选择改变时
     * 设置 下级的disabled属性
     * */
    radioChange(val) {
      this.option.data.map(res => {
        if (res.value !== val) {
          if (res.children && res.children.length) {
            res.children.map(li => {
              this.$set(li, 'disabled', true);
            });
          }
        } else {
          if (res.children && res.children.length) {
            res.children.map(li => {
              this.$set(li, 'disabled', false);
            });
          }
        }
      });
      this.option.change ? this.option.change(val) : '';
    },
  }
}