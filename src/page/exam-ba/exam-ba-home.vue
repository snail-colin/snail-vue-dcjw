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
                   <van-col span="12">题目数量</van-col>
                   <van-col span="12">100题</van-col>
                 </van-row>
                 <van-row class="exam-body-context" type="flex" justify="center">
                   <van-col span="12">考试时间</van-col>
                   <van-col span="12">45分钟</van-col>
                 </van-row>
                 <van-row class="exam-body-context" type="flex" justify="center">
                   <van-col span="12">合格标准</van-col>
                   <van-col span="12">满分100分及格60分</van-col>
                 </van-row>
                 <van-row class="exam-body-context" type="flex" justify="center">
                   <van-col span="24">
                     <router-link :to="{path:'/exam-ba',query: {openid:openid}}">
                       <van-button  v-if='showBtn'  type="primary">开始考试</van-button>
                     </router-link>
                   </van-col>
                 </van-row>
               </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "exam-ba-home",
      data(){
          return{
            // openid:"test-openid",
            openid:this.$route.query.openid,
            // showBtn:this.$route.query.openid == undefined? false:true
            showBtn:false
          }
      },
      created:function(){
        this.showBtn = this.$route.query.openid == undefined? false:true;
        if(this.openid){
          this.initData();
        }
      },
      methods:{
        initData(){
          this.$http.post('/dcwj/getTestPaperResult.htm', {
            type:this.ptype,
            openid:this.openid,
          }).then((response)=>{
            let data =  response.data;
           if(data != null &&  data.time != "" && data.tjsj != ""){
             this.showBtn=false;
             this.$router.push({path:'/exam-ba-result',query:{openid:this.openid}});
           }
          }).catch(function (response) {
            console.log(response);
          });
        },
      }
    }
</script>

<style  lang="less" scoped>
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
        /*display: flex;*/
        /*align-items: center;*/
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
        }
      }
    }
  }

</style>
