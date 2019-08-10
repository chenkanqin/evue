<template>
  <div class="e-table-isExpand">

    <h2 class="title_h2 is20">showSummary 统计</h2>
    <p>统计的使用请查看文档或者参考element-ui</p>

    <h3 class="title_h3">基础</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">

        <evue-table :data=content.list" :option="content.option"></evue-table>

      </div>
    </div>

  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

