<template>
  <section class="container" > <!--最外层容器-->
 <section class="menu"> <!--左边的容器-->
    <menus></menus>
    </section>
    <section class="content-container"><!--右边的容器-->
    <!--<countButton></countButton>-->
      <todo></todo>
    </section>
  </section>
</template>

<script>
import countButton from './zujian/countButton.vue'
import menus from './menus.vue'
import todo from './todo.vue'
export default {
  components: { // * 注册menus组件，让其可以在template调用
    countButton,
    menus,
    todo
  }
}

</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>
