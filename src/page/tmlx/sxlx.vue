<template>
    <div class="sxlx">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">

        <van-nav-bar
          title="顺序练习"
          left-text="返回"
          :right-text="progress"
          left-arrow
          @click-left="onClickLeft"/>

          <van-cell-group>
            <div v-for='(itme,index) in questionMap' :key='index' v-if="itme.ishow">
              <van-cell   :value="setProperty(itme.question,itme.type)"/>
              <van-cell  v-for='(citme,cindex) in itme.option' :key='cindex'   :title="citme.name" clickable @click="click(index,cindex,citme.isRight)">
                <van-icon v-if="!citme.checked && !citme.isShow"  slot="right-icon" class="van-icon-check"  name="van-icon-check" />
                <van-icon v-if="citme.checked && citme.isShow"  slot="right-icon" class="icon-checked"  name="checked" />
                <van-icon v-if="!citme.checked && citme.isShow"  slot="right-icon" class="icon-clear"  name="clear" />
              </van-cell>

              <transition  name="custom-classes-transition"  enter-active-class="animated zoomIn" >
              <div class="sxlx-stfx" v-if="itme.checked" >
                <div class="title">
                  <div class="title-color">&nbsp;</div>
                  <div>试题分析</div>
                  <div class="title-rate"><van-rate v-model="value" :size="size" /></div>
                </div>
                <div class="remark">
                  <div>{{itme.remark}}</div>
                </div>
              </div>
              </transition>
            </div>
          </van-cell-group>
      </v-touch>
    </div>
</template>

<script>
    export default {
      name: "sxlx",
      data() {
        return {
          value:3,
          size:16,
          total:2,
          num:1,
          //默认0
          currentIndex:0,
          questionMap:[
            {
              question: "第一题",
              id: 1,
              type:0,
              remark:"跟进计划计划还比你好吧",
              ishow:true,
              checked: false,
              option: [
                {
                  name: '单选框 1.',
                  value: 1,
                  isRight:true,
                  checked: false,
                  isShow:false
                },
                {
                  name: '单选框 2',
                  value: 2,
                  isRight: false,
                  checked: false,
                  isShow:false
                },
                {
                  name: '单选框 3',
                  value: 3,
                  isRight: false,
                  checked: false,
                  isShow:false
                }
              ]
            },
            {
              question: "第二题",
              id: 2,
              type:1,
              remark:"23213213213",
              ishow:false,
              checked: false,
              option: [
                {
                  name: '第二单选框 1.',
                  value: 1,
                  isRight:true,
                  checked: false,
                  isShow:false
                },
                {
                  name: '第二单选框 2',
                  value: 2,
                  isRight: false,
                  checked: false,
                  isShow:false
                },
                {
                  name: '第二单选框 3',
                  value: 3,
                  isRight: false,
                  checked: false,
                  isShow:false
                }
              ]
            }
          ]
        }
      },
      computed: {
          progress:function(){
            return (this.currentIndex+1) + "/" + this.total;
          },
      },
        methods:{
          setProperty(value,type){
            return value;
          },
          onClickLeft() {
            this.$router.back();
          },
          click(pindex,cindex,isRight){
              if(!this.questionMap[pindex].checked){
                if(!isRight){
                  var optionArray = this.questionMap[pindex].option;
                  for(var i = 0;i< optionArray.length;i++){
                    var option = optionArray[i];
                    if(option.isRight){
                      option.checked=true;
                      option.isShow=true;
                      break;
                    }
                  }
                  this.$toast({
                    duration:1000,
                    message:'答案不正确'
                  });
                }
                this.currentIndex=pindex;
                this.questionMap[pindex].option[cindex].checked=isRight;
                this.questionMap[pindex].option[cindex].isShow=true;
                this.questionMap[pindex].checked=true;
                //需要提交答案

              }
          },
          onSwipeLeft(){
            this.currentIndex++;
            this.currentIndex > this.total-1 ? this.currentIndex = this.total-1 :this.currentIndex;
            for (var i = 0 ; i < this.questionMap.length; i++){
              this.questionMap[i].ishow=false;
            }
            this.questionMap[this.currentIndex].ishow=true;
          },
          onSwipeRight(){
            this.currentIndex--;
            this.currentIndex < 0 ? this.currentIndex = 0 :this.currentIndex;
            console.info( this.currentIndex);
            for (var i = 0 ; i < this.questionMap.length; i++){
              this.questionMap[i].ishow=false;
            }
            this.questionMap[this.currentIndex].ishow=true;

          }
        }
    }
</script>

<style lang="less" scoped>
.sxlx{
  text-align: left;

  .van-icon-check{
    font-size: 19px;
    padding-top: 3px;
  }
  .icon-checked{
    font-size: 19px;
    padding-top: 3px;
    color: #06bf04;
  }
  .icon-clear{
    font-size: 19px;
    color: red;
    padding-top: 3px;
  }

  &-stfx{
    margin-top: 30px;

    .title{
      height: 16px;
      line-height: 16px;
      div{
        float: left;
        margin-left: 10px;
      }
      &-color{
        background-color:aqua;
      }
      .title-rate{
        float: right;
        margin-right: 10px;
      }
    }

    .remark{
      padding: 10px;
      margin: 20px 10px 10px 10px;
      border: 1px solid  #dbdbdb;
      border-radius:5px;
      min-height: 200px;
      background-color: aliceblue;
    }
  }
}
</style>
