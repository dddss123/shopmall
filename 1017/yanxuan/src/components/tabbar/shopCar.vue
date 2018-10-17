<template>
  <div class="main">
    <div class="background">
      <img src="../../assets/shopcar.jpg">
      <van-button type="danger" @click="login">登 录</van-button>
      <van-button type="danger" @click="buynow" plain>选 购</van-button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
  
      }
    },
    methods:{
      login(){
        this.$router.push('/login')
      },
      buynow(){
         this.$router.push('/home')
      }
    }
  }
</script>
<style scoped>
  .main{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: 100%;
  }
  .background{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .background img {
    width:100%;
    height:100%;
   }
  .van-button--normal{
     padding:0 13.3vw;
     border-radius:6vw;
     border:0.5vw solid #f44;
  }
  .van-button{
    margin-top:4vh;
  }
  .van-button--plain {
    background-color: #fff;
    margin-right: 2.7vw;
  }
</style>