<template>
  <div class="pagination">
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="current"
            :page-sizes="pageSizes"
            :page-size="size"
            :hide-on-single-page="hideOnSinglePage"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
  </div>
</template>
<script>
  import index from './index.js';

  export default index;
</script>
