<template>
  <!--表示两种相互对立的状态间的切换，多用于触发「开/关」-->
  <div class="e-switch" v-if="option">
    <slot name="addPre"></slot>
    <el-switch
            v-model="obj[option.model]"
            :disabled="option.disabled"
            :active-icon-class="option.activeIconClass"
            :inactive-icon-class="option.inactiveIconClass"
            :active-text="option.activeText"
            :inactive-text="option.inactiveText"
            :active-value="option.activeValue || true"
            :active-color="option.activeColor || '#409EFF'"
            :inactive-color="option.inactiveColor || '#C0CCDA'"
            :inactive-value="option.inactiveValue"
            :width="option.width || 40"
            :name="option.name"
            :style="option.style"
            :validate-event="option.validateEvent"
            @change="change"
    >
    </el-switch>
    <slot name="addEnd"></slot>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
