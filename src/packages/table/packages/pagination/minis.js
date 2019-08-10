/**分页的公共属性以及方法*/
export const paginationMinis = {
  name: 'pagination-minis',
  props: {},
  data() {
    return {
      paginationOption: {
        current: 1,
        size: 20,
        total: 0,
      },
    };
  },
  watch: {},
  mounted() {
  },
  methods: {
    dealRequestData() {

    },
  },
};