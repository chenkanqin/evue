<template>
  <div class="home">
    <div class="banner">
      <div class="banner-desc">
        <img src="@/assets/home.png" class="home-logo" alt="">
        <h1>数据驱动视图工具</h1>
        <p>模仿有赞商城后台，二次封装Element的form组件，数据驱动视图，提高工作效率。</p>
        <p style="color: #679fce;font-size: 14px;"><i style="color:#f07178;margin-right: 10px;font-size: 20px;"
                                                      class="el-icon-check"></i>第二期将上线的功能：table组件</p>
        <p style="color: #679fce;font-size: 14px;">第三期将上线的功能：比较全面的微页面组件</p>
        <a href="/#/form/start" class="nav-link action-button">快速上手 →</a>
        <a href="http://www.evue.top/" style="margin-left: 10px;" class="nav-link action-button">文档阅读 →</a>
      </div>
    </div>
    <div class="items">
      <el-row>
        <el-col :span="8">
          <h2>丰富功能</h2>
          <p>提炼了典型的业务模型，提供了丰富的功能组件</p>
        </el-col>
        <el-col :span="8">
          <h2>最佳实践</h2>
          <p>合理的封装，助你持续产出高质量代码</p>
        </el-col>
        <el-col :span="8">
          <h2>贴合需求</h2>
          <p>更加贴合业务逻辑需求，更快得完成项目</p>
        </el-col>
      </el-row>
    </div>
    <footer>
      <p>友链：<a href="https://www.ifnav.com/">ifnav</a></p>
      Copyright © 2019 evue.top
    </footer>
  </div>

</template>

<script>
  import Index from './index';

  export default Index;
</script>