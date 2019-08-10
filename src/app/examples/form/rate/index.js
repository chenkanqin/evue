import './index.scss';

export default {
  name: 'rate',
  data() {
    return {
      obj: {
        value: 2,
        value1: 3,
        value2: 4,
      },
      option: {
        column: [
          {
            children: [
              {
                itemLabel: '默认： ',
                type: 'rate',
                model: 'value',
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '区分颜色：',
                type: 'rate',
                model: 'value1',
                colors: ['#a3bfbe', '#f7bc3c', '#ff8a65']
              },
            ]
          },
          {
            children: [
              {
                itemLabel: '区分颜色：',
                type: 'rate',
                model: 'value2',
                showText: true,
                colors: ['#a3bfbe', '#f7bc3c', '#ff8a65']
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