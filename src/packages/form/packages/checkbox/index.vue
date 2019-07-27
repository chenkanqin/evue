<template>
  <!--一组备选项中进行多选-->
  <div class="e-checkbox" v-if="option">
    <slot name="addPre"></slot>

    <!--el-checkbox-button-->
    <el-checkbox-group
            v-if="option.isGroup && option.isButton"
            v-model="obj[option.model]"
            :size="option.size"
            :disabled="option.disabled"
            :min="option.min"
            :max="option.max"
            :text-color="option.textColor"
            :fill="option.fill"
            :style="option.style"
            @change="change"
    >
      <el-checkbox-button v-for="(item,index) in option.data"
                          :label="option.defaultProps ? item[option.defaultProps.value]: item.value" :key="index"
      >
        {{option.defaultProps ? item[option.defaultProps.label]: item.label}}
      </el-checkbox-button>

    </el-checkbox-group>

    <!--el-checkbox-group-->
    <el-checkbox-group
            v-else-if="option.isGroup"
            v-model="obj[option.model]"
            :size="option.size"
            :disabled="option.disabled"
            :min="option.min"
            :max="option.max"
            :text-color="option.textColor"
            :fill="option.fill"
            @change="change"
    >
      <el-checkbox
              v-for="(item,index) in option.data"
              :label="option.defaultProps ? item[option.defaultProps.value]: item.value"
              :key="index"
              :disabled="item.disabled"
              :border="item.border"
              :size="item.size"
              :checked="item.checked"
              :indeterminate="item.indeterminate"
      >
        {{option.defaultProps ? item[option.defaultProps.label]: item.label}}
      </el-checkbox>
    </el-checkbox-group>

    <!--el-checkbox-->
    <el-checkbox
            v-else
            v-model="obj[option.model]"
            :true-label="option.trueLabel"
            :false-label="option.falseLabel"
            :disabled="option.disabled"
            :border="option.border"
            :size="option.size"
            :checked="option.checked"
            :indeterminate="option.indeterminate"
            @change="change"
    >{{option.label}}
    </el-checkbox>


    <slot name="addEnd"></slot>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
