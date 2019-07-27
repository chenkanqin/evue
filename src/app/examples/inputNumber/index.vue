<template>
  <div class="e-inputNumber-demo">
    <h2 class="title_h2 is20">InputNumber 计数器</h2>
    <p>仅允许输入标准的数字值，可定义范围</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="basics.obj" :option="basics.option"></evue-form>
      </div>
    </div>

    <h3 class="title_h3">禁用状态、步数、严格步数、精度</h3>
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

