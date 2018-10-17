<template>
    <div class="main">
        <div class="background">
            <img src="../assets/logo1.png">
            <van-cell-group>
                <van-field
                    placeholder="请输入手机号"
                    left-icon="contact"
                    v-model="value1"
                />
                <van-field
                    placeholder="请输入密码"
                    left-icon="password-not-view"
                    v-model="value2"
                    type="password"
                />
            </van-cell-group>
            <van-button type="danger" @click="login()">登 录</van-button>
        </div> 
    </div>
   

</template>
<script>
     export default{
         data(){
            return{
                value1:'',
                value2:''
            }
         },
         //挂载后
         mounted(){
            //  console.log(this.$local)
         },
         methods:{
             //点击登陆
             login(){
                if(!this.value1||!this.value2){
                    alert('请输入您的用户和密码')
                }else{
                    this.$local.save('islogin',{
                        usename:this.value1,
                        loginstate:true
                    })
                    this.$router.push('/home')
                }
             }
         }
     }
     
</script>

<style scoped>
    .main{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .background{
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 47%;
        transform: translateY(-50%);
    }
    .background img{
        width:70%;
        height:50%;
        border-radius:50%;
    }
    .van-button--normal{
        padding: 0 65px;
        margin-top: 26px;
        border-radius: 50px;

    }
    .van-button--danger{
        background-color: #e56daa;
        border: 1px solid #e56daa;
    }
    .van-cell{
        padding:10px 50px; 
    }
  
</style>