<template>
  <div>
    <div class="page-component_nav">
      <!--<div class="logo">-->
      <!--e-vue-->
      <!--</div>-->
      <el-menu
              :default-active="$route.name"
      >
        <el-menu-item @click="toRouter(route)" v-for="route in routes" :index="route.routerName"
                      :key="route.routerName">
          <span slot="title">{{route.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="page-component_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

