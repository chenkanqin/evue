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
    timeVal() {
      this.isRange();
    },
    isStartResetFields() {
      this.timeVal = '';
    },
    obj: {
      deep: true,
      handler(val) {
        if (this.option.model && this.option.model.includes('&')) {
          let fields = this.option.model.split('&');
          if (!val[fields[0]]) {
            this.timeVal = '';
          }
        } else {
          if (!val[this.option.model]) {
            this.timeVal = '';
          }
        }
        this.isRange(true);
      }
    },
  },
  mounted() {
    this.isRange(true);
  },
  methods: {
    /**判断是否为是否为时间范围选择 只对timePicker有效*/
    isRange($isFirst = false) {
      /**是否需要判断 & 结果为数组的形式*/
      let isPass = true;
      if (this.isTimePickerComponent) {
        isPass = (this.option && this.option.isRange && this.option.eleType === 'timePicker');
      } else {
        isPass = (this.option && (this.option.eleType === 'datetimerange' || this.option.eleType === 'daterange'));
      }
      if (isPass) {
        if (this.option.model && this.option.model.includes('&')) {
          let fields = this.option.model.split('&');
          if ($isFirst) {//初始化
            this.timeVal = [this.obj[fields[0]], this.obj[fields[1]]];
          } else {
            this.obj[fields[0]] = this.timeVal && this.timeVal.length ? this.timeVal[0] : '';
            this.obj[fields[1]] = this.timeVal && this.timeVal.length ? this.timeVal[1] : '';
          }
        } else {
          this.setVal($isFirst);
        }
      } else {
        this.setVal($isFirst);
      }
    },
    setVal($isFirst) {
      if ($isFirst) {
        this.timeVal = this.obj[this.option.model] || '';
      } else {
        this.obj[this.option.model] = this.timeVal;
      }
    },
  }
};