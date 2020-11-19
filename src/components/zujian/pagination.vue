<!-- 提示框 -->
<template>
  <div>

    <!-- 内容 -->
     <a href="#" @click="goPrev()">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
         <a href="#" @click="goNext()">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>

  </div>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    pagesAmount: 0

  },
  data () {
    return {
      //
    }
  },
  methods: {
    goPrev: function () {
      this.$emit('prePage')
    },
    goNext: function () {
      this.$emit('nextPage')
    }
  }
}
</script>

<style lang="less" scoped>
  //
</style>
