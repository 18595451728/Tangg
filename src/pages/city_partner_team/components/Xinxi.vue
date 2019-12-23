<template>
	<div class="xinxi">

        <!--团队佣金-->
        <div class="tixian">
            <p class="maney">1,000</p>
            <p class="tits">团队佣金</p>
            <p class="btn" @click="withdrwa"><em class="fl">提现</em> <img class="fl" src="../../../assets/img/red_right.png"></p>
        </div>

        <!--团队成员-->
        <div class="other_user">
            <div class="titls">一级团队</div>
            <div class="o_user_main">
                <div class="row" v-for="item in 5">
                    <div class="head"><img class="imgs" src="../../../assets/img/user.png"></div>
                    <p>糖果</p>
                </div>
                <div class="row red" >
                    <div class="head"><span class="imgs "></span></div>
                    <p>查看更多</p>
                </div>
            </div>
        </div>

        <!--团队成员-->
        <div class="other_user">
            <div class="titls">二级团队</div>
            <div class="o_user_main">
                <div class="row" v-for="item in 5">
                    <div class="head"><img class="imgs" src="../../../assets/img/user.png"></div>
                    <p>糖果</p>
                </div>
                <div class="row red" >
                    <div class="head"><span class="imgs "></span></div>
                    <p>查看更多</p>
                </div>
            </div>
        </div>

        <!--排行-->
        <div class="partner_list">
            <div class="top_img"><img src="../../../assets/img/cityPa.png"></div>
            <div class="list_info">
                <div class="row titles">
                    <p class="name fl">成员昵称</p>
                    <p class="num fl">佣金</p>
                    <span class="times fr">
                        收益日期
                    </span>
                </div>
                <div class="row" v-for="item in 5">
                    <p class="name fl">易胜渡医院</p>
                    <p class="num fl">1000000121</p>
                    <span class="times fr">
                        <p class="fl">10:30</p>
                        <p class="fl">2019/10/01</p>
                    </span>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
export default {
  name: 'AddjzrxxXinxi',
    methods:{
        withdrwa(){
            this.$router.push({ path: "./userWithdraw", query: { userId:12  }});
        }
    }
}
</script>

<style  scoped>
    .xinxi{padding: 0.10rem 0px; background: #fdfdfd;}

    /*合伙人排名*/
    .partner_list{background: #fff; }
    .partner_list .top_img{width: 100%; }
    .partner_list .top_img img{width: 100%;height: 1.2rem;}
    .partner_list .list_info{ padding:0.30rem; }
    .partner_list .list_info .row.titles{background:#e5e5e5;margin-bottom: 0.20rem; padding: 0.14rem 0px 0.08rem 0px; border-radius: 0.10rem 0.10rem  0px  0px; }
    .partner_list .list_info .row{display:flex; margin-top: .10rem; font-size: 0.24rem; line-height: 0.48rem;}
    .partner_list .list_info .row .name{color: #333; flex: 1; padding: 0px  0px 0px 0.20rem; }
    .partner_list .list_info .row .num{text-align: center;width: 160px;min-width: 160px;max-width: 160px; color: #333;flex: 1;}
    .partner_list .list_info .row  .times{color: #666;flex: 1;min-width: 2.1rem; text-align: center;}
    .partner_list .list_info .row  .times .fl{margin-left: 0.10rem;}

    /*团队成员*/
    .other_user{margin: 0.30rem; margin-top: 0.30rem;padding: 0.30rem; background: #fff;border-radius: 0.10rem; }
    .other_user .o_user_main{overflow: hidden;}
    .other_user .titls{font-size: 0.26rem;line-height: 0.52rem; color: #010101; }
    .other_user .o_user_main .row:first-child{margin-left: 0rem;}
    .other_user .o_user_main .row {float: left;margin-left: 0.30rem; width: 0.80rem;margin-top: 0.10rem; text-align: center; }
    .other_user .o_user_main .row .head{display: flex; width: 0.80rem; height: 0.80rem;}
    .other_user .o_user_main .row .imgs{margin: auto; width: 0.80rem; height: 0.80rem; border-radius: 50%;}

    .other_user .o_user_main .row p{font-size: 0.24rem;line-height: 0.24rem;margin-top: 0.14rem; color: #666666;width: 100%;display:block; }
    .other_user .o_user_main .row.red{position: relative;}
    .other_user .o_user_main .row.red .imgs{background: #af1d3c;}
    .other_user .o_user_main .row.red p{color: #fff;margin-top: 0px;line-height: 0.26rem; padding:0.16rem 0.12rem;width: 0.60rem; position: absolute; top: 0px; left: 0px;}

    /*提现 开始*/
    .tixian{margin: 0.30rem;overflow:hidden;  position: relative; border-radius: 6px; background-image: linear-gradient(to right, #af1d3c , #e8496b);padding: 0.30rem 0.40rem 0.40rem 0.40rem;color: #fff; }
    .tixian .maney{font-size: 0.48rem; line-height: 0.48rem; margin-bottom: 0.10rem; }
    .tixian .tits{font-size: 0.28rem; line-height: 0.28rem;}
    .tixian .btn{ position: absolute;box-shadow: 2px 2px 10px #666;font-weight: 600; right: 0px; top: 0.50rem;  background: #fff;padding: 0.16rem 0.40rem;width: 0.80rem;overflow: hidden;  border-radius: 0.60rem 0px 0px 0.60rem;}
    .tixian .btn em{color:#e8496b; text-align: center;font-size: 0.26rem;line-height: 0.26rem; }
    .tixian .btn img{width: 0.12rem; height: 0.26rem; margin-left: 0.10rem;}
    .fl{float: left;}
    .fr{float: right;}
    /*提现 结束*/

    .head_info{overflow: hidden;}
    .head_info .head{ float: left;height: .74rem; border-radius: 0.74rem; margin-right: 0.15rem; width: .74rem; }
    .head_info .head img{width: 100%; height:100%;border-radius: 50%;}
    .head_info .infos{ float: left;padding: 0.04rem; }
    .head_info .infos .name{overflow: hidden;  }
    .head_info .infos .name .fl{float:left;}
    .head_info .infos .name .nums{margin-left: 0.10rem;position: relative;}
    .head_info .infos .name .nums img{ width: 0.30rem; height: 0.30rem;}
    .head_info .infos .name .nums em{position: absolute; top: 0px;left: 0px; width: 100%; text-align: center; font-size: 0.18rem;line-height:0.40rem; }
    .head_info .infos .name p{font-size: 0.28rem;line-height:0.28rem;margin-bottom: 0.14rem;  color:#333333;}
    .head_info .infos .info{font-size: 0.22rem; line-height:0.10rem;color:#666666;}






</style>
