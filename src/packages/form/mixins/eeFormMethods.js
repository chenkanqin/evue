export const eeFormMethods = {
  name: 'eeFormMethods',
  props: {},
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
  }
};