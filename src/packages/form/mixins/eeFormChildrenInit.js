export const eeFormChildrenInit = {
  name: 'eeFormChildrenInit',
  props: {
    option: {
      type: Object,
      default: () => {
      },
    },
    obj: {
      type: Object,
      default: () => {
      },
    },
    currentIndex: {
      type: Number,
      default: ''
    },
  },
  components: {
    eDesc: () => import('../packages/desc/index.vue'),
  },
  model: {
    prop: 'obj',
  },
  data() {
    return {};
  },
  methods: {
    change(ev) {
      this.option.change ? this.option.change(ev) : '';
    },
    blur(ev) {
      this.option.blur ? this.option.blur(ev) : '';
    },
    focus(ev) {
      this.option.focus ? this.option.focus(ev) : '';
    },
    clear(ev) {
      this.option.clear ? this.option.clear(ev) : '';
    },
  }
};