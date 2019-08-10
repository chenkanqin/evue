<template>
  <div class="e-vue-addPreEnd" v-if="option.addPre || option.addEnd">
    <!--
                  前面追加文本
                  addPreClass 添加class
                   addPreStyle 添加style
                   addPre 添加文本
                 -->
    <span v-if="addPre&&option.addPre" :class="option.addPreClass"
          :style="option.addPreStyle">{{option.addPre}}</span>
    <!--
                   后面追加文本
                   addPreClass 添加class
                   addPreStyle 添加style
                   addPre 添加文本
                -->
    <span v-if="addEnd&&option.addEnd" :class="option.addEndClass"
          :style="option.addEndStyle">{{option.addEnd}}</span>
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
