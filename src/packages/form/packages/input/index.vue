<template>
  <!--通过鼠标或键盘输入字符-->
  <div class="e-input" v-if="option">
    <slot name="addPre"></slot>
    <el-input
            v-model="obj[option.model]"
            :disabled="option.disabled"
            :clearable="option.clearable"
            :show-password="option.showPassword"
            :type="option.eleType||'text'"
            :suffix-icon="option.suffixIcon"
            :prefix-icon="option.prefixIcon"
            :show-word-limit="option.showWordLimit"
            :minlength="option.minLength"
            :maxlength="option.maxLength"
            :placeholder="option.placeholder"
            :size="option.size"
            :rows="option.rows"
            :max="option.max"
            :min="option.min"
            :tabindex="option.tabindex"
            :autosize="option.autosize"
            :autocomplete="option.autocomplete"
            :autofocus="option.autofocus"
            :resize="option.resize"
            :style="option.style"
            @change="change"
            @blur="blur"
            @focus="focus"
            @clear="clear"
    >
      <template slot="prepend" v-if="option.prepend || option.prependSlot">
        <div v-html="option.prepend"></div>
        <slot :name="option.prependSlot"></slot>
      </template>
      <template v-if="option.append || option.appendSlot" slot="append">
        <div v-html="option.append"></div>
        <slot :name="option.appendSlot"></slot>
      </template>
      <template slot="suffix" v-if="option.suffix">
        <div v-html="option.suffix"></div>
      </template>
      <template slot="prefix" v-if="option.prefix">
        <div v-html="option.prefix"></div>
      </template>

    </el-input>
    <slot name="addEnd"></slot>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
