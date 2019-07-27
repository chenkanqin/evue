<template>
  <div class="e-vue-children-desc" v-if="option.desc" :style="option.descStyle ? option.descStyle : '' "
       :class="option.descClass ? option.descClass :''">
    {{option.desc}}
  </div>
</template>

<script>
  import Index from './index';

  export default Index;
</script>
