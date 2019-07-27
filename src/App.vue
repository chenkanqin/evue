<template>
  <div id="app">
    <!-- @select="handleSelect"-->
    <div class="headerWrapper">
      <header class="header">
        <!--导航-->
        <h1>e-vue</h1>
        <el-menu v-if="$route.name"
                 :default-active="$route.name.includes(topMenu[activeIndex].includesKey) ? topMenu[activeIndex].key : String(1)"
                 class="el-menu-demo"
                 mode="horizontal">


          <el-menu-item @click="toRouter(route)" v-for="route in topMenu" :index="route.key"
                        :key="route.routerName">
            <template slot="title">{{route.title}}</template>
          </el-menu-item>
        </el-menu>
      </header>

    </div>
    <div class="page-container page-component">
      <router-view/>
      <el-backtop target=".page-container" :bottom="100">
        <div
                style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >
          UP
        </div>
      </el-backtop>
    </div>
  </div>
</template>
<script>
  import Index from './app.js';

  export default Index;
</script>
