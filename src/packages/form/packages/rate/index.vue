<template>
  <!--评分组件-->
  <div class="e-rate" v-if="option">
    <!--
      前面追加文本
      addPreClass 添加class
       addPreStyle 添加style
       addPre 添加文本
      -->
    <slot name="addPre"></slot>
    <!--前面追加文本-->
    <el-rate
            v-model="obj[option.model]"
            :max="option.max || 5"
            :disabled="option.disabled"
            :allow-half="option.allowHalf"
            :low-threshold="option.lowThreshold"
            :high-threshold="option.highThreshold"
            :colors="option.colors"
            :void-color="option.voidColor"
            :disabled-void-color="option.disabledVoidColor"
            :icon-classes="option.iconClasses"
            :void-icon-class="option.voidIconClass"
            :disabled-void-icon-class="option.disabledVoidIconClass"
            :show-text="option.showText"
            :show-score="option.showScore"
            :text-color="option.textColor"
            :texts="option.texts"
            :style="option.style"
            :score-template="option.scoreTemplate"
            @change="change"
    ></el-rate>
    <!--
      后面追加文本
      addPreClass 添加class
      addPreStyle 添加style
      addPre 添加文本
  -->
    <slot name="addEnd"></slot>
    <!--end 后面追加文本-->
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
