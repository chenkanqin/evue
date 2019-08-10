<template>
  <div class="e-table-start">

    <h2 class="title_h2 is20">evue-table 的基本用法</h2>
    <p>更多的方法、属性请仔细查看文档以及各个组件</p>

    <h3 class="title_h3">模仿有赞商城后台： 商品管理</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">

        <evue-table :data="list" :option="option" @selectionChange="selectionChange"
                    @handleEdit="$message.success('点击了编辑')" @handleDelete="$message.success('点击了删除')">

          <template v-slot:goodsName="props">
            <div class="goods">
              <img :src="props.data.img" alt="">
              <div class="goodsName">
                <p>{{props.data.goodsName}}</p>
                <span>{{props.data.price}}</span>
              </div>
            </div>
          </template>

          <template v-slot:comeNum="props">
            <p>访客数:{{props.data.viewNum}}</p>
            <p>浏览量:{{props.data.comeNum}}</p>
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

