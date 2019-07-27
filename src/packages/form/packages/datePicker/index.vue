<template>
  <!--在同一个选择器里选择日期和时间。-->
  <div class="e-datePicker" v-if="option">
    <slot name="addPre"></slot>
    <el-date-picker
            v-model="timeVal"
            :disabled="option.disabled"
            :readonly="option.readonly"
            :editable="option.editable"
            :clearable="option.clearable"
            :size="option.size"
            :type="option.eleType || 'date'"
            :placeholder="option.placeholder"
            :align="option.align"
            :popper-class="option.popperClass"
            :start-placeholder="option.startPlaceholder"
            :end-placeholder="option.endPlaceholder"
            :picker-options="option.pickerOptions"
            :range-separator="option.rangeSeparator"
            :valuevue-format="option.valueFormat || 'yyyy/MM/dd  HH:mm:ss'"
            :format="option.format || 'yyyy/MM/dd  HH:mm:ss'"
            :default-value="option.defaultValue"
            :default-time="option.defaultTime"
            :unlink-panels="option.unlinkPanels"
            :prefix-icon="option.prefixIcon"
            :clear-icon="option.clearIcon"
            :style="option.style"
            @change="change"
            @blur="blur"
            @focus="focus">
    </el-date-picker>

    <slot name="addEnd"></slot>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
