import './index.scss';
import {eeFormInit} from '../../../mixins/eeFormInit';

export default {
  name: 'evueForm',
  mixins: [eeFormInit],
  props: {
    refDom: {//表单的form ref
      type: String,
      default: 'eleForm',
    },
    option: {//所有数据结构
      type: Object,
      default: () => {
        return {}
      },
    },
    obj: { //数据默认的值
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  model: {
    prop: 'obj',
  },
  data() {
    return {}
  },
  components: {
    // allForm,
  },
  watch: {
    obj: {
      deep: true,
      handler(val) {
        for (let ol in val) {
          this.cardingDate(ol);
        }
        /**改变回调*/
        this.$emit('chance', this.reCardingObj());
      }
    }
  },
  mounted() {
    this.initData(this.option.column);
  },
  methods: {
    /**
     * 上传模块
     * 新增文件后反馈
     * */
    uploadFilesAdded(res) {
      this.$emit('upload-filesAdded', res)
    },
    /**
     * 上传模块
     * 上传之前
     * */
    uploadBeforeUpload(res) {
      this.$emit('upload-beforeUpload', res)
    },
    /**
     * 上传模块
     * 进度条
     * */
    uploadUploadProgress(res) {
      this.$emit('upload-uploadProgress', res)
    },
    /**
     * 上传模块
     * 上传完成
     * */
    uploadFileUploaded(res) {
      this.$emit('upload-fileUploaded', res)
    },
    /**
     * 上传模块
     * 上传错误信息回馈
     * */
    uploadError(res) {
      this.$emit('upload-error', res)
    },
    /**初始化数据*/
    initData(childrenData) {
      if (childrenData.length) {
        childrenData.map(res => {
          this.cardingInitData(res);
          if (res.children && res.children.length) {
            this.initData(res.children);
          }
          if (res.data && res.data.length) {
            res.data.map(dataList => {
              this.cardingInitData(dataList);
              if (dataList.children && dataList.children.length) {
                this.initData(dataList.children);
              }
            });
          }
        })
      }
    },
    /**梳理数据*/
    cardingInitData(res) {
      if (res.hasOwnProperty('model')) {
        if (this.obj.hasOwnProperty(res.model)) {
          //console.log('')
        } else {
          this.cardingDate(res.model);
        }
      }
    },
    /**
     * 梳理数据
     * 在不破坏this.obj结构的前提下，添加结构
     * */
    cardingDate(ol) {
      if (ol.includes('&')) {
        this.cardingOther(ol);
        return;
      }
      let $fieldArray = ol.split('.');
      if ($fieldArray.length) {
        let newObj = this.obj;
        $fieldArray.map((res, index) => {
          if (index === $fieldArray.length - 1) {
            this.$set(newObj, [$fieldArray[$fieldArray.length - 1]], this.obj[ol] === 0 ? 0 : this.obj[ol] || '');
            return;
          }
          newObj = newObj[res];
        });
      }
    },
    /**处理&符号*/
    cardingOther(ol) {
      let $fieldArray = ol.split('&');
      $fieldArray.map(res => {
        this.obj[res] = this.obj[res] === 0 ? 0 : this.obj[res] || '';
      });
    },
    //点击保存
    submitBtn() {
      this.$refs[this.refDom].validate((valid) => {
        if (valid) {
          this.$emit('submit', {
            status: 1,
            data: this.reCardingObj(),
            message: '',
          });
        } else {
          this.$emit('submit', {
            status: 0,
            data: this.reCardingObj(),
            message: '请填写完整信息',
          });
          return false;
        }
      });
    },
    /**
     * 重新处理obj
     * 过滤 . 和 &
     * */
    reCardingObj() {
      let newObj = JSON.parse(JSON.stringify(this.obj));
      for (let ol in newObj) {
        if (ol.includes('.') || ol.includes('&')) {
          delete newObj[ol];
        }
      }
      return newObj;
    },
    /**
     * 还原数据
     * */
    emptyBtn() {
      /*对整个表单进行重置，将所有字段值重置为初始值并移除校验结果*/
      this.$refs[this.refDom].resetFields();
      this.$emit('emptyChange');
    },
    /**
     * 移除表单项的校验结果
     * 空 全部
     * string 1个
     * array 多个
     * props: array | string
     * */
    clearValidate(props) {
      this.$refs[this.refDom].clearValidate(props);
    },
    /**
     * 对部分表单字段进行校验的方法
     * props: array | string
     * */
    validateField(props, callback) {
      this.$refs[this.refDom].validateField(props, callback);
    },
    /**
     * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
     * */
    resetFields() {
      this.$refs[this.refDom].resetFields();
    },
    /**
     * 对整个表单进行校验的方法，参数为一个回调函数。
     * */
    validate(callback) {
      this.$refs[this.refDom].validate(callback);
    },
  }
}