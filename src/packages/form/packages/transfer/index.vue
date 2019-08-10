<template>
  <!--Transfer 穿梭框-->
  <div class="e-transfer" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

    <el-transfer
            v-model="obj[option.model]"
            :data="option.list"
            :filterable="option.filterable"
            :filter-placeholder="option.filterPlaceholder"
            :filter-method="option.filterMethod"
            :target-order="option.targetOrder"
            :titles="option.titles"
            :button-texts="option.buttonTexts"
            :render-content="option.renderContent"
            :format="option.format"
            :left-default-checked="option.leftDefaultChecked"
            :right-default-checked="option.rightDefaultChecked"
            :style="option.style"
            @change="change"
            @left-check-change="leftCheckChange"
            @right-check-change="rightCheckChange"
    >
    </el-transfer>

    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
