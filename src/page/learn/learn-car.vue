<template>
    <div class="car">
      <van-nav-bar
        title="学车流程"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>

      <van-row class="car-head">
        <van-col >
          2018年最新驾考流程和报考条件出炉，要考驾照的看过来！
        </van-col>

      </van-row>
      <div  class="car-body">
        <van-row>
          <van-col class="title">
            2018年最新最全驾考流程如下：
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <section  class="xh01">
              <section class="xh04" >
                <section class="xh05" >
                  <section  class="xh06" ></section>
                  <section class="xh07" >
                    <section class="xh02" >序号<br  class="xh02">001</section>
                  </section>
                  <section  class="xh08" ></section>
                </section>
                <section class="xh09" >学车流程</section>
              </section>
            </section>
          </van-col>
          <van-col span="24">
            <p>选驾校->报名->科目一->科目二->科目三->科目四->拿本->新手上路</p>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24">
            <section  class="xh01">
              <section class="xh04" >
                <section class="xh05" >
                  <section  class="xh06" ></section>
                  <section class="xh07" >
                    <section class="xh02" >序号<br  class="xh02">002</section>
                  </section>
                  <section  class="xh08" ></section>
                </section>
                <section class="xh09" >选驾校</section>
              </section>
            </section>
          </van-col>
          <van-col span="24">
            <p>打定主意要学车了，首先就要开始找驾校，驾校那么多，该考虑哪些因素？</p>
            <p>
              <span style="color: rgb(217, 33, 66);">
                <strong>注意事项：</strong>
              </span>选择正规的驾校收费；项目具体有哪些；培训教练如何安排；练车时间和考试时间安排；是否有接送或班车服务；退学或转学的手续和退费等。
            </p>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24">
            <section  class="xh01">
              <section class="xh04" >
                <section class="xh05" >
                  <section  class="xh06" ></section>
                  <section class="xh07" >
                    <section class="xh02" >序号<br  class="xh02">003</section>
                  </section>
                  <section  class="xh08" ></section>
                </section>
                <section class="xh09" >报名条件</section>
              </section>
            </section>
          </van-col>
          <van-col span="24">
            <p>18-70岁，身高在150cm以上（大型货车155cm以上）；无红绿色盲；两眼裸视力或矫正视力达到对数视力表4.9以上；听力佩戴助听器两耳分别距音叉50cm能够辩音源；双手拇指健全，其他手有三指健全。</p>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="24">
            <section  class="xh01">
              <section class="xh04" >
                <section class="xh05" >
                  <section  class="xh06" ></section>
                  <section class="xh07" >
                    <section class="xh02" >序号<br  class="xh02">004</section>
                  </section>
                  <section  class="xh08" ></section>
                </section>
                <section class="xh09" >报名材料</section>
              </section>
            </section>
          </van-col>
          <van-col span="24">
            <p>提供身份证复印件、居住证复印件、本人照片、体检表、居住证，不同地区有所不同。</p>
          </van-col>
        </van-row>

        <van-row>
        <van-col span="24">
          <section  class="xh01">
            <section class="xh04" >
              <section class="xh05" >
                <section  class="xh06" ></section>
                <section class="xh07" >
                  <section class="xh02" >序号<br  class="xh02">005</section>
                </section>
                <section  class="xh08" ></section>
              </section>
              <section class="xh09" >学车费用</section>
            </section>
          </section>
        </van-col>
        <van-col span="24">
          <p>学车费用包括：档案费、体检费、拍照费、驾校培训费、考试费、驾驶证工本费、补考费用。</p>
          <p>需要重点关注的是，很多城市已正式开启“计时收费”，学时未满不可预约考试，具体收费标准可参考以下内容：</p>
          <div class="jgb">
            <van-row>
              <van-col span="12">项目</van-col>
              <van-col span="6">学车单价</van-col>
              <van-col span="6">基本学时</van-col>
            </van-row>
            <van-row>
              <van-col span="6" class="czxs">驾驶模拟</van-col>
              <van-col span="6">
                <div>普通时段</div>
                <div>高峰时段</div>
                <div>节假日时段</div>
              </van-col>
              <van-col span="6">
                <div>130元/学时</div>
                <div>180元/学时</div>
                <div>180元/学时</div>
              </van-col>
              <van-col span="6" class="czxs">
               12学时
              </van-col>
            </van-row>
            <van-row>
              <van-col span="6" class="czxs" >基础和场地驾驶(科二)</van-col>
              <van-col span="6">
                <div>普通时段</div>
                <div>高峰时段</div>
                <div>节假日时段</div>
              </van-col>
              <van-col span="6">
                <div>130元/学时</div>
                <div>180元/学时</div>
                <div>180元/学时</div>
              </van-col>
              <van-col span="6" class="czxs">
               16学时
              </van-col>
            </van-row>
            <van-row>
              <van-col span="6" class="czxs">道路驾驶(科三)</van-col>
              <van-col span="6">
                <div>普通时段</div>
                <div>高峰时段</div>
                <div>节假日时段</div>
              </van-col>
              <van-col span="6">
                <div>130元/学时</div>
                <div>180元/学时</div>
                <div>180元/学时</div>
              </van-col>
              <van-col span="6" class="czxs">
               24学时
              </van-col>
            </van-row>
          </div>
          <p style="text-align: center;"><span style="color: rgb(217, 33, 66);"><strong>计时收费标准各地稍有差异，上下浮动在20—50元左右。</strong></span></p>
          <p>一旦补考，费用将大幅提升！科目二/科目三：挂科后要培训10个学时才能参加补考，也就是说科目二/科目三的一次补考费用约为1300元。</p>
        </van-col>
      </van-row>
      </div>

    </div>
