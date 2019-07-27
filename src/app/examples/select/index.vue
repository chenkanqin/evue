<template>
  <div class="e-select-demo">
    <h2 class="title_h2 is20">Select 选择器</h2>
    <p>下拉选择器</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="obj" :option="option">
          <template v-slot:valueSlotName>
            <el-button style="display: inline-block;margin-left:10px;" type="text">刷新</el-button>
            <el-button style="display: inline-block" type="text">新建</el-button>
          </template>
        </evue-form>
      </div>
    </div>


  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

