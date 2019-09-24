<template>
  <!--一组备选项中进行多选-->
  <div v-if="option"
       :class="['e-checkbox',{slotNameFormData:option.slotNameFormData&&option.slotNameFormData.length},{isBlock:option.isBlock}]">
    <eAddPreEnd :addPre="true" :option="option"></eAddPreEnd>

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
              :class="{hasSlotName:item.slotName}"
      >
        {{option.defaultProps ? item[option.defaultProps.label]: item.label}}
        <div style="margin-top: 10px;margin-bottom: 10px;vertical-align: top" v-if="item.slotName">
          <template>
            <slot :name="item.slotName"></slot>
          </template>
        </div>

        <div v-if="item.children&&item.children.length" class="e-vue-inline">
          <div class="e-vue-inline" style="margin-bottom: 10px;"
               v-for="(checkboxChildItem,radioChildIndex) in item.children"
               :key="radioChildIndex"
          >
            <div
                    :is="componentLists.find(x=>x.type === checkboxChildItem.type) ? componentLists.find(x=>x.type === checkboxChildItem.type) .routerPath : ''"
                    :option="checkboxChildItem"
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
                 <span v-if="checkboxChildItem.addPre" :class="checkboxChildItem.addPreClass"
                       :style="checkboxChildItem.addPreStyle">{{checkboxChildItem.addPre}}</span>
              </template>
              <!--前面追加文本-->
              <!--
                 后面追加文本
                 addPreClass 添加class
                 addPreStyle 添加style
                 addPre 添加文本
              -->
              <template slot="addEnd">
                 <span v-if="checkboxChildItem.addEnd" :class="checkboxChildItem.addEndClass"
                       :style="checkboxChildItem.addEndStyle">{{checkboxChildItem.addEnd}}</span>
              </template>
              <!--end 后面追加文本-->
              <!--自定义slot-->
              <template :slot="checkboxChildItem.slotName">
                <slot :name="checkboxChildItem.slotName"></slot>
              </template>
              <!--end自定义slot-->
              <!--判断是否含有data.length-->
              <template :slot="slotNameFormDataItem.slotName"
                        v-for="slotNameFormDataItem in checkboxChildItem.slotNameFormData">
                <slot :name="slotNameFormDataItem.slotName"></slot>
              </template>
            </div>
          </div>
        </div>

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


    <eAddPreEnd :addEnd="true" :option="option"></eAddPreEnd>
    <slot :name="option.slotName"></slot>
    <e-desc :option="option"></e-desc>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
