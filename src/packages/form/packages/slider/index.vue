<template>
  <!--通过拖动滑块在一个固定区间内进行选择-->
  <div class="e-slider" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

    <el-slider
            v-model="obj[option.model]"
            :disabled="option.disabled"
            :min="option.min"
            :max="option.max"
            :step="option.step || 1"
            :show-input="option.showInput"
            :show-input-controls="option.showInputControls"
            :input-size="option.inputSize || 'small'"
            :show-stops="option.showStops"
            :show-tooltip="option.showTooltip"
            :format-tooltip="option.formatTooltip"
            :range="option.range"
            :vertical="option.vertical"
            :height="option.height"
            :label="option.label"
            :debounce="option.debounce || 300"
            :tooltip-class="option.tooltipClass"
            :marks="option.marks"
            :style="option.style"
            @change="change"
            @input="input"
    >

    </el-slider>

    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
