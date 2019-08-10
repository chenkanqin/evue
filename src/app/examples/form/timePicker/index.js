import './index.scss';

export default {
  name: 'timePicker',
  data() {
    return {
      obj: {
        value: '',
        value1: '',
        minTime: '',
        MaxTime: '',
      },
      option: {
        labelWidth: '150px',
        column: [
          {
            children: [
              {
                itemLabel: '基础： ',
                type: 'timePicker',
                model: 'value',
                placeholder: '选择时间'
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '自定义时间： ',
                type: 'timePicker',
                model: 'value1',
                eleType: 'timePicker',
                placeholder: '选择时间'
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '任意时间范围： ',
                type: 'timePicker',
                model: 'minTime&MaxTime',
                eleType: 'timePicker',
                isRange: true,
                rangeSeparator: '至',
                startPlaceholder: '开始时间',
                endPlaceholder: '结束时间',
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