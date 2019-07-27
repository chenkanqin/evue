import './index.scss';

export default {
  name: 'datePicker',
  data() {
    return {
      obj: {
        value: '',
        value1: '',
        value2: '',
        value3: '',
        minTime: '',
        MaxTime: '',
      },
      option: {
        labelWidth: '150px',
        column: [
          {
            children: [
              {
                itemLabel: '选择日：',
                type: 'datePicker',
                model: 'value',
                placeholder: '请选择日期',
                pickerOptions: {
                  disabledDate(time) {
                    return time.getTime() > Date.now();
                  },
                  shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                      picker.$emit('pick', new Date());
                    }
                  }, {
                    text: '昨天',
                    onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      picker.$emit('pick', date);
                    }
                  }, {
                    text: '一周前',
                    onClick(picker) {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', date);
                    }
                  }]
                },
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '周、年、月：',
                type: 'datePicker',
                model: 'value1',
                eleType: 'week',
                format: 'yyyy 第 WW 周',
                placeholder: '选择周'
              },
              {
                type: 'datePicker',
                model: 'value2',
                eleType: 'month',
                placeholder: '选择月'
              },
              {
                type: 'datePicker',
                model: 'value3',
                eleType: 'year',
                placeholder: '选择年'
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '选择日期范围：',
                type: 'datePicker',
                model: 'minTime&MaxTime',
                eleType: 'daterange',
                startPlaceholder: '开始日期',
                endPlaceholder: '结束日期',
                rangeSeparator: '至',
                pickerOptions: {
                  disabledDate(time) {
                    return time.getTime() + 2 * 12 * 60 * 60 * 1000 < Date.now();
                  },
                },
              },
            ]
          },
        ]
      }
    }

  },
  watch: {},
  mounted() {

  },
  methods: {},
}