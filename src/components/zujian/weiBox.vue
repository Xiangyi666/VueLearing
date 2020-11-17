<template>
  <div class="list-item editingClass editing"> <!-- 最外层容器-->

    <input type="textarea" v-model="wei.text" placeholder='写点什么。。。'>  <!--绑定item.text-->
    <a class="delete-item"> <!--删除图标-->
      <span class="icon-trash"></span>
    </a>
  </div>
</template>
<script>
export default {
  props: ['wei'] // 子组件显式的用 props 选项声明它期待获得的数据，

}
</script>
<style lang="less">
@import '../../common/style/weiBox.less';
</style>
