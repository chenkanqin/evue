<template>
  <div class="e-start-demo">

    <h2 class="title_h2 is20">e-vue 的基本用法</h2>
    <p>更多的方法、属性请仔细查看文档以及各个组件</p>

    <h3 class="title_h3">模仿有赞商城后台： 客户查询</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form @submit="submit" v-model="basics.obj" :option="basics.option"></evue-form>
      </div>
    </div>

    <h3 class="title_h3">模仿有赞商城后台： 优惠券之新建满减优惠券</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form @submit="submit" v-model="coupon.obj" :option="coupon.option">

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

          <template v-slot:onlyUsers>
            <div>
              <el-button>选择客户身份</el-button>
            </div>
            <div>请指定客户身份</div>
          </template>


          <el-button size="small" @click="$message.error('你点击了取消按钮')" slot="menuBottom">取消</el-button>
        </evue-form>
      </div>
    </div>

  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

