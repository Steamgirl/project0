<template>
  <div class="wrapper">
    <div class="wrapper_content">
      <div class="tab_title">
        <ul>
          <li @click="tab=0" :class="{tab_active:tab==0}">tab1</li>
          <li @click="tab=1" :class="{tab_active:tab==1}">tab2</li>
        </ul>
      </div>
      <div class="content">
        <div class="tab_content" v-if="tab==0">内容一</div>
        <div class="tab_content" v-else-if="tab==1">内容二</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0 //默认选中第一个tab
    };
  }
};
</script>
<style scoped>
</style>