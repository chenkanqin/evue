<template>
  <div class="e-table-pagination">

    <h2 class="title_h2 is20">分页</h2>
    <p>只有在isPagination = true情况下有效</p>

    <h3 class="title_h3">基础</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">

        <evue-table :data="list" :option="option">
          <template v-slot:slotPagination>
            <el-button size="mini">下架</el-button>
            <el-button size="mini">删除</el-button>
            <el-button size="mini">隐藏</el-button>
            <el-button size="mini">批量设置</el-button>
          </template>
        </evue-table>

      </div>
    </div>

  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

