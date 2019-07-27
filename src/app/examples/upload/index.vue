<template>
  <div class="e-input-demo">

    <h2 class="title_h2 is20">upload 上传框</h2>

    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">

        <evue-form v-model="obj" :option="option"
                   @upload-filesAdded="uploadFilesAdded"
                   @upload-beforeUpload="uploadBeforeUpload"
                   @upload-uploadProgress="uploadUploadProgress"
                   @upload-fileUploaded="uploadFileUploaded"
        >
          <template v-slot:myUpLoad>
            <p>我是自定义的Dom,这里你想写啥都行。</p>
          </template>
        </evue-form>

      </div>
    </div>

  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>

