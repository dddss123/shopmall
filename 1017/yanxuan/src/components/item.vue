<template>
  <div class="main" v-if="hasdata">
    <i class="pic" 
      @click="goBack"
    ><img src="../assets/goback.icon.png"></i>
    <div class="images">
      <img v-lazy="bannerData.sku_info[0].ali_image">
    </div>
    <div class="wrap">
      <div class="title">
        <h4>{{bannerData.name}}</h4>
        <p>{{bannerData.shop_info.highlights}}</p>
      </div>
      <div class="price">
          <span>￥</span>
          <span>{{bannerData.price}}</span>
      </div>
    </div>
     <div class="border"></div>
     <h2>商品详情</h2>
     <img class="pictures"
      v-lazy="bannerData.shop_info.tpl_content.base.images.ali_mobile.url[0]"
     >
     <div class="border"></div>
     <div class="service">
        <h2>服务说明</h2>
     </div>
     <div class="wrapper">
        <ul class="list">
          <li class="item ">7 天无理由退货</li>
          <li class="item">15 天质量问题换货</li>
          <li class="item ">满 150 元免运费</li>
          <li class="item ">72 小时内发货</li>
        </ul>
     </div>
     <div class="border"></div>
     <!--相关推荐  -->
     <h2>相关推荐</h2>
     <div class="contain">
        <ul class="clearfix">
          <li class="hotitem" 
            v-for="item in recommendData"
            :key="item.id"
          >
            <a class="tupian">
              <img v-lazy="item.shop_info.ali_image" >
            </a>
            <div class="hotinfo">
              <h4 class="hottitle">{{item.shop_info.sku_mobile_title}}</h4>
              <span class="itemtitle">{{item.shop_info.sku_mobile_sub_title}}</span>
              <div class="info">
                  <i class="money">￥</i>
                  <span>{{item.price}}</span>
              </div>
            </div>
          </li>
        </ul>
        
     </div>
     <!--加入购物车、购买区域-->
    <van-goods-action>
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" :info="$store.getters.getAllCount"/>
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
      <van-goods-action-big-btn text="立即购买" @click="buynow" primary />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
  export default {
    data(){
      return{
        bannerData:[],//商品信息
        recommendData:[],
        selectedCount:1, //保存用户选中的商品个数，默认为一个
        id:this.$route.params.id,//将路由参数对象中的id挂在到data方便调用
        hasdata:false
      }
    },
    methods:{
      //返回
      goBack(){
        this.$router.go(-1)
      
      },
      onClickMiniBtn() {
        this.$router.push('/cart')
      },
      //点击加入购物车
      // onClickBigBtn() {
      //   this.$store.commit("addCar",{
          
      //   })
      // },
      //点击加入购物车
      onClickBigBtn(){
        //保存到car中的商品信息
        var goodsinfo = {
          id:this.id,
          count:this.selectedCount,
          price:this.bannerData.price,
          selected:true
        }
        //调用store中的mutations将商品加入购物车
        this.$store.commit('addToCar',goodsinfo)
      },
      buynow(){
         this.$router.push('/cart')
      }
  },
    //拿到详情页信息
    async created(){
      let id = this.$route.params.id.slice(0,7)
      // console.log(id)
      axios.get(`/abc/product/spus?ids=${id}`).then(({data})=>{
        this.bannerData = data.data.list[0]
      //  console.log(this.bannerData)
        this.hasdata = true;
      })
      //拿到相关推荐信息
      axios.get(`/abc/product/skus?ids=100039702,100041005,100040909,100037615,100026209,100025601,100025701,100037721,100027102&with_stock=true&with_spu=true`).then(({data}) => {
        this.recommendData = data.data.list;
        // console.log(this.recommendData)
      })
    }
   
    
    
  }

</script>

<style scoped>
  h4,h2,p{
    padding:0;
    margin:0;
  }
  .border{
    width:100%;
    height: 1.2vh;
    background:#f4f4f4;
  }
  .main{
    position:relative;
  }
  .main .pic {
    position:absolute;
    top:1.8vh;
    left:2.7vw;
  }
  .van-swipe{
    height:300px;
  }
  .van-button--plain{
    background:rgba(0, 0, 0, 0.4);
    color: #fff;
  }
 .wrap{
   padding:0  3.2vw;
 }
 .price{
    color: #d44d44;
    font-weight: 500;
    font-size:5.3vw;
    margin-bottom:0.7vh;
 }
 .title h4{
   margin-bottom:1.2vh;
   font-size:4.4vw;
 }
  p{
    overflow: hidden;
    color: #7f7f7f;
    line-height: 1.5;
    font-size:3.7vw;
    margin-bottom:1.2vh;
  }
  h2{
    font-size:4.3vw;
    text-indent:5.3vw;
    color: #666;
    line-height:12vw;
    border-bottom: 0.3vw solid #f3f3f3;
  }
  .pictures{
    display: block;
    width: 100%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .wrapper{
    padding:2.4vh 4.8vw 1.2vh 4.8vw;
    position: relative;
  }
  .list{
    overflow: hidden;
    font-size: 3.2vw;
    font-weight: 700;
    color: #333;
    line-height: 1.5;
    display: flex;
    flex-wrap: wrap;
  }
  .service{
    border-bottom:0.3vw solid #f4f4f4;;
  }
  .item{
    padding-left: 0.1vw;
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 33.33333%;
    flex: none;
    margin-bottom: 0.9vh;
  }

  .contain{
    overflow: hidden;
    padding: 2.7vh 3.2vw 0 3.2vw; 
  }
  .clearfix:after{
    content:"";
    display:block;
    clear:both;
  }
  .hotitem{
    float:left;
  }
  li:nth-child(2n-1){
    margin-right:2.9vw;
  }
  .hotitem .tupian{
    display: block;
  
    border-radius: 0.8vw;
    width: 45.3vw;
    height: 25.5vh;

  }
  .tupian img {
    width:100%;
    height:100%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .hottitle{
   font-size: 3.2vw;
   margin: 0;
   padding:0;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
  }
  .hotinfo .itemtitle{
    color: #7f7f7f;
    font-size: 2.9vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    margin-top: 0.9vh;
  }
  .hotinfo{
    padding: 2.2vw  1.8vh 5vw 1.8vh;
    width:38vw;
  }
  .info{
    color: #d44d44;
    font-weight: 700;
    font-size: 3.7vw;
    margin-top:0.3vh;
  }
  .contain .info .money {
    font-style: normal;
    font-size: 3.4vw;
  }
  .images{
    width:375px;
    height:300px;
  }
  .images img{
    height: 100%;
    margin: 0 auto;
    display: block;
  }
</style>
