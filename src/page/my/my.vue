<template>
   <div class="my">
     <van-row class="my-head">
       <van-col span="6">
           <img src="@/assets/user-default.png"></img>
       </van-col>
       <van-col span="12">
         <van-button v-if="!isLogin"  size="small" type="default" @click="click" >登录/注册</van-button>
         <div v-else>{{name}}</div>
         <div>我们一路相陪~</div>
       </van-col>
   </van-row>


     <van-cell-group class="my-body">
       <van-cell icon="info-o" title="关于我们"  is-link/>
     </van-cell-group>

     <foot-nav :index="1"></foot-nav>
   </div>
</template>

<script>
  import nav from '@/components/nav';

  export default {
      name: "my",
      data(){
        return{
          isLogin:false,
          name:""
        }
      },
      components:{
        'foot-nav':nav,
      },
      methods:{
        click(){
          //需要调用获取微信的头像
          this.isLogin = true;
          if(this.isLogin){
              this.name="colin";
          }
        }
      }
  }
</script>

<style lang="less"  scoped>

.my{
  height: 100%;
  &-head{
    padding: 30px 0;
    img{
        width: 40px;
        height: 40px;
    }
    .van-col:nth-child(1){
      padding-top: 10px;
    }
    .van-col:nth-child(2){
        text-align: left;
        color: #40E0D0;
        font-size: 14px;

      div{
        height: 30px;
        line-height: 30px;
      }

    }
    .van-button{
      border-color: #40E0D0 !important;
      color: #40E0D0 !important;
      font-size: 14px;
    }
  }

  &-body{
    text-align: left;
  }
}


</style>
