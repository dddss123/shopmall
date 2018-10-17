<template>
  <div>
  <!--加入购物车、购买区域-->
    <van-goods-action>
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
      <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
    </van-goods-action>
 </div>
</template>

<script>
 export default {
  methods: {
    onClickMiniBtn() {
      this.$router.push('/cart')
    },
    onClickBigBtn() {
     console.log(123)
    }
  }
}
</script>
