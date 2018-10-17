<template>
  <van-tabbar>
    <van-tabbar v-model="active">
      <van-tabbar-item 
        :icon="item.icon" 
        :to="item.path"
        v-for="item in navConfig"
        :key="item.id"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </van-tabbar>
</template>
<script>
  let navConfig=[
  {
    title:'首页',
    id:61,
    path:'/home',
    icon:'wap-home'
  },
   {
    title:'分类',
    id:62,
    path:'/classify',
    icon:'pending-orders'
  },
   {
    title:'购物车',
    id:63,
    path:'/shopCar',
    icon:'cart'
  },
   {
    title:'个人中心',
    id:64,
    path:'/aboutMe',
    icon:'contact'
  }
]
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      navConfig
    }
  }
}
</script>
