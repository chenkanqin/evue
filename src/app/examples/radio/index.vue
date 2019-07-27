<template>
  <div class="e-radio-demo">
    <h2 class="title_h2 is20">Radio 单选框</h2>
    <p>在一组备选项中进行单选</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="basics.model" :option="basics.option"></evue-form>
      </div>
    </div>

    <h3 class="title_h3">禁用状态</h3>
    <p>单选框不可用的状态,或者已选不可修改的状态</p>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="disabled.model" :option="disabled.option"></evue-form>
      </div>
    </div>


    <h3 class="title_h3">综合状态</h3>
    <p>每个选择下面可能还会含有子选项，需用到slot</p>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="model" :option="option" ref="source">
          <template v-slot:onlyGoods>
            <div>
              <el-button>选择商品</el-button>
            </div>
            <div>指定商品可用</div>
          </template>

          <template v-slot:onlyGoodsNoUse>
            <div>
              <el-button>选择商品</el-button>
            </div>
            <div>指定商品不可用</div>
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

