<template>
  <!--评分组件-->
  <div class="e-rate" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

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

    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
