/* eslint-disable no-unused-vars */

<template>
  <div ref="imgBox" class="imgBox" > <!-- 最外层容器-->
    <img id="mango" :src="imgSrc" >
       <a href="#" class="btn btn-info btn-lg"><!--打印机图标-->
          <span class="glyphicon glyphicon-print"></span> Print
        </a>
         <a href="#" class="btn btn-info btn-lg"><!--列表图标-->
          <span class="glyphicon glyphicon-th"></span> Th
        </a>

    <div id='print'>
<input type="checkbox" @change="changeLikeList()" v-model="ckeckVal" ><span class="glyphicon glyphicon-heart" ></span>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
// import $ from 'jquery'

export default {
  props: {
    directory: {
      type: String,
      default: '13254218 '
    },
    pAmount: {
      type: Number,
      default: 17
    }
  },
  data () {
    return {
      cnt: 0,
      // pAmount: 0,
      pNoL: 1,
      imgSrc: require('./13254281 /p' + '1' + '.jpg'),
      checkBoxs: [],
      likeList: [],
      ckeckVal: false
    }
  },

  mounted () {
    this.likeList.remove = function (val) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] === val) this.splice(i, 1)
      }
    }
    this.pAmount = 17
    // 通过$refs获取dom元素
    console.log('initial' + this.pNoL)
    this.box = this.$refs.imgBox
    console.log(this.box)
    // 监听这个dom的scroll事件
    this.box.addEventListener('click', () => {
      console.log('click' + this.cnt.toString())
      this.cnt++
      // 以下是我自己的需求，向下滚动的时候显示“我是有底线的（类似支付宝）”
    })
    this.box.addEventListener('mousewheel', (e) => {
      const direction = e.deltaY > 0 ? 'down' : 'up' // deltaY为正则滚轮向下，为负滚轮向上
      // console.log(direction)
      if (direction === 'up') { // 125为用户一次滚动鼠标的wheelDelta的值
        console.log('up' + this.pNoL)
        if (this.pNoL === 1) {
          this.$toast.center('已经是第一张啦')
        }
        if (this.pNoL > 1) {
          this.pNoL--
          console.log(this.pNoL)
          this.imgSrc = require('./13254281 /p' + this.pNoL + '.jpg')
        }
      }
      if (direction === 'down') {
        console.log('down' + this.pNoL)
        if (this.pNoL === 17) {
          this.$toast.center('已经是最后一张啦')
        }
        if (this.pNoL <= this.pAmount - 1) {
          this.pNoL++
          console.log(this.pNoL)

          this.imgSrc = require('./13254281 /p' + this.pNoL + '.jpg')
        }
      }
      // checkBox的ckeckVal 与likeList[this.pNol]绑定”
      this.ckeckVal = this.checkBoxs[this.pNoL - 1] === true
    })
  },
  methods: {

    getPicsList: function () {

    },
    changeLikeList: function () {
      var that = this
      if (that.ckeckVal) {
        console.log(this.pNoL + '复选框被选中了')
        this.checkBoxs[this.pNoL - 1] = true
        this.likeList.push(this.pNoL - 1)
        console.log('当前喜爱列表' + this.likeList)
      } else {
        console.log(this.pNol + '复选框没有被选中')
        this.checkBoxs[this.pNoL - 1] = false
        this.likeList.remove(this.pNoL - 1)
        console.log('当前喜爱列表' + this.likeList)
      }
    }
  }
}

</script>
<style lang="less">
@import '../../common/style/weiBox.less';
#mango img{
    width:100%;
    height:auto
}
.imgBox{
    position:absolute;
    display: block;
    width:600px;
    height: 480px;
}
#print{
  position: absolute;
  left:550px;
  top:450px;
}
.btn{
  float: right!important;
}
</style>
