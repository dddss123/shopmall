import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//每次进入网站。肯定调用main.js 调用时，从本地存储中，调取购物车数据,放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state:{
    car:car,//将购物车中的商品数据用数组存储，名称、个数、价格
  },
  mutations:{
    //加入小购物车
    addToCar(state,goodsinfo){
      var flag= false //购物车中没有对应的商品
      state.car.some((item)=>{
      //如果已有商品，只增加数量
        if(item.id==goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag= true
          return true
        }
      })
      //如果购物车中没有，加入商品
      if(!flag){
        state.car.push(goodsinfo)
      }
      //更新car之后。把car数组存储到本地localstorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //更新后的商品数据
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item =>{
        if(item.id == goodsinfo.id){
          console.log(goodsinfo.count)
          item.count = goodsinfo.count
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //删除商品 从store中通过id删除对应的数据
    removeFromCar(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //点击开关。同步最新的状态
    updateGoodsSelected(state,info){
     
      state.car.some(item => {
        if(item.id+"01" ==info.id){
          item.selected = info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }

    
     
  },
  //相当于filters和计算属性
  getters:{
    //购物车小角标，商品总数
    getAllCount(state){
      var c = 0;
      state.car.forEach((item)=>{
        c += item.count
      })
      return c
    },
    //购物车中的商品个数 {id:个数}
    getGoodsCount(state){
      var o = {}
      state.car.forEach(item =>{
        // console.log(item.id)
        o[item.id+'01']=item.count
      })
    
      return o  
    },
    //购物车中商品是否选中
    getGoodsSelected(state){
      var o = {}
    //key value 把id 和是否选中对应
      state.car.forEach(item => {
        o[item.id+'01'] = item.selected
      })
      return o 
    },
    //总数
    getGoodsCountAndAllPrice(state){
      var o ={
        count:0,//勾选的数量
        amount:0,//勾选的总价
      }
      state.car.forEach(item=>{
        if(item.selected){

          o.count +=item.count
          o.amount +=item.price * item.count
        }
      })
      return o                                                                                                                                      
    }
  }
})
export default store;