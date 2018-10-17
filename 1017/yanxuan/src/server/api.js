import axios from 'axios'
let instace = axios.create({
  baseURL:'https://resource.smartisan.com/'
})
//获取轮播图数据
export function SwipeList() {
  return instace.get('marketing/mobile/index_753de430a421827d8cb0442a01a87ccf.json')
}
export function login(params) {
  let defaults = {
    username: ''  //
  }
  Object.assign(defaults, params);
  return instace.get('/login', { params: defaults })
}


export default {
  install(Vue){
    Vue.prototype.$api={
      SwipeList,
      login
    }
  }
}