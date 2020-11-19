import Vue from 'vue' // 导入Vue
import Router from 'vue-router' // 导入vue-router 库
import layout from '@/components/layouts' // 导入layouts.vue 组件
import hello from '@/components/HelloWorld'
import imgComponent from '@/components/zujian/imgBox'
import model from '@/components/zujian/fadeModel.vue'
import waterfall from '@/components/zujian/waterfall.vue'
import imgTable from '@/components/zujian/imgTable.vue'
Vue.use(Router) // 全局注册Router组件，它会绑定到Vue实例里面。
export default new Router({ // 创建 router 实例，然后传 `routes` 配置
  routes: [
    {
      path: '/', // 访问路径
      name: 'layout', // 路径名
      component: layout// 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/hello', // 访问路径
      name: 'hello', // 路径名
      component: hello// 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/imgComponent', // 访问路径
      name: 'imgComponent', // 路径名
      component: imgComponent// 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/modelTest', // 访问路径
      name: 'modelTest', // 路径名
      component: model// 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/waterfall', // 访问路径
      name: 'waterfall', // 路径名
      component: waterfall// 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },
    {
      path: '/imgTable', // 访问路径
      name: 'imgTable', // 路径名
      component: imgTable // 访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    }
  ]
})
