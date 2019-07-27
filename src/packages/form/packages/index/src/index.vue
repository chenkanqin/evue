<template>
  <div class="e-vue-form" v-if="option">

    <el-form
            :data-ref="refDom"
            :ref="refDom"
            :model="obj"
            :label-width="option.labelWidth ? String(option.labelWidth) : 'auto'"
            :disabled="option.disabled"
            :label-position="option.labelPosition"
            :size="option.size || 'small'"
            :label-suffix="option.labelSuffix"
            :hide-required-asterisk="option.hideRequiredAsterisk"
            :inline-message="option.inlineMessage"
            :status-icon="option.statusIcon"
    >
      <el-row
              :gutter="option.gutter"
              :type="option.rowType"
              :justify="option.justify || 'start'"
              :align="option.align || 'top'"
      >
        <!--      :md="option.md || item.md"
                :lg="option.lg || item.lg"
                :sm="option.sm || item.sm"
                :xl="option.xl || item.xl"-->
        <el-col
                v-for="(item,index) in option.column"
                :key="index"
                :push="option.push || item.push"
                :pull="option.pull || item.pull"
                :tag="option.tag || item.tag"
                :offset="option.offset || item.offset"
                :xs="option.xs || item.xs || 24"
                :span="item.span?item.span>=24?24:item.span:24"
        >
          <div class="evue-form-title" v-if="item.title">{{item.title}}</div>
          <!--判断是否含有children-->
          <div v-if="item.children&&item.children.length" class="e-vue-childen">
            <el-form-item
                    :class="{'e-vue-must':childItem.must}"
                    :style="childItem.itemStyle"
                    :label="childItem.itemLabel || ''"
                    :prop="childItem.itemProp?childItem.itemProp:childItem.model"
                    :rules="childItem.itemRules"
                    :size="childItem.itemSize"
                    :label-width="option.labelWidth && childItem.itemLabel  ? option.labelWidth : childItem.labelWidth && childItem.itemLabel ? childItem.labelWidth : childItem.itemLabel ? '100px' : 'auto'"
                    v-for="(childItem,childIndex) in item.children" :key="childIndex"
            >
              <div
                      :is="componentLists.find(x=>x.type === childItem.type) ? componentLists.find(x=>x.type === childItem.type) .routerPath : ''"
                      :option="childItem"
                      v-model="obj"
                      :currentIndex="index"
                      @upload-filesAdded="uploadFilesAdded"
                      @upload-beforeUpload="uploadBeforeUpload"
                      @upload-uploadProgress="uploadUploadProgress"
                      @upload-fileUploaded="uploadFileUploaded"
                      @upload-error="uploadError"
              >

                <!--
                  前面追加文本
                  addPreClass 添加class
                   addPreStyle 添加style
                   addPre 添加文本
                 -->
                <template slot="addPre">
                   <span v-if="childItem.addPre" :class="childItem.addPreClass"
                         :style="childItem.addPreStyle">{{childItem.addPre}}</span>
                </template>
                <!--前面追加文本-->
                <!--
                   后面追加文本
                   addPreClass 添加class
                   addPreStyle 添加style
                   addPre 添加文本
                -->
                <template slot="addEnd">
                   <span v-if="childItem.addEnd" :class="childItem.addEndClass"
                         :style="childItem.addEndStyle">{{childItem.addEnd}}</span>
                </template>
                <!--end 后面追加文本-->
                <!--自定义slot-->
                <template :slot="childItem.slotName">
                  <slot :name="childItem.slotName"></slot>
                </template>
                <!--end自定义slot-->
                <!--判断是否含有data.length-->

                <template :slot="slotNameFormDataItem.slotName"
                          v-for="slotNameFormDataItem in childItem.slotNameFormData">
                  <slot :name="slotNameFormDataItem.slotName"></slot>
                </template>

                <!--input的特殊梳理-->
                <template :slot="childItem.prependSlot">
                  <slot :name="childItem.prependSlot"></slot>
                </template>
                <template :slot="childItem.appendSlot">
                  <slot :name="childItem.appendSlot"></slot>
                </template>
                <!--end input的特殊梳理-->
              </div>
            </el-form-item>
          </div>
          <slot :name="item.slotName"></slot>
        </el-col>
        <!--v-show·="option.submitBtn && option.emptyBtn"-->
        <el-col :span="24" :style="{'text-align': option.menuAlign}">
          <div class="e-vue-form-menu">
            <el-button :type="option.submitType" v-if="option.submitBtn" @click="submitBtn"
                       :size=" option.submitSize || option.size  || 'small'">
              {{option.submitTxt ||
              '保存'}}
            </el-button>
            <el-button :type="option.emptyType" v-if="option.emptyBtn" @click="emptyBtn"
                       :size="option.emptySize || option.size  || 'small'">
              {{option.emptyTxt ||
              '清空'}}
            </el-button>
            <slot name="menuBottom"></slot>
          </div>
        </el-col>

      </el-row>
    </el-form>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
