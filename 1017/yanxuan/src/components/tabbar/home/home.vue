<template>
  <div>
    <section class="main" v-if="hasdata">
      <!-- 轮播图   -->  <!-- ig忽略大小写 全局匹配  -->
      <div class="lunbo">
        <mt-swipe :auto="4000"> 
            <mt-swipe-item
              v-for="(item,index) in bannerdata"
             :key="index"    
            >
              <router-link :to="
                item.linkUrl.replace(/[^0-9]/ig,'')==145?
                {name:'classify'}:
                {name:'Item',params:{id:item.linkUrl.replace(/[^0-9]/ig,'')}}"
              >
               <img v-lazy="item.src">
              </router-link>  
            </mt-swipe-item>  
             
        </mt-swipe>
      </div>
      <!-- 菜单栏 -->
      <ul class="menu">
        <router-link class="menu-item"
          v-for="item in menuConfig"
          :key="item.id"
          :to="'/classify/' + item.id"
        >
          <img v-lazy="item.img"> 
          <span>{{item.title}}</span>
        </router-link>
      </ul>
      <div class="border"></div>
      <!-- 热销商品 -->
      <div class="hotsale">
        <header>
          <h2>热销商品</h2>
        </header>
        <div class="hotmain">
          <mt-swipe :show-indicators="false" :auto="0">
            <mt-swipe-item>
              <router-link
                v-for="item in hotsaledata"
                :key="item.id"
                :to="'/item/'+item.spu_id"
                tag="div"
              >
                <div class="hotitem">
                  <a class="tupian">
                    <img v-lazy="item.shop_info.ali_image">
                  </a>
                  <div class="hotinfo">
                    <h4 class="hottitle">{{item.name}}</h4>
                    <span class="itemtitle">{{item.shop_info.sku_mobile_sub_title}}</span>
                    <div class="info">
                        <i>￥</i>
                        <span>{{item.price}}</span>
                    </div>
                  </div>
                </div>
              </router-link>
               
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="border"></div>
      <!-- 多图区域 -->
      <div class="morepics clearfix">
        <div class="left">
          <ul>
            <li class="leftitem">
              <router-link 
                :to="'/item/'+picturesdata[0].linkUrl.replace(/[^0-9]/ig,'')"
              >
                <img v-lazy="picturesdata[0].src">
              </router-link>
            </li>
            <li class="leftitem">
              <router-link 
                :to="'/item/'+picturesdata[1].linkUrl.replace(/[^0-9]/ig,'')"
              >
                <img v-lazy="picturesdata[1].src">
              </router-link>
            </li>
            <li class="leftitem">
              <router-link :to="{name:'classify'}">
                <img v-lazy="picturesdata[2].src">
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right">
           <router-link :to="{name:'classify'}">
            <img v-lazy="picturesdata[3].src">
            </router-link>
        </div>
      </div>
      <div class="border"></div>
      <!-- 新品首发 -->
      <div class="newproduct">
          <h2>新品首发</h2>
          <div class="contain">
            <ul class="clearfix">
              <router-link class="hotitem" 
                v-for="item in newprodata"
                :key="item.id"
                tag="li"
                :to="'/item/'+item.spu_id"
              >
                <a class="tupian">
                  <img v-lazy="item.shop_info.ali_image">
                </a>
                <div class="hotinfo">
                  <h4 class="hottitle">{{item.name}}</h4>
                  <span class="itemtitle">{{item.shop_info.sub_title}}</span>
                  <div class="info">
                      <i class="money">￥</i>
                      <span>{{item.price}}</span>
                  </div>
                </div>
              </router-link>
            </ul>
          </div>
      </div>    
      <div class="border"></div>
      <!-- 坚果“足迹”系列保护套 -->
       <div class="hotsale">
        <header>
          <h2>坚果 Pro 2S “足迹”系列保护套</h2>
        </header>
        <div class="hotmain">
          <mt-swipe :show-indicators="false" :auto="0">
            <mt-swipe-item>
              <router-link 
                 v-for="item in keepdata"
                 :key="item.id"
                 tag="div"
                 :to="'/item/'+item.spu_id"
              >
                  <div class="hotitem">
                    <a class="tupian">
                      <img v-lazy="item.shop_info.ali_image">
                    </a>
                    <div class="hotinfo">
                      <h4 class="hottitle">{{item.name}}</h4>
                      <span class="itemtitle">{{item.shop_info.sku_mobile_sub_title}}</span>
                      <div class="info">
                          <i>￥</i>
                          <span>{{item.price}}</span>
                      </div>
                    </div>
                  </div>
              </router-link>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="border"></div>
      <!-- 官方配件 -->
      <div class="newproduct">
          <h2>官方配件</h2>
          <div class="contain">
            <ul class="clearfix">
              <router-link class="hotitem" 
                v-for="item in tooldata"
                :key="item.id"
                 tag="li"
                :to="'/item/'+item.spu_id"
              >
                <a class="tupian">
                  <img v-lazy="item.shop_info.ali_image">
                </a>
                <div class="hotinfo">
                  <h4 class="hottitle">{{item.name}}</h4>
                  <span class="itemtitle">{{item.shop_info.sub_title}}</span>
                  <div class="info">
                      <i class="money">￥</i>
                      <span>{{item.price}}</span>
                  </div>
                </div>
              </router-link>
            </ul>
          </div>
      </div>
      <div class="border"></div>   
      <!-- 两张图 -->
      <div class="twopics">
        <router-link class="twopic" 
          v-for="item in twopicsdata"
          :key="item.id"
           tag="div"
          :to="'/item/' + item.linkUrl.replace(/[^0-9]/ig,'')"
        >
          <img v-lazy="item.src">
        </router-link>
      </div>
      <div class="border"></div> 
      <!-- 品牌周边 -->
      <div class="near">
         <header>
          <h2>品牌周边</h2>
        </header>
        <ul>
          <router-link class="nearitem" 
            v-for="item in neardata"
            :key="item.id"
             tag="li"
            :to="'/item/'+item.spu_id"
          >
             <img v-lazy="item.shop_info.ali_image">
            <div class="nearinfo">
              <h5>{{item.shop_info.sku_mobile_title}}</h5>
              <p>{{item.shop_info.sku_mobile_sub_title}}</p>
              <i class="nearm">¥</i>
              <span>{{item.price}}</span>
            </div>
          </router-link>
        </ul>

      </div>
      <div class="border"></div> 
      <!-- 4张图 -->
      <div class="fourpics">
        <ul>
          <router-link class="fouritem" 
            v-for="item in secondpics"
            :key="item.src"
             tag="li"
            :to="'/item/' + item.linkUrl.replace(/[^0-9]/ig,'')"
            >
            <img v-lazy="item.src">
          </router-link>
        </ul>
      </div>
       <div class="border"></div> 
    </section>

    
  </div>
