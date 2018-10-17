import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let Home=() =>import('@/components/tabbar/home/home.vue') 
let classify=() =>import('@/components/tabbar/classify.vue')
let aboutMe=() =>import('@/components/tabbar/aboutMe.vue')
let shopCar=() =>import('@/components/tabbar/shopCar.vue')
let Phone=() =>import('@/components/menu/phone.vue')
let TopBar=() =>import('@/components/public/topbar.vue')
let BottomBar=() =>import('@/components/public/bottombar.vue')
let GobackBar=()=>import('@/components/public/gobackbar.vue')
let Buybar=() =>import('@/components/public/buybar.vue')
let Item=() =>import('@/components/item.vue')
let search=() =>import('@/components/search.vue')
let cart=() =>import('@/components/cart.vue')
let login=() =>import('@/components/login.vue')
var router=new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      name:'Home',
      components:{
        top:TopBar,
        nav:BottomBar,
        default:Home
      }
    },
    {
      path:'/classify',
      name:'classify',
      components:{
        top:TopBar,
        nav:BottomBar,
        default:classify
      }
    },
    {
      path:'/shopCar',
      name:'shopCar',
      components:{
        default:cart,
        nav:BottomBar,
      }
    },
    {
      path:'/aboutMe',
      name:'aboutMe',
      components:{
        default:aboutMe,
        nav:BottomBar
      }
    },
    {
      path:'/classify/:id',
      components:{
        default:Phone,
        top:GobackBar,
        nav:BottomBar
      }
    },
    {
      path:'/item/:id',
      name:'Item',
      component:Item
    },
    {
      path:'/search',
      name:search,
      component:search
    },
    {
      path:'/cart',
      name:cart,
      components:{
        default:cart,
        nav:BottomBar
      }
    },
    {
      path:'/login',
      name:login,
      component:login
    },
    {
      path: '/',
      redirect:'/home',
    }
  ]
})
export default router;