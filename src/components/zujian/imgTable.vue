<template>
  <section class="container" > <!--最外层容器-->
    <!-- <div v-for="(img,index) in imgArr" :key=index>
        <img v-lazy=img>
    </div> -->
    <div id="box">
        <div v-for="(po,index) in position" :key= 'po.top+","+po.left' class="smallbox" :style="{ width:'100px' , left:po.left+'px',top:po.top+'px'}">
        <img v-lazy="po.src" :class="{'img':activeClass != index, 'active':activeClass === index   }" @mouseover="getItme(index)" @mouseleave="loseItem(index)">
        {{index}}
        </div>
    </div>
    <div id="iconBox">
    <pagination @nextPage="nextPage" @prePage="prePage"></pagination>
    </div>
  </section>
</template>

<script>
import pagination from './pagination.vue'

export default {
  components: {
    pagination: pagination
  },
  data () {
    return {
      imgClass: true,
      activeClass: -1,
      imgBox: 'imgBox',
      imgArr: [],
      width: '100px',
      height: '100px',
      position: [],
      col: 3, // 修改这个值，可以改变列数
      amountOnePage: 9, // 每一页显示的图片数量
      currentFirstIndex: 0 // 当前第一张图片在所有图片中的下标
    }
  },
  created () {
    // 吧图片放进数组
    for (var i = 2; i <= 73; i++) {
    //  this.imgArr = require('./pic1/pic' + i + '.jpg')
      this.imgArr[i - 2] = require('./pic1/' + 'pic' + i + '.jpg')
    }
    console.log(this.imgArr)
    this.change()
  },
  methods: {
    change: function () {
      this.position.splice(0, this.position.length)
      // 从当前第一张显示的图片下标显示到它之后的9张
      for (var i = this.currentFirstIndex; i < this.currentFirstIndex + 9; i++) {
        let l = parseInt((i - this.currentFirstIndex) % this.col) * (100 + 10) - 100
        let t = parseInt((i - this.currentFirstIndex) / this.col) * (100 + 10) - 100
        let po = {'left': l, 'top': t, 'src': this.imgArr[i]}
        console.log(po)
        this.position.push(po)
      }
    },
    getItme: function (index) {
      this.activeClass = index // 把当前点击元素的index，赋值给activeClass
      // console.log(this.activeClass)
    },
    loseItem: function (index) {
      this.activeClass = -1// 把当前点击元素的index，赋值给activeClass
      // console.log(this.activeClass)
    },
    prePage: function () {
    // alert('prePage')

      this.currentFirstIndex -= 9
      this.change()
    },
    nextPage: function () {
    // alert('nextPage')

      this.currentFirstIndex += 9
      this.change()
    }
  }
}

</script>
<style lang="less">
*{
    @import '../../common/style/layouts.less';

            padding: 0;
            margin: 0;
            list-style: none;
        }
        a:link{color:white}

        a:visited{color:black;}
        #box{
            position: relative;
             border:0px solid red;
             height:320px;
             width:320px;
             background-color :  rgba(100,100,100,0.5);
            border-radius: 6px;
        }
        #iconBox{
            width:300px;
        }
        .imgBox{
           border:1px solid red;

        }
        .img{
            width:100%;
            opacity: 0.5;

        }
        .smallbox {
            background-color: #ccc;
            position: absolute;
            max-width: 100px;
            max-height: 100px;
            height: 100px;
            margin:100px;
             border:0px solid red;
            border-radius: 6px;

            overflow: hidden;
        }
        .active {
            width:100%;
}
</style>
