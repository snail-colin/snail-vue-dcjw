<template>
    <div class="sxlx">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">

        <van-nav-bar
          title="顺序练习"
          left-text="返回"
          :right-text="num"
          left-arrow
          @click-left="onClickLeft"/>

          <van-cell-group>
            <div v-for='(itme,index) in questionMap' :key='index'>
              <van-cell   :value="setProperty(itme.question)"/>

              <van-cell  v-for='(citme,cindex) in itme.option' :key='cindex'   :title="setProperty(citme.name)" clickable @click="click(index,cindex,citme.isRight)">
                <van-icon v-if="citme.checked && citme.isShow"  slot="right-icon" class="icon-checked"  name="checked" />
                <van-icon v-if="!citme.checked && citme.isShow"  slot="right-icon" class="icon-clear"  name="clear" />
              </van-cell>
            </div>
          </van-cell-group>


        <div class="sxlx-stfx" v-if="disabled">
          <div class="title">
            <div class="title-color">&nbsp;</div>
            <div>试题分析</div>
            <div class="title-rate"><van-rate v-model="value" :size="size" /></div>
          </div>

          <div class="remark">
            <div>{{context}}</div>
          </div>
        </div>
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
          context:"",
          num:"1/100",
          disabled:false,
          currentIndex:1,
          questionMap:[
            {
              question: "第一题",
              id: 1,
              type:0,
              remark:"跟进计划计划还比你好吧",
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
            }
          ]
        }
      },
        methods:{
          setProperty(value){
            return value;
          },
          onClickLeft() {
            this.$router.back();
          },
          click(pindex,cindex,isRight){
              if(!this.disabled){
                if(!isRight){
                  var optionArray = this.questionMap[pindex].option;
                  for(var i = 0;i< optionArray.length;i++){
                    var option = optionArray[i];
                    if(option.isRight == true){
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
                this.disabled=true;
                this.context=this.questionMap[pindex].remark
              }
          },
          onSwipeLeft(){

          },
          onSwipeRight(){

          }
        }
    }
</script>

<style lang="less" scoped>
.sxlx{
  text-align: left;


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
