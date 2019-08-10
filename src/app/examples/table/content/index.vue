<template>
  <div class="e-table-content">

    <h2 class="title_h2 is20">slotName 自定义内容</h2>
    <p>除了头部，还有内容都可以自定义任何内容</p>

    <h3 class="title_h3">基础</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-table :data="list" :option="option">
          <template v-slot:theName="props">
            <span class="the-name">我的名字叫：{{props.data.name}}</span>
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

