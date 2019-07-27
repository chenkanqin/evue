import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-slider',
  mixins: [eeFormChildrenInit],
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    input(ev) {
      this.option.input ? this.option.input(ev) : '';
    },
  }
}