import './index.scss';

export default {
  name: 'table-index',
  data() {
    return {
      routes: [
        {
          title: '基础',
          routerName: 'table-start',
        },
        {
          title: '自定义头部',
          routerName: 'table-header',
        },
        {
          title: '自定义内容',
          routerName: 'table-content',
        },
        {
          title: '自定义按钮',
          routerName: 'table-menu',
        },
        {
          title: '序列号',
          routerName: 'table-isIndex',
        },
        {
          title: '排序',
          routerName: 'table-sortable',
        },
        {
          title: '多选',
          routerName: 'table-isSelection',
        },
        {
          title: '展开行',
          routerName: 'table-isExpand',
        },
        {
          title: '统计',
          routerName: 'table-showSummary',
        },
        {
          title: '分页',
          routerName: 'table-pagination',
        },
      ],
    }
  },
  watch: {},
  methods: {
    toRouter(val) {
      this.$router.push({
        name: val.routerName,
      })
    },
  },
  mounted() {
  },
}