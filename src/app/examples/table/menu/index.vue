<template>
  <div class="e-table-menu">

    <h2 class="title_h2 is20">menu 自定义按钮</h2>
    <p>menu属性的使用</p>

    <h3 class="title_h3">基础</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <p>
          <el-checkbox v-model="option.isMenu">显示操作栏</el-checkbox>
        </p>
        <evue-table :data="list" :option="option">
          <template v-slot:menu="props">
            <el-button size="mini">名字：{{props.data.name}}</el-button>
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

