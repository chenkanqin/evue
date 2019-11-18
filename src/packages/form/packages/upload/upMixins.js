/**上传文件minis*/
import plupload from "plupload";

export const upFiles = {
  name: 'upload-mixins',
  props: {},
  data() {
    return {
      evueUploader: null,
      allFiles: [],
      percent: 0,//进度条
      endFiles: [], //上传之后的文件
      browseButton: 'browseButton',//上传按钮的ID
    };
  },
  watch: {},
  mounted() {
    this.browseButton = 'browseButton' + new Date().getTime();
    setTimeout(() => {
      this.initPlUploader();
    }, 1000);
  },
  methods: {
    /**重启evueUploader*/
    refreshUploader() {
      this.upIndex = 0;//当前上传的是第几张
      this.endFiles = []; //上传之后的文件
      if (this.evueUploader) {
        this.evueUploader.splice();
        this.evueUploader.refresh();
      }
      this.evueUploader = null;
    },
    /*初始化上传插件*/
    initPlUploader() {
      this.refreshUploader();
      /**重新定义uoloader配置*/
      let option = this.option;
      /**默认10M*/
      let max_file_size = Number(option.maxFileSize) || "10mb";
      let config = {
        runtimes: "html5,flash,silverlight,html4",
        browse_button: this.browseButton,
        url: option.apiUrl || '',
        filters: {
          max_file_size: max_file_size, //最大只能上传mb的文件
          prevent_duplicates: option.preventDuplicates || false //不允许选取重复文件
        },
        init: {
          /**
           * 选择完成后通知父级
           * code 0 有值 -1 超过图片限制
           * data -> this.allFiles
           * */
          FilesAdded: (up, files) => {
            //新增图片
            if (option.upMaxLength && files.length > option.upMaxLength) {
              plupload.each(files, (file) => {
                this.evueUploader.removeFile(file);
              });
              this.evueUploader.refresh();
              console.error('只能上传数量为：' + option.upMaxLength);

              this.$emit('upload-filesAdded', {
                code: -1,
                // allFiles: this.allFiles,
                msg: '只能上传数量为：' + option.upMaxLength,
                // uploader: this.evueUploader,
              });
              return;
            }
            this.allFiles = [];
            this.upIndex = 0;
            let num = 0;
            plupload.each(files, (file) => {
              num++;
              file.percent = 0;//文件的进度条
              this.allFiles.push(file);
              /*this.previewImage(file, res => {
//                console.log('图片预览，', res);
              });*/
              if (num === files.length) {
                /**通知父级*/
                let obj = {
                  code: 0,
                  allFiles: this.allFiles,
                };

                /**判断是否马上上传*/
                if (option.upFirstTime) {
                  this.startUp();
                } else {
                  obj['startUp'] = this.startUp;
                }
                this.$emit('upload-filesAdded', obj);
              }
            });
//            console.log('FilesAdded===', files);
          },
          /**上传之前*/
          BeforeUpload: (up, file) => {
            this.$emit('upload-beforeUpload', {
              fun: up,
              file: file,
              allFiles: this.allFiles,
              upIndex: this.upIndex,
            });
            this.upIndex++;
          },
          /**进度条*/
          UploadProgress: (up, file) => {
//            console.log('进度条==', up, file);
            this.$emit('upload-uploadProgress', {
              fun: up,
              file: file,
              allFiles: this.allFiles,
              upIndex: this.upIndex,
            });
          },
          FileUploaded: (up, file, info) => {
//            console.log('up, file, info==', up, file, info);

            //let $info = JSON.parse(info.response);
            ////console.log('up, file, info==', up, file, info);
            /*   if ($info) {
                 if (option.upMaxLength === 1) {
                   this.endFiles = [$info.data];
                 } else {
                   this.endFiles.push($info.data);
                 }
               }*/

            this.$emit('upload-fileUploaded', {
              fun: up,
              file: file,
              info: info,
              // endFiles: this.endFiles,
            });
          },
          Error: (up, err) => {
            this.$emit('upload-error', {
              fun: up,
              err: err,
            });
            up.removeFile(err.file.id);
          }
        }
      };
      /**是否需要拖动上传*/
      if (option.isDrop) {
        config['drop_element'] = this.browseButton;
      }
      /**
       * 配置上传类型
       * array
       * [{title: "Image files",extensions: 'gif,jpeg,jpg,png,bmp'}]
       * */
      if (option.mimeTypes) {
        config.filters['mime_types'] = option.mimeTypes;
      }

      this.evueUploader = new plupload.Uploader(config);
      this.evueUploader.init();
      this.$emit('evueUploader', this.evueUploader)
    },
    startUp() {
      if (!this.option.apiUrl) {
        console.error('请设置上传地址');
        return;
      }
      this.evueUploader.setOption({
        url: this.option.apiUrl,
        multipart_params: this.option.multipartParams || {}
      });
      this.evueUploader.start();
    },
    /**图片预览转化*/
    previewImage(file, callback) {//file为plupload事件监听函数参数中的file对象,callback为预览图片准备完成的回调函数
      if (!file || !/image\//.test(file.type)) return; //确保文件是图片

      if (file.type === 'image/gif') {//gif使用FileReader进行预览,因为mOxie.Image只支持jpg和png
        let fr = new plupload.mOxie.FileReader();
//        console.log(fr);
        fr.onload = function () {
          callback(fr.result);
          fr.destroy();
          fr = null;
        };
        fr.readAsDataURL(file.getSource());
      } else {
        let preloader = new plupload.mOxie.Image();
        preloader.onload = function () {
          preloader.downsize(300, 300);//先压缩一下要预览的图片,宽300，高300
          let imgsrc = preloader.type === 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 80) : preloader.getAsDataURL(); //得到图片src,实质为一个base64编码的数据
          callback && callback(imgsrc); //callback传入的参数为预览图片的url
          preloader.destroy();
          preloader = null;
        };
        preloader.load(file.getSource());
      }
    }
  },
};