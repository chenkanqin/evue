import './index.scss';

export default {
  name: 'colorPicker',
  data() {
    return {
      obj: {
        value: '#409EFF',
        value1: null,
        value2: 'rgba(19, 206, 102, 0.8)',
        value3: '#ff7a5a',
        value4: '#60c6ff',
      },
      option: {
        column: [
          {
            children: [
              {
                itemLabel: '有默认值：',
                type: 'colorPicker',
                model: 'value',
              }
            ]
          },
          {
            children: [
              {
                itemLabel: '没默认值：',
                type: 'colorPicker',
                model: 'value1',
              }
            ]
          },
          {
            children: [
              {
                itemLabel: '选择透明度：',
                type: 'colorPicker',
                model: 'value2',
                showAlpha: true,
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '预定义颜色：',
                type: 'colorPicker',
                model: 'value3',
                showAlpha: true,
                predefine: [
                  '#82c9ff',
                  '#a9ffcd',
                  '#ff8e63',
                  '#f6626e',
                  '#c25fd1',
                  '#4444ff',
                  '#bfc1c7',
                  'rgba(255, 69, 0, 0.68)',
                  'rgb(255, 120, 0)',
                  'hsv(51, 100, 98)',
                  'hsva(120, 40, 94, 0.5)',
                  'hsl(181, 100%, 37%)',
                  'hsla(209, 100%, 56%, 0.73)',
                  '#c7158577'
                ],
              }
            ]
          },
          {
            children: [
              {
                itemLabel: '不同尺寸：',
                type: 'colorPicker',
                model: 'value4',
                size: 'medium',
              },
              {
                type: 'colorPicker',
                model: 'value4',
                size: 'small',
              },
              {
                type: 'colorPicker',
                model: 'value4',
                size: 'mini',
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