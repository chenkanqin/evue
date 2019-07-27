import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";
import {eeDateAndTimePicker} from "../../mixins/eeDateAndTimePicker";

export default {
  name: 'e-vue-datePicker',
  mixins: [eeFormChildrenInit, eeDateAndTimePicker],
  data() {
    return {
      isTimePickerComponent:false,
    }
  },
  mounted() { },
  methods: {}
}