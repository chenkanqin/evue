<template>
  <div class="e-table-isSelection">

    <h2 class="title_h2 is20">isSelection 显示多选</h2>
    <p>更多的用户可以参考element-ui 的table组件</p>

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

