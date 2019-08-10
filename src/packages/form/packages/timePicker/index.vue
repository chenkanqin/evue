<template>
  <!--用于选择或输入日期。-->
  <div class="e-timePicker" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

    <!--obj[option.model]-->
    <el-time-picker
            v-if="option.eleType === 'timePicker'"
            v-model="timeVal"
            :disabled="option.disabled"
            :readonly="option.readonly"
            :editable="option.editable"
            :clearable="option.clearable"
            :size="option.size"
            :placeholder="option.placeholder"
            :start-placeholder="option.startPlaceholder"
            :end-placeholder="option.endPlaceholder"
            :is-range="option.isRange"
            :arrow-control="option.arrowControl"
            :align="option.align"
            :popper-class="option.popperClass"
            :picker-options="option.pickerOptions"
            :range-separator="option.rangeSeparator"
            :value-format="option.valueFormat || 'yyyy/MM/dd  HH:mm:ss'"
            :default-value="option.defaultValue"
            :prefix-icon="option.prefixIcon"
            :clear-icon="option.clearIcon"
            :style="option.style"
            @change="change"
            @blur="blur"
            @focus="focus"
    >
    </el-time-picker>

    <el-time-select
            v-else
            v-model="timeVal"
            :disabled="option.disabled"
            :readonly="option.readonly"
            :editable="option.editable"
            :clearable="option.clearable"
            :size="option.size"
            :placeholder="option.placeholder"
            :start-placeholder="option.startPlaceholder"
            :end-placeholder="option.endPlaceholder"
            :is-range="option.isRange"
            :arrow-control="option.arrowControl"
            :align="option.align"
            :popper-class="option.popperClass"
            :picker-options="option.pickerOptions"
            :range-separator="option.rangeSeparator"
            :value-format="option.valueFormat || 'yyyy/MM/dd  HH:mm:ss'"
            :default-value="option.defaultValue"
            :prefix-icon="option.prefixIcon"
            :clear-icon="option.clearIcon"
            @change="change"
            @blur="blur"
            @focus="focus"
    >
    </el-time-select>


    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
