export const eeDateAndTimePicker = {
  name: 'eeDateAndTimePicker',
  props: {},
  data() {
    return {
      timeVal: '',
      isTimePickerComponent: true,
    };
  },
  watch: {
    /**监听时间选择的变化*/
    timeVal(val) {
      if (val) {
        this.isRange();
      }
    },
  },
  methods: {
    /**判断是否为是否为时间范围选择 只对timePicker有效*/
    isRange() {
      /**是否需要判断 & 结果为数组的形式*/
      let isPass = true;
      if (this.isTimePickerComponent) {
        isPass = (this.option && this.option.isRange && this.option.eleType === 'timePicker');
      } else {
        isPass = (this.option && (this.option.eleType === 'datetimerange' || this.option.eleType === 'daterange'));
      }
      if (isPass) {
        console.log(1);
        if (this.option.model && this.option.model.includes('&')) {
          console.log(2);
          let fields = this.option.model.split('&');
          this.obj[fields[0]] = this.timeVal[0];
          this.obj[fields[1]] = this.timeVal[1];
        } else {
          console.log(3);
          this.obj[this.option.model] = this.timeVal;
        }
      } else {
        console.log(4);
        this.obj[this.option.model] = this.timeVal;
      }
    },
  }
};