<template>
<div>
  <van-search placeholder="请输入搜索关键词" 
    v-model="value"
    @keyup="searchinfo"
  />
  <van-cell-group
    v-for="(item,index) in searchdata"
    :key="index"
    v-show="!isshow"
  >
  <van-cell :title="item" @click="product(item)"/>
  </van-cell-group>
  <div>
    <ul v-show="isshow">
      <router-link class="nearitem"
        v-for="item in itemdata"
        :key="item.id"
        :to="'/item/'+item.id"
        tag="li"
      >
        <img v-lazy="item.sku_info[0].ali_image"> 
        <div class="nearinfo">
          <h5>{{item.name}}</h5>
          <p>{{item.shop_info.spu_sub_title}}</p>
          <i class="nearm">¥</i>
          <span>{{item.price}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</div>

</template>
<script>
import axios from 'axios';
  export default{
    data(){
      return{
        value:'',
        searchdata:[],
        itemdata:[],
        isshow:false,
      }
    },
    methods:{
      async searchinfo(){
        // console.log(this.value)
         let {data} = await axios(`/sousou/v1/search/suggest?keyword=${this.value}`)
          this.searchdata=data.data
          // console.log(this.searchdata)
         this.isshow = false; 
      },
      //渲染搜索的页面
      async product(item){
        // console.log(item)
        let {data}= await axios(`/sousou/v1/search/result?keyword=${item}&page=1&size=20&sort=0`)
        let list = data.data.spu;
        // console.log(list)
        axios(`/abc/product/spus?ids=${list.join()}`).then(({data:{data}})=>{
          this.itemdata = data.list;
          console.log(this.itemdata)
        })
        this.isshow = true;
      }

    }
 
    
  }
</script>
<style scoped>
  .nearinfo{
    padding-bottom: 2.625rem;
    overflow: hidden;
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
     margin-right:2rem;
     box-sizing: border-box;
    flex-shrink: 0;
   }
   .nearinfo h5{
    overflow: hidden;
    font-weight: 700;
    font-size: .8rem;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

</style>
