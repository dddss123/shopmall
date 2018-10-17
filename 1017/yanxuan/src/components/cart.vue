<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar fixed
            title="购物车"  
           
        />
        <div class="background" v-if="!this.$store.state.car.length">
          <img src="../assets/shopcar.jpg">
         <van-button round type="danger"@click="buynow">快来采购吧！</van-button>
        </div>
        
        <!-- 购物车商品区域 -->
        <div class="main">   
            <div class="near">
                <ul>
                    <li class="nearitem"
                        v-for="(item,i) in GoodsList" 
                        :key="item.id"
                    > 
                        <mt-switch 
                          v-model="$store.getters.getGoodsSelected[item.id]"
                          @change="selectedchange(item.id,$store.getters.getGoodsSelected[item.id])"
                        ></mt-switch>
                        <img v-lazy="item.shop_info.ali_image">
                        <div class="nearinfo">
                            <h5>{{item.shop_info.sku_mobile_title}}</h5>
                            <p>{{item.shop_info.sku_mobile_sub_title}}</p>
                            <i class="nearm">¥</i>
                            <span>{{item.price}}</span>
                            <van-stepper disable-input
                             ref="numbox" 
                             v-model="$store.getters.getGoodsCount[item.id]"
                             @change="countChanged(item.id,$store.getters.getGoodsCount[item.id])"
                            />
                        </div>
                        <van-icon name="delete" class="icon" @click="remove(item.id,i)" />
                        
                    </li>
                </ul>
            </div>
        </div>
        <div class="border" v-if="!this.$store.state.car.length"></div>
        <!-- 结算区域 -->
      <van-submit-bar  v-if="this.$store.state.car.length"  
        button-text="提交订单"
        @submit="onSubmit"
      >
      <p>已勾选商品<span class="num">{{$store.getters.getGoodsCountAndAllPrice.count}}</span>件</p>
      <p class="num2">合计：<span  class="num1">{{$store.getters.getGoodsCountAndAllPrice.amount}}</span>元</p>
      <span slot="tip">
        暂时不支持支付功能
      </span>
      </van-submit-bar>
    </div>
    
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
    export default{
        data(){
          return{
            GoodsList:[],
          }
        },
        methods:{ 
          buynow(){
            this.$router.push('/home')
          },
          onSubmit(){
            this.$router.push('/home')
          },
          //每当购物车的数量改变。立即同步到store中,覆盖之前的数据值
          countChanged(i,b){
              //console.log(i+'')
              var i = i+''
               let id = i.slice(0,7)
              //console.log(id)
            // console.log($store.getters.getGoodsCount[item.id])
            this.$store.commit("updateGoodsInfo",{
                id:id,
                count:b
            })
          },
          //删除商品 (store用id GoodsList用index)
          remove(id,index){
              //console.log(id)
              this.GoodsList.splice(index,1)
              var id = id+''
               let a = id.slice(0,7)
              this.$store.commit("removeFromCar",a)
              
          },
          //是否选中 状态
           selectedchange(id,val){
           //点击开关。同步最新的状态到store
            //console.log(id,val)
           this.$store.commit("updateGoodsSelected",{id,selected:val})
          }
        },
        async created(){  
          
            //获取store中所有的id，拼接
            var idArr=[]
            this.$store.state.car.forEach(item =>idArr.push(item.id))
            //如果购物车中没有商品
            if(idArr.length<=0){
                return;
            }
           let idArr1 = idArr.map((item)=>{
             return item+'01'    
            })
            //请求商品列表数据
            let {data:{data}}=await axios(`/abc/product/skus?ids=${idArr1.join()}&with_stock=true&with_spu=true`) 
            this.GoodsList = data.list;
            // console.log(this.GoodsList)
        }
    }
</script>

<style scoped>
.van-button--plain.van-button--danger{
  font-weight:800;
}
p{
  padding-left:5px;
}
.num{
  color:red;
  padding:0 10px;
  font-weight:800;
}
.num1{
  color:red;
  padding:0;
  font-weight:800;
}
.num2{
  padding-left:8px;
}
.van-nav-bar--fixed{
    background: #f9464c;
    color: white;
}
.nearitem{
  padding:0 10px 0 10px;
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
h5{
    padding: 0;
    margin: 0;
}
h2{
    padding: 0;
    margin: 0;
    font-size:4.3vw;
    text-indent:5.3vw;
    color: #666;
    line-height:12vw;
    border-bottom: 0.3vw solid #f3f3f3;
}
.border{
width:100%;
height: 1.2vh;
background:#f4f4f4;
}
.van-card:not(:first-child){
    margin-bottom: 20px;
}
.van-checkbox{
    padding-left: 10px;
}
.van-submit-bar__text span{
    font-weight: 700;
}
.van-checkbox__icon--checked .van-icon{
   border-color: #ff4444 !important;
   background: #ff4444 !important;
}
.van-card, .van-card__row, .van-card__thumb{
    background: none;
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
  /* li:nth-child(2n-1){
    margin-right:2.9vw;
  } */
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
  .shoplist{
    display:flex;
    flex-wrap: wrap;
  }
  .van-card{
    width:300px;
  }
  .shoplist .van-checkbox{
    padding-top:50px;
  }
  .van-card__price{
    color: red;
  }
  .main{
      padding-top:50px;
  }
  /* .nearinfo{
    padding-bottom: 2.625rem;
  } */
  .nearitem{
    display: flex;
    height: 114px;
    align-items: center;
    border-bottom: 1px solid #8e8e8e30;
  }
   .nearitem img{
     width:90px;
     height:90px;
     flex: 0 0 90px;
     position: relative;
   }
   .nearinfo{
    width:180px;
    padding-right:8px;
        flex: 1;
        padding-left:5px;
        position: relative;
   }
   .nearinfo h5{
    overflow: hidden;
    font-weight: 700;
    font-size: .8rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
   }
   .nearinfo p{
    color: #7f7f7f;
    font-size: .7rem;
    line-height: 1.2;
    overflow-x: hidden;
    margin: .3rem 0 0.3rem 0;
    width:8.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
   }
   .nearinfo span{
      color: #d44d44;
      display: inline-block;
      white-space: nowrap;
      font-weight: 700;
       font-size: .8rem;   
    }
    .nearm{
      color: #d44d44;
      font-size: .8rem; 
      font-style: normal;
      font-weight: 700;  
    }
    .near ul{
      overflow: hidden;
      height:35rem;
    }
    .icon{
        margin-bottom: 80px;
        margin-right: 10px;
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
