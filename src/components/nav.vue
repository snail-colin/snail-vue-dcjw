<template>
    <div class="foot-nav">
        <van-tabbar v-model="active">
         <van-tabbar-item icon="home" to="/">首页</van-tabbar-item>
         <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
      name: "foot-nav",
      props:["index"],
      data(){
          return{
            active:this.index
          }
      },
    }
</script>

<style scoped>

</style>
