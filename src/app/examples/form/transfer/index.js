import './index.scss';

export default {
  name: 'transfer',
  data() {
    return {
      obj: {
        value: [1, 2],
        value1: [],
      },
      option: {
        column: [
          {
            children: [
              {
                itemLabel: '基础： ',
                type: 'transfer',
                model: 'value',
                list: (() => {
                  const data = [];
                  for (let i = 1; i <= 10; i++) {
                    data.push({
                      key: i,
                      label: `事件 - ${ i }`,
                      disabled: i % 4 === 0
                    });
                  }
                  return data;
                })(),
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '可搜索：',
                type: 'transfer',
                model: 'value1',
                filterable: true,
                list: (() => {
                  const data = [];
                  for (let i = 1; i <= 10; i++) {
                    data.push({
                      key: i,
                      label: `事件 - ${ i }`,
                      disabled: i % 4 === 0
                    });
                  }
                  return data;
                })(),
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