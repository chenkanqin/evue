<template>
  <!--上传文件-->
  <div class="e-vue-upload" v-if="option">

    <slot name="addPre"></slot>
    <div class="e-vue-upload-box">
      <div :id="browseButton">
        <div v-if="option.slotName">
          <slot :name="option.slotName"></slot>
        </div>
        <!--
        上传类型
        默认按钮
        isCard 是否為卡片类型
        -->
        <div v-else>

          <div class="e-vue-card" v-if="option.isCard">
            <i class="el-icon-plus"></i>
          </div>

          <el-button
                  v-else
                  :size="option.buttonOption&&option.buttonOption.size"
                  :type="option.buttonOption&&option.buttonOption.type"
                  :plain="option.buttonOption&&option.buttonOption.plain"
                  :round="option.buttonOption&&option.buttonOption.round"
                  :circle="option.buttonOption&&option.buttonOption.circle"
                  :loading="option.buttonOption&&option.buttonOption.loading"
                  :icon="option.buttonOption&&option.buttonOption.icon"
                  :style="option.buttonOption&&option.buttonOption.style"
          >{{option.uploadTitle || '上传图片'}}
          </el-button>

        </div>
      </div>
    </div>
    <slot name="addEnd"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