</template>
<script>
let menuConfig=[
  {
    title:'手机',
    id:64,
    img:require('@/assets/phone.icon.png')
  },
  {
    title:'空气净化',
    id:77,
    img:require('@/assets/air.icon.png')
  },
  {
    title:'官方配件',
    id:60,
    img:require('@/assets/peijian.icon.png')
  },
  {
    title:'品牌周边',
    id:69,
    img:require('@/assets/zhoubian.icon.png')
  },
  {
    title:'好物优选',
    id:61,
    img:require('@/assets/love.icon.png')
  }
]
import axios from 'axios'
export default {
  data(){
    return{
      bannerdata:[],
      menuConfig,
      hotsaledata:[],
      picturesdata:[],
      newprodata:[],
      keepdata:[],
      tooldata:[],
      twopicsdata:[],
      neardata:[],
      secondpics:[],
      hasdata:false
    }
  },
    methods: {
  
  },
  async created(){
    //1.请求轮播图数据 3.请求图片数据
    let {data} = await this.$api.SwipeList()
    this.bannerdata = data.banner.dataList;
    this.picturesdata = data.floors[1].dataList;
    this.twopicsdata = data.floors[6].dataList;
    this.secondpics = data.floors[11].dataList;
    this.hasdata=true;
    //console.log(this.secondpics)
    //2.请求菜单数据
    let idlist = data.floors[0].dataList; //拿到(idlist) /abc 用什么替换前面的网址
    axios.get(`/abc/product/skus?ids=${idlist.join()}&with_spu=true`).then(({data}) => {
      this.hotsaledata = data.data.list;
      this.hasdata=true;
      // console.log(this.hotsaledata)
    })
    //3.新品首发数据、足迹数据、官方数据、周边
    let idlist2 = data.floors[2].dataList;
     axios.get(`/abc/product/skus?ids=${idlist2.join()}&with_spu=true`).then(({data}) => {
      this.newprodata = data.data.list;
      //  console.log(this.newprodata)
       this.hasdata=true;
    })
    let idlist3 = data.floors[3].dataList;
     axios.get(`/abc/product/skus?ids=${idlist3.join()}&with_spu=true`).then(({data}) => {
      this.keepdata = data.data.list;
      //  console.log(this.keepdata)
       this.hasdata=true;
    })
    let idlist4 = data.floors[5].dataList;
     axios.get(`/abc/product/skus?ids=${idlist4.join()}&with_spu=true`).then(({data}) => {
      this.tooldata = data.data.list;
      //  console.log(this.tooldata)
       this.hasdata=true;
    })
    let idlist5 = data.floors[8].dataList;
     axios.get(`/abc/product/skus?ids=${idlist5.join()}&with_spu=true`).then(({data}) => {
      this.neardata = data.data.list;
      //  console.log(this.neardata)
       this.hasdata=true;
    })
    
  }
}
</script >
<style scoped>
  .clearfix:after{
    content:"";
    display:block;
    clear:both;
  }
  h5,p{
    padding:0;
    margin:0;
  }
  ul{
    padding:0;
    margin:0;
    list-style:none;
  }
  .main{
    margin-bottom:3.125rem;
  }
 .van-swipe-item img {
      width: 100%;
      height: 100%;
 }
  .menu{
    margin:1.5rem 0.75rem 1.125rem 0.75rem;
    display: flex;
    text-align: center;
    background: #fff;
  }
  .menu-item{
    float:left;
    width:20%;
  }
  .menu img{
    display:inline-block;
    width:1.5625rem;
    height:1.5625rem;
    margin:0.1875rem;
  }
  .menu span {
    display:block;
    margin-top:0.0625rem;
    color: #666;
    font-size:0.5rem;
  } 
  .lunbo{
    margin: 0.625rem;
    height: 7.5rem;
  }
  .lunbo img {
    width: 100%;
    height: 100%;
  }
  .border{
    width:100%;
    height: 0.5rem;
    background:#e1e1e1;
  }
   h2{
    font-weight: 700;
    color: #666;
    margin:0;
    padding: 0;
    font-size:1rem;
    text-indent:0.75rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom:1px solid #f2f2f2;
  }
  .hotmain{
    padding-top: 1.25rem;
    margin-bottom:0.375rem;
    height:13rem;
  }
  .hotitem .tupian{
    display: block;
    border:1px solid #f9f9f9;
    border-radius: 3px;
    width: 10.625rem;
    height: 10.625rem;

  }
  .tupian img {
    width:100%;
    height:100%;
  }
  .hottitle{
   font-size:0.6rem;
   margin: 0;
   padding:0;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
  }
  .hotinfo .itemtitle{
    margin-top: 0.375rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .5rem;
    line-height: 1.2;
    color: #7f7f7f;
    min-height: .6rem;
    display:block;
  }
  .hotinfo{
    padding: 0.5rem 0.75rem 1.125rem 0.75rem;
  }
  .info{
    color: #d44d44;
    font-weight: 700;
    font-size: 0.6rem;
  }
  .info i {
    font-style: normal;
    font-size: 0.5rem;
  }
  .van-swipe{
    padding: 0 0.3125rem;
  }
  .pictures{
    width:21.875rem;
    height:17.8125rem;
  
    padding:0.875rem 0.75rem;
  }
  .newpro-main{
    padding:1.125rem 0.75rem 0 0.75rem;
    background:skyblue;
    width:100%;
    height:47.5rem;
  }
  .newpro-main ul{
    display:flex;
  }
  .newpro-item{
    float:left;
    width:10.625rem;
    height:15.8125rem;
    background:red;
  }
  .mint-swipe-items-wrap > div.is-active{
    display: flex;
    overflow: scroll;
  }
  .hotitem{
    width: 10.5rem;
    float:left;
    margin-right:0.5rem;
  }
  .morepics{
    padding:0.875rem 0.75rem;
    display: flex;
    justify-content: center;
  }
  .left{
    float:left;
    padding-right:0.125rem;
  }
  .left img {
    width:100%;
  }
  .leftitem{
    margin-bottom:0.5rem;
    width:10.625rem;
    height:5.5625rem;

  }
  .left li:nth-child(3){
    margin-bottom:0;
  }
  .right{
    padding-left:0.25rem;
    float:left;
    width:10.625rem;
    height:17.8125rem;
  }
  .right img{
    width:100%;
    height:100%;
  }

  .contain{
    overflow: hidden;
    padding: 1.125rem 0.75rem 0 0.75rem; 
  }
  .clearfix:after{
    content:"";
    display:block;
    clear:both;
  }

  li:nth-child(2n-1){
    margin-right:0.625rem;
  }
  .hotitem .tupian{
    display: block;
    border-radius: 1px;
    width: 7.875rem;
    height: 7.875rem;

  }
  .tupian img {
    width:100%;
    height:100%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .hottitle{
   font-size: 0.8rem;
   margin: 0;
   padding:0;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
  }
  .hotinfo .itemtitle{
    color: #7f7f7f;
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    margin-top: 0.375rem;
  }
  .hotinfo{
    padding: 0.5rem 0.75rem 1.125rem 0.75rem;
    width:6.375rem;
  }
  .info{
    color: #d44d44;
    font-weight: 700;
    font-size: 0.8rem;
    margin-top:0.125rem;
  }
  .contain .info .money {
    font-style: normal;
    font-size: 0.8rem;
  }
  .newproduct .hotitem{
    width:45%;
  }
  .newproduct .tupian{
    width:100%;
    height:100%;
  }
  .newproduct li:nth-child(2n){
    margin-right:0;
  }
  .newproduct li:nth-child(2n-1){
    margin-right: 1.625rem;
  }
 .newproduct .hotinfo{
   width:9.0625rem;
 }
 .twopics{
   padding:0.875rem 0.75rem 0 0.75rem;
 }
  .twopic img {
    width:100%;
  }
  .twopic{
     margin-bottom:0.5rem;
  }

  .nearinfo{
    padding-bottom: 2.625rem;
  }
  .nearitem{
    display: flex;
    padding: 0.75rem;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
   .nearitem img{
     width:7.875rem;
     height:7.875rem;
     background:pink;
     margin-right:2rem;
     box-sizing: border-box;
   }
   .nearinfo h5{
    overflow: hidden;
    font-weight: 700;
    font-size: .8rem;
    color: #333;
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
      height: 57rem;
    }
  
  .fourpics{
    padding:0.75rem 0.625rem 0 0.625rem;
  }
  .fourpics ul{
    overflow:hidden;
  }
  .fouritem{
    float:left;
    margin-bottom:0.625rem;
    width:48%;
  }
  .fouritem img{
    width:100%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
</style>

