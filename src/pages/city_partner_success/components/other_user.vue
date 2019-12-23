<template>
    <div class="xinxi">

        <!--团队佣金-->
        <div class="tixian">
            <p class="maney">1,000</p>
            <p class="tits">团队佣金</p>
            <p class="btn"><em class="fl">提现</em> <img class="fl" src="../../../assets/img/red_right.png"></p>
        </div>

        <!--团队成员-->
        <div class="other_user">
            <div class="titls">团队成员</div>
            <div class="o_user_main">
                <div class="row">
                    <img src="../../../assets/img/head_img.png">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'AddjzrxxXinxi'
    }
</script>

<style  scoped>
    .xinxi{padding:0.3rem; background: #fff;}

    /*提现 开始*/
    .tixian{margin-top: 0.30rem;overflow:hidden;  position: relative; border-radius: 6px; background-image: linear-gradient(to right, #af1d3c , #e8496b);padding: 0.30rem 0.40rem;color: #fff; }
    .tixian .maney{font-size: 0.48rem; line-height: 0.48rem; margin-bottom: 0.10rem; }
    .tixian .tits{font-size: 0.28rem; line-height: 0.28rem;}
    .tixian .btn{ position: absolute;box-shadow: 2px 2px 10px #666;right: 0px; top: 0.40rem;  background: #fff;padding: 0.20rem 0.40rem;width: 0.80rem;overflow: hidden;  border-radius: 0.60rem 0px 0px 0.60rem;}
    .tixian .btn em{color:#e8496b; text-align: center;font-size: 0.26rem;line-height: 0.26rem; }
    .tixian .btn img{width: 0.12rem; height: 0.26rem; margin-left: 0.10rem;}
    .fl{float: left;}
    /*提现 结束*/

    .other_user{

    }


</style>
