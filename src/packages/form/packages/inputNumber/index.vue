<template>
  <!--仅允许输入标准的数字值，可定义范围-->
  <div class="e-input-number" v-if="option">
    <!--
      前面追加文本
      addPreClass 添加class
       addPreStyle 添加style
       addPre 添加文本
      -->
    <slot name="addPre"></slot>
    <!--前面追加文本-->
    <el-input-number
            v-model="obj[option.model]"
            :min="option.min||0"
            :max="option.max"
            :step="option.step||1"
            :step-strictly="option.stepStrictly"
            :precision="option.precision"
            :size="option.size"
            :disabled="option.disabled"
            :controls="option.controls"
            :controls-position="option.controlsPosition"
            :name="option.name"
            :label="option.label"
            :placeholder="option.placeholder"
            :style="option.style"
            @change="change"
            @blur="blur"
            @focus="focus"
    ></el-input-number>
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
