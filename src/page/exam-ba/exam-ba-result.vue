<template>
  <div class="exam">
    <van-row  class="exam-head" type="flex" justify="center">
      <van-col span="6">
        <img src="@/assets/user-default.png"></img>
      </van-col>
    </van-row>
    <van-row  class="exam-body-head" type="flex" justify="center">
      <van-col span="20" class="bgbox">
        <div class="bg"></div>
        <div class="bg2"></div>
      </van-col>
    </van-row>

    <van-row  class="exam-body-context" type="flex" justify="center">
      <van-col span="20" class="contextBox">
        <div class="bg">
          <van-row class="exam-body-context" type="flex" justify="center">
            <van-col span="12">考试科目</van-col>
            <van-col span="12">保安试题</van-col>
          </van-row>
          <van-row class="exam-body-context" type="flex" justify="center">
            <van-col span="12">考试用时</van-col>
            <van-col span="12">{{time}}</van-col>
          </van-row>
          <van-row class="exam-body-context" type="flex" justify="center">
            <van-col span="12">考试成绩</van-col>
            <van-col class="score" span="12">{{score}}分</van-col>
          </van-row>
          <van-row class="exam-body-context" type="flex" justify="center">
            <van-col span="12">考试结果</van-col>
            <van-col class="score" span="12">{{examResult}}</van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
    export default {
        name: "exam-ba-result",
      data(){
        return{
          openid:this.$route.query.openid,
          score:0,
          time:0,
          examResult:"及格"
        }
      },
      created:function(){
        this.initData();
      },
      methods:{
        initData(){
          this.$http.post('/dcwj/getTestPaperResult.htm', {
            type:this.ptype,
            openid:this.openid,
          }).then((response)=>{
            let data =  response.data;
            console.log(data);
            this.score = data.score;
            this.time = Math.floor(data.time/60)  + "分" + (data.time % 60) + "秒";
            if(this.score < 60){
              this.examResult = "不及格";
            }else if(60 <= this.score  && this.score < 80){
              console.log(1);
              this.examResult = "及格";
            }else if(80 <= this.score  && this.score< 90){
              console.log(2);
              this.examResult = "良好";
            }else if(90 <= this.score  && this.score <100){
              this.examResult = "优秀";
            }else if(this.score  == 100){
              this.examResult = "满分";
            }
          }).catch(function (response) {
            console.log(response);
          });
        },
      }
    }
</script>

<style lang="less" scoped>
  .exam{

    width: 100%;
    height: 100%;

    &-head{
      background-color: #11fcde;
      height: 200px;
      img{
        width: 60px;
        height: 60px;
      }

      .van-col{
        line-height: 200px;
      }
    }

    &-body-head{
      background-color: #11fcde;
      height: 50px;
      position: relative;

      .bgbox{
        position: relative;
        .bg{
          position: absolute;
          background:rgba(0, 0, 0, 0.6);
          filter:alpha(opacity=60);
          -moz-opacity:0.6;
          -khtml-opacity: 0.6;
          opacity: 0.6;
          border-radius: 10px;
          height: 20px;
          z-index: 1;
          width: 100%;
        }
        .bg2{
          position: absolute;
          background-color: white;
          height: 100%;
          z-index: 10;
          width: 96%;
          text-align: center;
          left: 2%;
          top:8px;
          border-radius: 4px;
          border: 1px solid #EAEAEA;
          border-bottom: none;
        }
      }
    }
    .exam-body-context{
      height: 300px;
      width: 100%;
      .contextBox{
        position: relative;
        background-color: white;
        .bg{
          width: 96%;
          position:absolute;
          left: 2%;
          border: 1px solid #EAEAEA;
          height: 100%;
          border-bottom-right-radius:4px;
          border-bottom-left-radius:4px;

          .van-row{
            height: 30px;
            margin-top: 20px;
            .van-col:nth-of-type(odd){
              color: #7e8c8d;
            }
            .van-col:nth-of-type(even){
              text-align: left;
            }

            .van-button{
              border-color: #40E0D0 !important;
              color: #ffffff !important;
              background-color: #40E0D0 !important;
            }
          }
          .score{
            color: red;
          }
        }
      }
    }
  }

</style>
