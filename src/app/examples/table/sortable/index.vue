<template>
  <div class="e-table-sortable">

    <h2 class="title_h2 is20">排序</h2>
    <p>排序的使用请查看文档或者参考element-ui</p>

    <h3 class="title_h3">基础</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-table :data="list" :option="option"></evue-table>
      </div>
    </div>

  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

