<template>
  <div class="e-vue-form" v-if="option">

    <el-form
            ref="eVueForm"
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
                :xs="24"
                :sm="24"
                :lg="item.span?item.span>=24?24:item.span:24"
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
                      :is="componentLists.find(x=>x.type === childItem.type) ? componentLists.find(x=>x.type === childItem.type).routerPath : childItem.slotName?specialComponent:''"
                      :option="childItem"
                      v-model="obj"
                      :currentIndex="index"
                      :isStartResetFields="isStartResetFields"
                      @upload-filesAdded="uploadFilesAdded"
                      @upload-beforeUpload="uploadBeforeUpload"
                      @upload-uploadProgress="uploadUploadProgress"
                      @upload-fileUploaded="uploadFileUploaded"
                      @upload-error="uploadError"
                      @evueUploader="evueUploader"
              >
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
              <slot :name="childItem.slotName"></slot>
            </el-form-item>
          </div>
          <slot :name="item.slotName"></slot>
        </el-col>
        <!--v-show·="option.submitBtn && option.emptyBtn"-->
        <el-col :span="24" :style="{'text-align': option.menuAlign}">
          <div class="e-vue-form-menu">
            <el-button :type="option.submitType" v-if="option.submitBtn" @click="submit"
                       :size=" option.submitSize || option.size  || 'small'">
              {{option.submitTxt ||
              '保存'}}
            </el-button>
            <el-button :type="option.emptyType" v-if="option.emptyBtn" @click="empty"
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
