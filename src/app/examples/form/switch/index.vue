<template>
  <div class="e-switch-demo">
    <h2 class="title_h2 is20">Switch 开关</h2>
    <p>表示两种态间的切换，多用于触发「开/关」</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="basics.obj" :option="basics.option"></evue-form>
      </div>
    </div>

    <h3 class="title_h3">文字描述、扩展的 value 类型、禁用状态</h3>
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

