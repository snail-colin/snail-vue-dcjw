<template>
    <div class="index">

      <van-row class="home-banner" type="flex"  justify="center">
        <van-col>
          <img src="@/assets/banner01.png"/>
        </van-col>
      </van-row>

      <van-row class="home-toolbar"  >

        <van-col v-for='(o,index) in toolbars' :key='index' :span='setProperty(o.span)'>
          <router-link :to='setProperty(o.path)'  @click.native="go(o.isAvail)" >
            <img :src="setIconPath(o.iconName)" />
            {{o.text}}
          </router-link>
        </van-col>

      </van-row>

      <van-row class="home-toolbar2">
        <van-col>
            <div class="tmlx"><img src="@/assets/tmlx.png" /></div>
            <div class="tip">题目练习</div>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-between" class="home-tmlx-nav">
        <van-col v-for='(o,index) in tmlxNav' :key='index' :span='setProperty(o.span)'>
          <router-link :to='setProperty(o.path)'  @click.native="go(o.isAvail)" >
            <i :class="setProperty(o.className)"></i>
            <div>{{o.text}}</div>
          </router-link>
        </van-col>
      </van-row>


      <foot-nav :index="0"></foot-nav>



    </div>
</template>

<script>
  import nav from '@/components/nav';

export default {
  name: "index",
  components:{
    'foot-nav':nav,
  },
  data(){
    return{
      toolbars:[
        {
          text:"课堂",
          path:"/",
          iconName:"kt",
          span:6,
          isAvail:false
        },
        {
          text:"学车流程",
          path:"/",
          iconName:"yd",
          span:6,
          isAvail:false
        },
        {
          text:"找驾校",
          path:"/",
          iconName:"jxcx",
          span:6,
          isAvail:false
        },
        {
          text:"关于",
          path:"/",
          iconName:"gy",
          span:6,
          isAvail:false
        },
      ],

      //题目导航
      tmlxNav:[
        {
          text:"科目一练习",
          path:"/tmlx",
          className:"iconfont icon-zaixiankaoshi blue",
          span:6,
          isAvail:true
        },
        {
          text:"模拟考试",
          path:"/",
          className:"iconfont icon-qiche blue",
          span:6,
          isAvail:false
        },
        {
          text:"暂无",
          path:"/",
          className:"iconfont icon-zanwu",
          span:6,
          isAvail:false
        },
      ],
    }
  },
  methods: {
    setProperty(value){
      return value;
    },
    setIconPath(iconName){
      return require("@/assets/icon-"+iconName+".png");
    },
    go(isAvail){
      if(!isAvail){
        this.$toast({
          duration:1000,
          message:'功能开发中'
        });
      }
    }
  }
}
</script>

<style lang="less" scoped >
.index{
  height: 100%;
}
.home{

  &-banner{
    img{
      width: 100%;
    }
  }
  &-toolbar{
    padding: 15px 0;
    font-size: 12px;

    img{
      width: 40px;
      height: 40px;
      display: block;
      margin: auto;
      text-align: center;
      padding-bottom: 5px;
    }
  }

  &-toolbar2{
    position: relative;
    display: block;
    height: 35px;

    .tmlx{
      position: absolute;
      left: 0px;
      top: 0px;
      height: 35px;
      z-index: 10;
    }
    .tip{
      font-size: 14px;
      text-align: center;
      position: absolute;
      width: 100%;
      margin-left: 10px;
      z-index: 11;
      height: 35px;
      line-height: 35px;
      color: #74e017;
    }
  }

  &-tmlx-nav{
     padding: 10px;
    .van-col{
      font-size: 12px;
      padding-bottom: 5px;
      border: 1px solid  #dbdbdb;
      border-radius:8px;
      padding: 10px;
      i{
        font-size: 50px;
      }
      .blue{
        color: #07ccf2;
      }
      div{
        margin-top: 5px;
      }
    }
  }
}

</style>
