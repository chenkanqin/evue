import './index.scss';
import {eeFormChildrenInit} from "../../../mixins/eeFormChildrenInit";

export default {
  name: 'e-vue-special',
  mixins: [eeFormChildrenInit],
  props: {
    option: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}