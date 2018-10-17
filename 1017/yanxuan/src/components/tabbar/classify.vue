<template>
  <div class="allcon" v-if="hasdata">
    <header>
      <h2>手机</h2>
    </header>
    <div class="bigpic">
     
         <img v-lazy="phoneData[0].image.src">

    </div>
      <van-cell-group>
        <router-link 
          :to="'/item/'+item.spu_id"
          v-for="item in partone"
          :key="item.id"
        >
          <van-cell is-link>        
          <template slot="title">
            <img v-lazy="item.shop_info.ali_image">
            <span class="van-cell-text">{{item.spu.name}}</span>
          </template>
        </van-cell>
        </router-link>
        
      </van-cell-group>
      <div class="border"></div>
      <!-- 壳套膜 -->
      <div class="title-wrapper">
        <h2>壳套膜</h2>  
        <div class="secondpic">
          <a>
            <img v-lazy="phoneData[1].image.src">
          </a>
        </div> 
      </div>
      <ul class="list">
          <router-link
            :to="'/item/'+item.spu_id"
            v-for="item in parttwo"
            :key="item.id"
           >
              <van-cell-group>
                <van-cell is-link>
                  <template slot="title">
                    <img v-lazy="item.shop_info.ali_image">
                    <span class="van-cell-text">{{item.shop_info.sku_mobile_title}}</span>
                  </template>
                </van-cell>
              </van-cell-group> 
          </router-link>
        
      </ul>
      <div class="border"></div>
      <!--充电线材-->
      <div class="charg">
        <h2>充电线材</h2>
        <div class="secondpic">
          <a>
            <img v-lazy="phoneData[2].image.src">
          </a>
        </div> 
        <div class="chargmain">
          <ul class="list">
            <router-link class="item" 
              v-for="item in partthree"
              :key="item.id"
               tag="li"
              :to="'/item/'+item.spu_id"
            >
              <a>
                <div class="pic">
                  <img v-lazy="item.shop_info.ali_image">
                </div>
                <span class="title">{{item.shop_info.sku_mobile_title}}</span>
              </a>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="border"></div>
     <!--耳机音箱-->
      <div class="charg">
        <h2>耳机音箱</h2>
        <div class="secondpic">
          <a>
            <img v-lazy="phoneData[3].image.src">
          </a>
        </div> 
        <div class="chargmain">
          <ul class="list">
            <router-link class="item" 
              v-for="item in partfour"
              :key="item.id"
              :to="'/item/'+item.spu_id"
              tag="li"
            >
              <a>
                <div class="pic">
                   <img v-lazy="item.shop_info.ali_image">
                </div>
                <span class="title">{{item.shop_info.sku_mobile_title}}</span>
              </a>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="border"></div>
      <!--空气净化-->
      <div class="air">
        <h2>空气净化</h2>
        <div class="bigpic">
          <a>
            <img v-lazy="phoneData[4].image.src">
          </a>
         </div>
        <ul class="list">
          <router-link
            v-for="item in partfive"
            :key="item.id"
            :to="'/item/'+item.spu_id"
          >
            <van-cell-group> 
              <van-cell is-link>
                <template slot="title">
                  <img v-lazy="item.shop_info.ali_image">
                  <span class="van-cell-text">{{item.shop_info.sku_mobile_title}}</span>
                </template>
              </van-cell>
            </van-cell-group> 
          </router-link>
          
        </ul>
      </div>
      <div class="border"></div>
      <!--鞋服-->
      <div class="charg">
        <h2>鞋服</h2>
        <div class="secondpic">
          <a>
            <img v-lazy="phoneData[5].image.src">
          </a>
        </div> 
        <div class="chargmain">
          <ul class="list">
            <router-link  class="item" 
              v-for="item in partseven"
              :key="item.id"
              :to="'/item/'+item.spu_id"
              tag="li"
            >
              <a>
                <div class="pic">
                   <img v-lazy="item.shop_info.ali_image">
                </div>
                <span class="title">{{item.shop_info.sku_mobile_title}}</span>
              </a>
            </router-link >
          </ul>
        </div>
      </div>
      <div class="border"></div>
      <!--品牌精选-->
       <div class="air">
        <h2>品牌精选</h2>
        <div class="bigpic">
          <a>
            <img v-lazy="phoneData[7].image.src">
          </a>
         </div>
        <ul class="list">
           <router-link 
              v-for="item in partsix"
              :key="item.id"
               :to="'/item/'+item.spu_id"
           >
              <van-cell-group> 
                <van-cell is-link>
                  <template slot="title">
                    <img v-lazy="item.shop_info.ali_image">
                    <span class="van-cell-text">{{item.shop_info.sku_mobile_title}}</span>
                  </template>
                </van-cell>
              </van-cell-group> 
           </router-link>  
        </ul>
      </div>
      <div class="border"></div>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        phoneData:[],
        partone:[],
        parttwo:[],
        partthree:[],
        partfour:[],
        partfive:[],
        partsix:[],
        partseven:[],
        hasdata:false
      }
    },
    async created(){
      //请求大图数据
       axios.get(`https://resource.smartisan.com/marketing/mobile/category_a197fb6f11fe50b6032ab211e9f8916d.json`).then(({data})=>{
        this.phoneData = data
        console.log(this.phoneData)
          //拿到id 每一块的id
          let abc = this.phoneData.map((item) => {
            return {
              ...item.layout.dataList
            }
          })
           let arr = [];
           let arr1 = [];
           abc.forEach((item,index)=>{
             arr[index] = [];
             for(let attr in item){
               arr[index].push(+item[attr].sku)
                  // console.log(arr)
             }
          
           })
          //请求列表数据
          axios(`/abc/product/skus?ids=${arr[0].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.partone=list.list; 
            // console.log(this.partone)
            this.hasdata=true
          })
          axios(`/abc/product/skus?ids=${arr[1].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.parttwo=list.list;
            this.hasdata=true
          })
          axios(`/abc/product/skus?ids=${arr[2].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.partthree=list.list;
            this.hasdata=true
          })
          axios(`/abc/product/skus?ids=${arr[3].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.partfour=list.list;
            this.hasdata=true
          })
          axios(`/abc/product/skus?ids=${arr[4].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.partfive=list.list;
            this.hasdata=true
          })
          axios(`/abc/product/skus?ids=${arr[5].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.partseven=list.list;
            this.hasdata=true
          })
          axios(`/abc/product/skus?ids=${arr[7].join()}&with_stock=true&with_spu=true`).then(({data:{data:list}})=>{
            this.partsix=list.list;
            this.hasdata=true
          })
          this.hasdata=true
       })
          
    
      
      

    }
  }
