<template>
    <div class="tmlx">
      <van-nav-bar
        title="科目一练习"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>

      <router-link :to="{path:'/sxlx',query: {recordIndex: sxRecordIndex,ptitle:'顺序练习',ptype:0,openid:openid}}"   >
        <van-row type="flex" justify="space-around">
          <van-col >
            <van-circle
              v-model="currentRate1"
              color="#BF3EFF"
              fill="#fff"
              size="120px"
              layer-color="#eee"
              :text="currentRate1.toFixed(0) + '%'"
              :rate="rate1"
              :speed="100"
              :clockwise="true"
              :stroke-width="60"
            />
          </van-col>
          <van-col>
              <i class="iconfont icon-lianxi1"></i>
              <p>顺序练习</p>
          </van-col>
        </van-row>
      </router-link>

      <router-link :to="{path:'/sxlx',query: {recordIndex: sjRecordIndex,ptitle:'随机练习',ptype:1,openid:openid}}"  >
        <van-row  class="sjlx" type="flex" justify="space-around">
          <van-col >
            <van-circle
              v-model="currentRate2"
              color="#13ce66"
              fill="#fff"
              size="120px"
              layer-color="#eee"
              :text="currentRate2.toFixed(0) + '%'"
              :rate="rate2"
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
      </router-link>
      <foot-nav ></foot-nav>
    </div>
</template>

<script>
  import nav from '@/components/nav';
    export default {
      name: "tmlx",
      components:{
        'foot-nav':nav,
      },
      data() {
        return {
          currentRate1:0,
          currentRate2: 0,
          openid:"test-openid",
          //目标进度值，需动态修改
          rate1:0,
          rate2:0,
          sxRecordIndex:1,
          sjRecordIndex:1,
        };
      },
      methods: {
        onClickLeft() {
          this.$router.back();
        },
        setProperty(value){
          return value;
        },
        go(isAvail){
          if(!isAvail){
            this.$toast({
              duration:1000,
              message:'功能开发中'
            });
          }
        },
        initData(){
          this.$http.post('/dcwj/getAnswerSchedule.htm', {
            openid:this.openid,
          }).then((response)=>{
            let rst =  response.data;
            console.log(rst);
            if(rst.recordCount_0){
              this.sxRecordIndex = rst.recordCount_0;
              this.rate1 = Math.floor((rst.recordCount_0/rst.total_0)*100);
            }
            if(rst.recordCount_1){
              this.sjRecordIndex = rst.recordCount_1;
              this.rate2 = Math.floor((rst.recordCount_1/rst.total_1)*100);
            }
          }).catch(function (response) {
            console.log(response);
          });
        }
      },
     computed: {

     },
      created:function(){
        this.initData();
      },
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

  }
  .sjlx{
    background-color: lime !important;
  }

</style>
