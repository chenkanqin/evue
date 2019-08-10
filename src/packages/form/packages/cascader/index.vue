<template>
  <!--级联选择器-->
  <div class="e-cascader" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>
    <el-cascader
            v-model="obj[option.model]"
            :options="option.list"
            :size="option.size"
            :disabled="option.disabled"
            :props="option.props"
            :placeholder="option.placeholder"
            :clearable="option.clearable"
            :show-all-levels="option.showAllLevels"
            :collapse-tags="option.collapseTags"
            :separator="option.separator"
            :filterable="option.filterable"
            :filter-method="option.filterMethod"
            :debounce="option.debounce"
            :before-filter="option.beforeFilter"
            :popper-class="option.popperClass"
            :style="option.style"
            @change="change"
            @blur="blur"
            @focus="focus"
            @expand-change="expandChange"
            @visible-change="visibleChange"
            @remove-tag="removeTag"
    >
    </el-cascader>
    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
