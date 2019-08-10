<template>
  <div class="e-checkbox-demo">
    <h2 class="title_h2 is20">Checkbox 多选框</h2>
    <p>一组备选项中进行多选</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="basics.obj" :option="basics.option"></evue-form>
      </div>
    </div>

    <h3 class="title_h3">禁用状态</h3>
    <p>多选框不可用的状态,或者已选不可修改的状态</p>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="disabled.obj" :option="disabled.option"></evue-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

