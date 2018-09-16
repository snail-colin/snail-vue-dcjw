<template>
    <div class="sxlx">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">

        <van-nav-bar
          :title="title"
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
                  <div  v-html="itme.remark"></div>
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
          total:0,
          ptype:this.$route.query.ptype,
          title:this.$route.query.ptitle,
          //默认0
          currentIndex:this.$route.query.recordIndex == undefined?0:this.$route.query.recordIndex-1,
          isSelect:false,
          pageSize:9999,
          pageNum:1,
          openid:this.$route.query.openid,
          //记录下标,默认0
          recordIndexShow:this.$route.query.recordIndex == undefined?0:this.$route.query.recordIndex-1,
          questionMap:[]
        }
      },
      computed: {
          progress:function(){
            return (this.currentIndex+1) + "/" + this.total;
          },
      },
      created:function(){
        this.initData();
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
                let msg = '存入答案到题集';
                if(!isRight){
                  let optionArray = this.questionMap[pindex].option;
                  for(let i = 0;i< optionArray.length;i++){
                    let option = optionArray[i];
                    if(option.isRight){
                      option.checked=true;
                      option.isShow=true;
                      break;
                    }
                  }
                  msg = '存入错误答案到题集';
                }
                this.currentIndex=pindex;
                this.questionMap[pindex].option[cindex].checked=isRight;
                this.questionMap[pindex].option[cindex].isShow=true;
                this.questionMap[pindex].option[cindex]['select']=true;
                this.questionMap[pindex].checked=true;
                this.isSelect=true;
                //需要提交答案
                this.$toast({
                  duration:1000,
                  message:msg
                });
                this.$http.post('/dcwj/saveAnswer.htm', {
                  type:this.ptype,
                  openid:this.openid,
                  currentIndex:this.currentIndex,
                  question:JSON.stringify(this.questionMap[pindex])
                }).then((response)=>{
                  console.log(response);
                }).catch(function (response) {
                  console.log(response);
                });
              }
          },
          onSwipeLeft(){
            if(this.questionMap[this.currentIndex] != undefined && this.questionMap[this.currentIndex].checked){
              this.currentIndex++;
              this.currentIndex > this.total-1 ? this.currentIndex = this.total-1 :this.currentIndex;
              if(this.currentIndex == this.pageSize * this.pageNum ){
                this.pageNum++;
                this.initData(true);
              }else{
                for (let i = 0 ; i < this.questionMap.length; i++){
                  this.questionMap[i].ishow=false;
                }
                this.questionMap[this.currentIndex].ishow=true;
              }
            }
          },
          onSwipeRight(){
            this.currentIndex--;
            this.currentIndex < 0 ? this.currentIndex = 0 :this.currentIndex;
            for (let i = 0 ; i < this.questionMap.length; i++){
              this.questionMap[i].ishow=false;
            }
            this.questionMap[this.currentIndex].ishow=true;
          },
          initData(isSwipeLeft){
            this.$http.post('/dcwj/getQuestionList.htm', {
              type:this.ptype,
              openid:this.openid
            }).then((response)=>{
                let rst =  response.data;
                this.total=rst['total'];
                this.questionMap =this.questionMap.concat(rst.resultList);
                this.questionMap[this.recordIndexShow].ishow=true;
                if(isSwipeLeft){
                  for (let i = 0 ; i < this.questionMap.length; i++){
                    this.questionMap[i].ishow=false;
                  }
                  this.questionMap[this.currentIndex].ishow=true;
                }
                // console.info(this.questionMap)
              }).catch(function (response) {
              console.log(response);
            });
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
