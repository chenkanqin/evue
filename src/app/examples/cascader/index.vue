<template>
  <div class="e-cascader-demo">
    <h2 class="title_h2 is20">Cascader 级联选择器</h2>
    <p>级联选择器</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="obj" :option="option"></evue-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

