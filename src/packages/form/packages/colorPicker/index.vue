<template>
  <!--用于颜色选择，支持多种格式。-->
  <div class="e-colorPicker" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

    <el-color-picker
            v-model="obj[option.model]"
            :disabled="option.disabled"
            :size="option.size"
            :show-alpha="option.showAlpha"
            :color-format="option.colorFormat"
            :popper-class="option.popperClass"
            :predefine="option.predefine"
            :style="option.style"
            @change="change"
            @active-change="activeChange"
    ></el-color-picker>

    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
