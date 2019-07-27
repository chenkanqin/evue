<template>
  <!--在一组备选项中进行单选-->
  <div class="e-radio" v-if="option&&option.data.length">
    <div :class="{'e-vue-inline':option.inline}" v-for="(radioItem,radioIndex) in option.data"
         :key="radioIndex"
         :style="option.style"
    >
      <slot name="addPre"></slot>
      <el-radio
              :size="option.size"
              :disabled="option.disabled || radioItem.disabled"
              v-model="obj[option.model]"
              :label="radioItem.value"
              @change="radioChange"
      >
        {{option.defaultProps ? radioItem[option.defaultProps.label]: radioItem.label || ''}}
        <div v-if="radioItem.children&&radioItem.children.length" class="e-vue-inline">
          <div class="e-vue-inline"
               v-for="(radioChildItem,radioChildIndex) in radioItem.children"
               :key="radioChildIndex"
          >
            <div
                    :is="componentLists.find(x=>x.type === radioChildItem.type) ? componentLists.find(x=>x.type === radioChildItem.type) .routerPath : ''"
                    :option="radioChildItem"
                    v-model="obj"
                    :currentIndex="radioChildIndex"
            >
              <!--
                  前面追加文本
                  addPreClass 添加class
                   addPreStyle 添加style
                   addPre 添加文本
                 -->
              <template slot="addPre">
                 <span v-if="radioChildItem.addPre" :class="radioChildItem.addPreClass"
                       :style="radioChildItem.addPreStyle">{{radioChildItem.addPre}}</span>
              </template>
              <!--前面追加文本-->
              <!--
                 后面追加文本
                 addPreClass 添加class
                 addPreStyle 添加style
                 addPre 添加文本
              -->
              <template slot="addEnd">
                 <span v-if="radioChildItem.addEnd" :class="radioChildItem.addEndClass"
                       :style="radioChildItem.addEndStyle">{{radioChildItem.addEnd}}</span>
              </template>
              <!--end 后面追加文本-->
              <!--自定义slot-->
              <template :slot="radioChildItem.slotName">
                <slot :name="radioChildItem.slotName"></slot>
              </template>
              <!--end自定义slot-->
              <!--判断是否含有data.length-->

              <template :slot="slotNameFormDataItem.slotName"
                        v-for="slotNameFormDataItem in radioChildItem.slotNameFormData">
                <slot :name="slotNameFormDataItem.slotName"></slot>
              </template>
            </div>
          </div>
        </div>
      </el-radio>
      <slot name="addEnd"></slot>
      <slot :name="option.slotName"></slot>
      <slot v-if="obj[option.model] === radioItem.value" :name="radioItem.slotName"></slot>
    </div>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
