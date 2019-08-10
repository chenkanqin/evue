import './index.scss';

export default {
  name: 'e-vue-addPreEnd',
  props: {
    option: {
      type: Object,
      default: () => {
      },
    },
    addPre: {
      type: Boolean,
      default: false,
    },
    addEnd: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}