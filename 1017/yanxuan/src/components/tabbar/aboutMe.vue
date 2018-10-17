<template>
  <div>
    <div class="myinfo">
      <header class="login" @click="loginto()">
        <div class="headicon">
          <img src="../../assets/login.jpg"> 
        </div>
        <span>{{usename}}</span>
      </header>
      <div class="mymain">
        <ul  @click="shopto()">
          <li class="myitem">
              <img src="../../assets/ding.icon.png">
              <span>购物车</span>
          </li>
          <li class="myitem">
              <img src="../../assets/ding.icon.png">
             <span>购物车</span>
          </li>
          <li class="myitem">
              <img src="../../assets/ding.icon.png">
              <span>购物车</span>
          </li>
          <li class="myitem">
              <img src="../../assets/ding.icon.png">
              <span>购物车</span>
          </li>
        </ul>
      </div>
      <!--<van-cell-group class="user-group"> 
      //   <van-cell icon="records" title="地址管理" is-link />
      // </van-cell-group>!-->
      <van-cell-group>
       <van-cell icon="records" title="地址管理" is-link @click="pau()"/>
        <van-cell icon="exchange" title="我的积分" is-link @click="pau()"/>
        <van-cell icon="gold-coin" title="我的优惠券" is-link @click="pau()"/>
        <van-cell icon="gift" title="我收到的礼物" is-link @click="pau()"/>
        <van-cell icon="gold-coin" title="我的优惠券" is-link @click="pau()"/>
        <van-cell icon="gift" title="我收到的礼物" is-link @click="pau()"/>
        <van-cell icon="gift" title="我收到的礼物" is-link @click="pau()"/>
      </van-cell-group>
      <div class="border"></div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      usename:'',
      loginstate:false
    }
  },
  methods:{
    loginto(){
      this.$router.push(`/login`)
    },
    shopto(){
      this.$router.push(`/cart`)
    },
    pau(){
       this.$router.push(`/home`)
    }
  },
  created(){
    let info =this.$local.fetch('islogin')
    this.usename = info.usename
  }
};
</script>

<style scoped>
/* .user {
  &-poster {
    width: 7.5rem;
    height: 4rem;
    display: block;
  }
  &-group {
    margin-bottom: .3rem;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
} */
.border{
  height:100px;
  width:100%;
  background:#e9e9e9;
}
.headicon img{
  width:100%;
  height:100%;
}
 .myinfo{
    height:100%;
    background:#e9e9e9;
    text-align:center;
    padding:6vh 3.2vw 0 3.2vw;
    position:relative;
  }
  .headicon{
    width:80px;
    height:80px;
    border-radius:30px;
    margin:0 auto;
  }
  .mymain{
    height:120px;
  }
  .myitem{
    float: left;
    width: 25%;
    text-align: center;
    background:#fff;
    margin-top:30px;
    padding:10px 0;
  }
  .myitem span{
    display:block;
    font-size:3.2vw;
    line-height:5.3vw;
  }
   .myborder{
    width:100%;
    height: 1.2vh;
    background:#e1e1e1;
  }
</style>