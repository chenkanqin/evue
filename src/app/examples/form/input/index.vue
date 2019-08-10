<template>
  <div class="e-input-demo">

    <h2 class="title_h2 is20">input 输入框</h2>
    <p>通过鼠标或键盘输入字符</p>
    <h3 class="title_h3">基础用法</h3>
    <div class="e-vue-demo-block">
      <div class="e-vue-source">
        <evue-form v-model="obj" :option="option">
          <template v-slot:prependSlotName>
            <el-select v-model="obj.select" placeholder="请选择" style="width: 120px">
              <el-option label="一年级" value="1"></el-option>
              <el-option label="二年级" value="2"></el-option>
              <el-option label="三年级" value="3"></el-option>
            </el-select>
          </template>

          <template v-slot:columnSlotName>
            我是 column 属性的插槽，你这里可以随便写哦
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

