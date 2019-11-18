<template>
  <div class="e-slider-demo">
    <h2 class="title_h2 is20">Slider 滑块</h2>
    <p>通过拖动滑块选择区间</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="basics.obj" :option="basics.option"></evue-form>
      </div>
    </div>

    <h3 class="title_h3">范围选择、展示标记</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="range.obj" :option="range.option"></evue-form>
      </div>
    </div>


  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>