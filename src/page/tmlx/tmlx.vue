<template>
    <div class="tmlx">
      <van-nav-bar
        title="科目一练习"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>

      <van-row type="flex" justify="space-around">
        <van-col >
          <van-circle
            v-model="currentRate"
            color="#BF3EFF"
            fill="#fff"
            size="120px"
            layer-color="#eee"
            :text="text"
            :rate="rate"
            :speed="100"
            :clockwise="true"
            :stroke-width="60"
          />
        </van-col>
        <van-col>
            <i class="iconfont icon-lianxi"></i>
            <p>顺序练习</p>
        </van-col>

      </van-row>

      <van-row type="flex" justify="space-around">
        <van-col >
          <van-circle
            v-model="currentRate"
            color="#13ce66"
            fill="#fff"
            size="120px"
            layer-color="#eee"
            :text="text"
            :rate="rate"
            :speed="100"
            :clockwise="true"
            :stroke-width="60"
          />
        </van-col>
        <van-col>
          <i class="iconfont icon-iconfontsuijibofang0101"></i>
          <p>随机练习</p>
        </van-col>
      </van-row>

    </div>
</template>

<script>
    export default {
      name: "tmlx",
      data() {
        return {
          currentRate: 0,
          rate:10
        };
      },
      methods: {
        onClickLeft() {
          this.$router.back();
        },
      },
     computed: {
       text() {
         return this.currentRate.toFixed(0) + '%'
       }
     }
    }
</script>

<style lang="less" scoped>
  .tmlx{
    height: 100%;

    .van-row{
      margin: 20px;
      color: #fff;
      border: 1px solid  #07ccf2;
      border-radius:8px;
      background-color: deepskyblue;

      height: 130px;
      .van-col:nth-child(2){
        padding-top: 25px;
      }

      .van-col{
        .iconfont{
          font-size: 34px;

        }
        .van-circle{
          margin: 4px;
        }
      }
    }
    .van-row:nth-child(3){
      background-color: lime;
    }
  }
</style>
