<template>
    <div class="phonetop">
        <ul>
            <router-link
                v-for="item in newData"
                :key="item.id"
                :to="'/item/'+item.id"惊讶
            >
                <div class="product-item">
                    <a class="left">
                        <img :src="item.sku_info[0].ali_image">
                    </a>
                   
                    <div class="right">
                        <h5>{{item.name}}</h5>
                        <span>{{item.shop_info.spu_mobile_sub_title}}</span>
                        <ul ref="neicuns">
                            <li class="neicun">
                                <span>4G<span>+</span>64GB</span>
                            </li>
                            <li class="neicun">
                                <span>64G<span>+</span>4GB</span>
                            </li>
                            <li class="neicun">
                                <span>64G<span>+</span>128GB</span>
                            </li>
                        </ul>
                        <div class="info">
                            <i>￥</i>
                            <span>{{item.price}}</span>
                        </div>
                    </div>
                </div>
                
            </router-link> 
        </ul>
    </div>
   
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                infoDate:[],
                newData:[]
            }
        },
         //1.请求数据 根据不同的id渲染不同的数据，跳转到对应id的页面
        async created(){
            let id = this.$route.params.id
            axios.get(`/abc/product/spus?category_id=${id}&page=1&page_size=20&sort=sort`).then(({data}) => {
                this.infoDate = data.data.list;
                // console.log(this.infoDate)
                let newData = this.infoDate.filter(item => item.sku_info ? true : false)
                // console.log(newData)
                this.newData=newData;
             })
        }
    }
</script>

<style scoped>
    .phonetop{
        padding-top:40px;
    }
    .product-item{
        padding: 1.8vh 3.2vw;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom:0.3vw solid #e1e1e1;
    }
    .product-item .left{
        width:126px;
        height:126px;
        /* background:pink; */
        margin-right:8.5vw;
    }
    .right h5 {
        padding:0;
        margin:0;
        font-size:4.2vw;
        line-height:5.2vh;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .right span{
        color: #7f7f7f;
        font-size:3.2vw;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    .right ul{
        margin-top:1.2vh;
        display: flex;
        flex-flow: row wrap;
    }
    .right .neicun{
        background: #e5efff;
        border-radius:1.2vw;
        padding:0.3vh 1.6vw;
        margin:0.3vh 0.5vw;
        text-align:center;
        line-height:3vh;
        font-size:3.2vw;
    }
    .right .neicun span{
      color: #3965cc;
      font-weight: 700;
    }
   
    .left{
        box-sizing: border-box;
        flex-shrink: 0;
    }
   
    .left img{
        width:100%;
        height:100%;
    }
    .right{
        overflow: hidden;
    }
     .right .info{
        
        font-weight: 700;
        font-size: 2.7vw;
        margin-top:2.4vh;
    }
    .right .info span{
        color: #d44d44;
        font-size: 4vw;
    }
     .right .info i {
        font-style: normal;
        font-size: 4.2vw;
        color: #d44d44;
        font-weight:800;
    } 
    .van-nav-bar__title{
        font-weight:800;
    }
</style>