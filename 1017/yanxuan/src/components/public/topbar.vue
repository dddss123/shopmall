<template>
  <div class="topbar" fixed>
    <h1 class="logo">
      <img src="@/assets/logo.png">
    </h1>
    <van-search placeholder="请输入搜索关键词" @click="put" />
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      put(){
        this.$router.push('/search')
      }
    },
    watch:{
      // $route(to,from){
      //   console.log(to,from)
      //   if(to.name=='classify'){
      //      this.title='分类'
      //   }
      //   if(to.name=='shopCar'){
      //      this.title='购物车'
      //   }
      // }
    }
  }
</script>
<style scoped>
h1{
  margin: 0;
  padding: 0；
}
  .abb{
    display: none;
  }

  .logo img{
    width:2.3125rem;
    height: 2.3125rem;
    float: left;
    border-radius: 15px; 
  }
  .topbar{
    height: 2.3125rem;
    background: #f9464c;
  }
  .topbar .van-search{
    width: 17.6875rem;
    float: left;
    height: 2.3125rem;
    background: #f9464c !important;
  }
  .van-search{
    padding:0.4375rem;
  }
</style>
