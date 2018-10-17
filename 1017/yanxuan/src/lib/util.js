let local ={
  save(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  },
  //取
  fetch(key){
    //parse 字符串转数字
    return JSON.parse(localStorage.getItem(key))||{}
  }
}

export default {
  install:function(vm){
    vm.prototype.$local = local
  }
}