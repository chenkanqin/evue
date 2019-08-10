<template>
  <div class="e-table-header">

    <h2 class="title_h2 is20">slotHeader 自定义头部</h2>
    <p>除了头部，还有内容都可以自定义任何内容</p>

    <h3 class="title_h3">基础</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <p>
          <el-checkbox v-model="option.showHeader">显示头部</el-checkbox>
        </p>
        <evue-table :data="list" :option="option">
          <template v-slot:theName>
            <span class="the-name">我是自定义头部</span>
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

