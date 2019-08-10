<template>
  <!--当选项过多时，使用下拉菜单展示并选择内容。-->
  <div class="e-select" v-if="option">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

    <el-select
            v-if="option.isGroup"
            v-model="obj[option.model]"
            :placeholder="option.placeholder"
            :multiple="option.multiple"
            :disabled="option.disabled"
            :value-key="option.valueKey"
            :size="option.size"
            :clearable="option.clearable"
            :collapse-tags="option.collapseTags"
            :multiple-limit="option.multipleLimit"
            :name="option.name"
            :autocomplete="option.autocomplete"
            :filterable="option.filterable"
            :allow-create="option.allowCreate"
            :filter-method="option.filterMethod"
            :remote="option.remote"
            :remote-method="option.remoteMethod"
            :loading="option.loading"
            :loading-text="option.loadingText"
            :no-match-text="option.noMatchText"
            :no-data-text="option.noDataText"
            :popper-class="option.popperClass"
            :reserve-keyword="option.reserveKeyword"
            :default-first-option="option.defaultFirstOption"
            :popper-append-to-body="option.popperAppendToBody"
            :automatic-dropdown="option.automaticDropdown"
            :style="option.style"
            @change="option.change?option.change:''"
            @blur="option.blur?option.blur:''"
            @focus="option.focus?option.focus:''"
            @clear="option.clear?option.clear:''"
            @visible-change="option.visibleChange?option.visibleChange:''"
            @remove-tag="option.removeTag?option.removeTag:''"
    >
      <el-option-group
              v-for="group in option.data"
              :key="option.defaultProps ? group[option.defaultProps.label]:group.label"
              :label="option.defaultProps ? group[option.defaultProps.label]:group.label">
        <el-option
                v-for="item in group.data"
                :key="option.defaultProps ? item[option.defaultProps.value] : item.value"
                :label="option.defaultProps ? item[option.defaultProps.label]:item.label"
                :value="option.defaultProps ? item[option.defaultProps.value] : item.value"
        >
          <div v-if="option.isSlot">
            <span class="e-select-slot-label">{{option.defaultProps ? item[option.defaultProps.label]: item.label}}</span>
            <span class="e-select-slot-key">{{option.defaultProps ? item.otherTxt || item[option.defaultProps.value] || item.otherTxt : item.otherTxt || item.value}}</span>
          </div>
        </el-option>

      </el-option-group>
    </el-select>

    <el-select
            v-else
            v-model="obj[option.model]"
            :placeholder="option.placeholder"
            :multiple="option.multiple"
            :disabled="option.disabled"
            :value-key="option.valueKey"
            :size="option.size"
            :clearable="option.clearable"
            :collapse-tags="option.collapseTags"
            :multiple-limit="option.multipleLimit"
            :name="option.name"
            :autocomplete="option.autocomplete"
            :filterable="option.filterable"
            :allow-create="option.allowCreate"
            :filter-method="option.filterMethod"
            :remote="option.remote"
            :remote-method="option.remoteMethod"
            :loading="option.loading"
            :loading-text="option.loadingText"
            :no-match-text="option.noMatchText"
            :no-data-text="option.noDataText"
            :popper-class="option.popperClass"
            :reserve-keyword="option.reserveKeyword"
            :default-first-option="option.defaultFirstOption"
            :popper-append-to-body="option.popperAppendToBody"
            :automatic-dropdown="option.automaticDropdown"
            @change="change"
            @blur="blur"
            @focus="focus"
            @clear="clear"
            @visible-change="visibleChange"
            @remove-tag="removeTag"
    >
      <el-option
              v-for="item in option.data"
              :key="option.defaultProps ? item[option.defaultProps.value] : item.value"
              :label="option.defaultProps ? item[option.defaultProps.label]:item.label"
              :value="option.defaultProps ? item[option.defaultProps.value] : item.value"
      >
        <div v-if="option.isSlot">
          <span class="e-select-slot-label">{{option.defaultProps ? item[option.defaultProps.label]: item.label}}</span>
          <span class="e-select-slot-key">{{option.defaultProps ? item.otherTxt || item[option.defaultProps.value]  : item.otherTxt || item.value}}</span>
        </div>
      </el-option>

    </el-select>

    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