</script>

<style scoped>
.allcon{
  margin-bottom:3.375rem;
}
   h2{
    font-weight: 700;
    color: #666;
    margin:0;
    padding: 0;
    font-size:4.3vw;
    text-indent:4vw;
    height: 6vh;
    line-height: 6vh;
    border-bottom:0.1vh solid #f2f2f2;
  }
  .bigpic{
    padding:2.1vh 3.2vw; 
  }
  .bigpic img {
    width:100%;
    height:13.3vh;
    display: block;
  }
  .van-cell__title img{
   float: left;
    width: 2.3125rem;
    height:2.3125rem;
  }

  .van-cell-text{
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
    display: block;
    width:4.7rem;
  }
  .van-cell {
    line-height: 2.3125rem;
  }
 .van-cell__right-icon{
   line-height: 2.3125rem;
 }
  .border{
    width:100%;
    height: 1.2vh;
    background:#e5e5e5;
  }
  .title-wrapper h2{
    font-weight: 600;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .secondpic{
    padding:2.1vh 3.2vw; 
  }
  .secondpic img {
    width:100%;
    height:13.3vh;
    display: block;
  }
  .item{
    width:50%;
    display: inline-block;
    box-sizing: border-box;
  }
  .list .van-cell-group{
    display: inline-block;
    width: 50%;
  }
  .chargmain{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 0;
    padding:2.7vh 3.2vw 0 3.2vw;
    border-top: 1px solid #efeff1;
  }
  .item{
    width: 31%;
    margin-right: 10px;
  }
  .list li:nth-child(3n){
    margin-right:0;
  }
  .pic{
    height:7.6875rem;
    border: 1px solid #f0f0f0;
    border-radius: 1vw;
  }
  .pic img{
    width:100%;
    height:100%;
  }  
  .item .title{
    display: block;
    color: rgba(0,0,0,.8);
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    font-size:2.8vw;
    margin:0.9vh 0 2.4vh 0;
  }
</style>


