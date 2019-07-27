import './index.scss';
import {eeFormChildrenInit} from "../../mixins/eeFormChildrenInit";
import {upFiles} from "./upMixins";

export default {
  name: 'upload',
  mixins: [eeFormChildrenInit, upFiles],
  mounted() {
  },
  methods: {}
}