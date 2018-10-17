<template>
  <van-nav-bar fixed
    title="手机"
    left-text="返回"
    @click-left="onClickLeft"
  />    
</template>
<script>
  export default {
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      }
    },
    watch:{
      // $route(to,from){
      //   console.log(to,from)
      //   if(to.name=='classify/77'){
      //      this.title='空气净化类'
      //   }
      //   if(to.name=='classify/60'){
      //      this.title='官方配件'
      //   }
      // }
    }
  }
</script>