<template>
  <div class="sxlx">
    <v-touch class="touch" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">

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

          <van-button v-if='showBtn' type="primary" :chick="submitPaper()">交卷</van-button>
        </div>
      </van-cell-group>
    </v-touch>
  </div>
</template>

<script>
  export default {
    name: "exam",
    data() {
      return {
        value:3,
        size:16,
        total:0,
        ptype:1,
        title:'模拟考试',
        //默认0
        currentIndex:0,
        isSelect:false,
        pageSize:100,
        pageNum:1,
        openid:this.$route.query.openid,
        //记录下标,默认0
        recordIndexShow:0,
        showBtn:false,
        uuid:'',
        beginTime:new Date().getTime(),
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
          this.currentIndex=pindex;
          this.questionMap[pindex].option[cindex].checked=isRight;
          this.questionMap[pindex].option[cindex].isShow=true;
          this.questionMap[pindex].checked=true;
          this.isSelect=true;
          //一题一分
          if(isRight){
            this.questionMap[pindex]['score']=1;
          }else{
            this.questionMap[pindex]['score']=0;
          }

          if(pindex == this.total-1){
            this.showBtn=true;
          }

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
        this.$http.post('/dcwj/getTestPaper.htm', {
          type:this.ptype,
          openid:this.openid
        }).then((response)=>{
          let rst =  response.data;
          this.total=rst['total'];
          this.questionMap =this.questionMap.concat(rst.resultList);
          this.questionMap[this.recordIndexShow].ishow=true;
          this.uuid=rst.uuid;
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
      },
      submitPaper(){
        //提交试卷
        let paperDetail = {};
        let score = 0;
        for (let i = 0 ; i < this.questionMap.length; i++){
          score += this.questionMap[i]['score'];
        }
        paperDetail['score']=score;
        paperDetail['bkcx']='小型汽车';
        paperDetail['bkkm']='科目一下';
        paperDetail['ksdd']='科目一理论考试';
        paperDetail['time']=Math.round((new Date().getTime()-this.beginTime)/1000);
        paperDetail['uuid']=this.uuid;

        this.$http.post('/dcwj/submitPaper.htm', {
               openid:this.openid,
               uuid:this.uuid,
               paperDetail:JSON.stringify(paperDetail)
        }).then((response)=>{
               console.log(response.data);
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
    height: 100%;

    .touch{
      height: 100%;
    }

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

    }
    .van-button{
      border-color: #40E0D0 !important;
      color: #ffffff !important;
      background-color: #40E0D0 !important;
      text-align: center;
      margin: auto;
      width: 100%;
      margin-top: 20px;
    }
  }
</style>