</template>

<script>
    export default {
        name: "learn-car",
      methods:{
        onClickLeft() {
          this.$router.back();
        },
      }

    }
</script>

<style  lang="less"  scoped>
.car{
  height: 100%;
  /*margin-top: 20px;*/


  &-head{
    text-align: left;
    font-size: 20px;
    padding: 20px;
  }
  &-body{
    padding: 0 20px;
    margin-top: 20px;
    text-align: left;
    .title{
      text-align: center;
      width: 100%;
      letter-spacing:5px;
      margin-bottom: 10px;
    }
    .van-col{
      margin-top: 8px;
    }
    .xh01{
      background-color: rgb(255, 255, 255);
      box-sizing: border-box;
    }
    .xh02{
      box-sizing: border-box;
    }
    .xh03{
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
      box-sizing: border-box;
    }
    .xh04{
      width: 100%;
      text-align: left;
      background-color: rgb(61, 60, 69);
      box-sizing: border-box;
    }
    .xh05{
      display: inline-block;
      vertical-align: top;
      float: left;
      margin-top: -0.68em;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      box-sizing: border-box;
    }
    .xh06{
      display: inline-block;
      vertical-align: top;
      border-right: 0.4em solid rgb(147, 54, 29);
      border-bottom: 0.4em solid rgb(147, 54, 29);
      max-width: 5% !important;
      border-top: 0.4em solid transparent !important;
      border-left: 0.4em solid transparent !important;
      box-sizing: border-box;
    }
    .xh07{
      display: inline-block;
      vertical-align: top;
      border-radius: 0px 0px 5px 5px;
      background-color: rgb(255, 30, 41);
      padding: 2px 5px;
      font-size: 19px;
      line-height: 1.2em;
      color: rgb(255, 255, 255);
      text-align: center;
      max-width: 90% !important;
      box-sizing: border-box;
    }
    .xh08{
      display: inline-block;
      vertical-align: top;
      border-bottom: 0.4em solid rgb(147, 54, 29);
      border-left: 0.4em solid rgb(147, 54, 29);
      max-width: 5% !important;
      border-right: 0.4em solid transparent !important;
      border-top: 0.4em solid transparent !important;
      box-sizing: border-box;
    }
    .xh09{
      display: inline-block;
      vertical-align: top;
      padding: 5px;
      line-height: 1.2em;
      color: rgb(255, 255, 255);
      text-align: center;
      box-sizing: border-box;
    }

    .jgb{
      text-align: center;
      border-top: 1px solid #4cc8dc;
      border-left: 1px solid #4cc8dc;
      .van-row:not(:first-child){
        height: 70px;
        .czxs{
          display: flex;
          align-items: center;
        }
        .van-col{
          height: 70px;
        }
      }

      .van-col{

        margin-top: 0 !important;
        border-right: 1px solid #4cc8dc;
        border-bottom: 1px solid #4cc8dc;
      }
    }
}
}
</style>
