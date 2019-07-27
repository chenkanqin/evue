import './index.scss';

export default {
  name: 'e-upload',
  data() {
    return {
      obj: {},
      option: {
        labelWidth: '150px',
        column: [
          {
            children: [
              {
                type: 'upload',
                itemLabel: '默认：',
              },
            ],
          },
          {
            children: [
              {
                type: 'upload',
                itemLabel: '限制数量：',
                upMaxLength: 2,
              },
            ],
          },
          {
            children: [
              {
                type: 'upload',
                itemLabel: '限制数量类型：',
                mimeTypes: [
                  {title: "Image files", extensions: 'gif,jpeg,jpg,png,bmp'}
                ],
              },
            ],
          },
          {
            children: [
              {
                type: 'upload',
                model: 'name',
                itemLabel: '卡片并可拖拽：',
                isDrop: true,
                isCard: true,
              },
            ],
          },
          {
            children: [
              {
                type: 'upload',
                model: 'name',
                itemLabel: '自定义插槽类型：',
                slotName: 'myUpLoad'
              },
            ],
          },
        ]
      }
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    /**添加了文件*/
    uploadFilesAdded(res) {
      console.log('添加了文件==', res);
    },
    /**上传之前*/
    uploadBeforeUpload(res) {
      console.log('上传之前==', res);
    },
    uploadUploadProgress(res) {
      console.log('uploadUploadProgress', res)
    },
    uploadFileUploaded(res) {
      console.log('uploadFileUploaded', res)
    },
  },
}