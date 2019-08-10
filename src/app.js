import './index.scss';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      activeIndex: 0,
      topMenu: [
        {
          title: '首页',
          includesKey: 'home',
          key: '0',
          routerName: 'home',
        },
        {
          title: '表单',
          includesKey: 'form',
          key: '1',
          routerName: 'start',
          data: [
            {}
          ]
        },
        {
          title: '表格',
          includesKey: 'table',
          key: '2',
          routerName: 'table-start',
        },
      ],
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    toRouter(val) {
      this.$router.push({
        name: val.routerName,
      })
    },
  },
}