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
        <div v-for='(item,index) in questionMap' :key='index' v-if="item.ishow">
             <van-cell >
               <span v-html="setProperty(item.question,item.type)"></span>
             </van-cell>
            <van-cell  v-bind:class="{qmxx:itemImg }"   v-for='(citem,cindex) in item.option' :key='cindex'  clickable @click="click(index,cindex,citem.isRight)">
              <span v-html="changeText(citem.name,citem.value)"  ></span>
              <van-icon  v-if="!citem.checked && !citem.isShow"  slot="right-icon" class="van-icon-check"  name="van-icon-check" />
              <van-icon v-if="citem.checked && citem.isShow"  slot="right-icon" class="icon-checked"  name="checked" />
              <van-icon v-if="!citem.checked && citem.isShow"  slot="right-icon" class="icon-checked"  name="checked" />
            </van-cell>
        </div>


      </van-cell-group>
      <van-button v-if='showBtn' type="primary"  clickable @click="submitPaper()">交卷</van-button>

    </v-touch>
  </div>

</template>

<script>
  export default {
    name: "exam-ba",
    data() {
      return {
        value:3,
        size:16,
        total:0,
        ptype:1,
        title:'考试',
        // categoryCode:'baks',
        categoryCode:'test',
        examType:"1",
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
        itemImg:false,
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
        if(value.indexOf(".png]$") > -1){
          let imgName = value.substring(value.indexOf("$[")+2,value.indexOf("]$"));
          let relpaceName = value.substring(value.indexOf("$["),value.indexOf("]$")+2);
          let imgHtml = "<div><img style='width:70px;height:70px;' src='"+require("@/assets/qimg/"+imgName) + "'/></div>";
          value = value.replace(relpaceName,imgHtml);
        }
        return value;
      },
      changeText(name,value){
        if(name.indexOf("png") > -1){
          name = "<span style='margin-right: 5px;display: table-cell;vertical-align:middle;'>" + value + ".</span><span><img style='width:70px;height:70px;' src='"+require("@/assets/qimg/"+name) + "'/></span>";
          this.itemImg=true;
        }
        return name;
      },
      onClickLeft() {
        this.$router.back();
      },
      click(pindex,cindex,isRight){
        this.questionMap[pindex].checked =false;
        for (let i = 0; i< this.questionMap[pindex].option.length; i++){
          this.questionMap[pindex].option[i].checked=false;
          this.questionMap[pindex].option[i].isShow=false;
        }
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
          this.itemImg=false;
        }
      },
      onSwipeRight(){
        this.currentIndex--;
        this.currentIndex < 0 ? this.currentIndex = 0 :this.currentIndex;
        for (let i = 0 ; i < this.questionMap.length; i++){
          this.questionMap[i].ishow=false;
        }
        this.questionMap[this.currentIndex].ishow=true;
        this.itemImg=false;
      },
      initData(isSwipeLeft){
        this.$http.post('/dcwj/getTestPaper.htm', {
          type:this.ptype,
          openid:this.openid,
          examType:this.examType,
          categoryCode:this.categoryCode
        }).then((response)=>{
          let rst =  response.data;
          this.total=rst['total'];
          this.questionMap =this.questionMap.concat(rst.resultList);
          console.info(this.questionMap)
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
        paperDetail['bkkm']='保安试题理论考试';
        paperDetail['ksdd']='互联模拟考试';
        paperDetail['time']=Math.round((new Date().getTime()-this.beginTime)/1000);
        paperDetail['uuid']=this.uuid;

        this.$http.post('/dcwj/submitPaper.htm', {
               openid:this.openid,
               uuid:this.uuid,
               categoryCode:this.categoryCode,
               paperDetail:JSON.stringify(paperDetail)
        }).then((response)=>{
               console.log(response.data);
               if(response.data.code == 1){
                 this.$router.push({path:'/exam-ba-result',query:{openid:this.openid}});
               }else{
                 this.$toast({
                   duration:1000,
                   message:response.data.msg
                 });
               }
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
    .qmxx i{
      position: absolute;
      bottom:20px;
      right: 20px;
    }
  }
</style>
