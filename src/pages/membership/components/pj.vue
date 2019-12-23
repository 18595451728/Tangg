<template>
    <div class="pj">
        <div class="card_banner swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="/static/img/card1.png" alt=""></div>
                <div class="swiper-slide"><img src="/static/img/card2.png" alt=""></div>
                <div class="swiper-slide"><img src="/static/img/card3.png" alt=""></div>
                <div class="swiper-slide"><img src="/static/img/card4.png" alt=""></div>
            </div>
        </div>
        <div class="service">
            <div class="s_title">会员服务</div>
            <div class="s_con">
                <div class="s_each" v-for="item in 3">
                    <div class="sub_title">1.挂号可以打折</div>
                    <div class="sub_con">繁华和美丽一直是古钱塘今杭州的写照,浙江唐冠健康管理有限公司就坐落于钱塘江畔,澎湃理想潮信,书写生命激情。公司以弘扬中华传统医学文化为己任,矢志成为开行业之先的一家赋能型健康管理私享机构。</div>
                </div>
            </div>
        </div>

        <div class="explain">
            <div class="x_title">唐冠健康会员等级及权益</div>
            <div class="x_hd">
                <div>会员等级</div>
                <div>办卡条件</div>
                <div>会员权益</div>
                <div>积分说明</div>
            </div>
            <div class="x_bd">
                <div>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                </div>
                <div>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                </div>
                <div>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                    <p>普通会员</p>
                </div>
                <div>
                    <p class="nobor">单次每充值或者消费10元获得1积分，不足10元部分不计积分；每10个积分可以抵扣1元，积分可用于平台所有场景应用，如：预约挂号、商城购物等</p>
                </div>
            </div>
        </div>

        <div class="deep">
            <div class="d_left">我要续约</div>
            <div class="d_right">升级VIP</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
            }
        },
        mounted(){
            var ss = new Swiper('.card_banner',{
                slidesPerView: 1.2,
                spaceBetween: 10,
            })
        },
        methods: {
        }
    }
</script>

<style scoped>
    .pj{
        width: 6.9rem;
        margin: 0 auto;
    }
    .pj > div.service{
        margin: .3rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .2rem;
        -moz-border-radius: .2rem;
        border-radius: .2rem;
        padding: .3rem;
    }
    .card_banner{
        margin: .3rem auto;
    }
    .swiper-slide img{
        width: 100%;
    }
    .s_title{
        font-size: .3rem;
        font-family: pfb;
        color: #333;
        margin-bottom: .3rem;
    }
    .s_each{
        margin-bottom: .6rem;
    }
    .s_each:last-child{
        margin-bottom: 0;
    }
    .sub_title{
        font-family: pfm;
        font-size: .24rem;
        color: #4c4c4c;
        margin-bottom: .1rem;
    }
    .sub_con{
        font-size: .24rem;
        color: #999999;
        font-family: pfb;
        line-height: .4rem;
    }
    .pj>div.deep{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .98rem;
        background: #eeeeee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .d_left{
        background: #d9b765;
    }
    .d_right{
        background: #af1c3b;
    }
    .d_right,.d_left{
        width: 3.3rem;
        line-height: .6rem;
        text-align: center;
        color: white;
        font-size: .3rem;
        font-family: pfb;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .pj>div.explain{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .2rem;
        -moz-border-radius: .2rem;
        border-radius: .2rem;
        overflow: hidden;
        margin-bottom: .3rem;
    }
    .x_title{
        background: #e9e9e9;
        line-height: .6rem;
        text-align: center;
        font-family: pfb;
        color: #333333;
        font-size: .28rem;
        border-bottom: .01rem solid #dcdcdc;
    }
    .x_hd,.x_bd{
        background: #f4f4f4;
        line-height: .6rem;
        font-family: pfb;
        color: #333333;
        font-size: .24rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .x_hd div{
        text-align: center;
        border-bottom: .01rem solid #dcdcdc;
        border-right: .01rem solid #dcdcdc;
    }
    .x_hd div:nth-child(1){
        width: 1.68rem;
    }
    .x_hd div:nth-child(2){
        width: 2.02rem;
    }
    .x_hd div:nth-child(3){
        width: 1.33rem;
    }
    .x_hd div:nth-child(4){
        width: 1.89rem;
        border-right: none;
    }
    .x_bd{
        background: #fff;
        font-size: .2rem;
        font-family: pfm;
        color: #333333;
    }
    .x_bd div{
        text-align: center;
    }

    .x_bd div:nth-child(1){
        width: 1.68rem;
    }
    .x_bd div:nth-child(2){
        width: 2.02rem;
    }
    .x_bd div:nth-child(3){
        width: 1.33rem;
    }
    .x_bd div:nth-child(4){
        width: 1.88rem;
    }
    .x_bd div p{
        border-bottom: .01rem solid #dcdcdc;
        border-right: .01rem solid #dcdcdc;
    }
    .x_bd div p:last-child{
        border-bottom: none;
    }
    .x_bd div p.nobor{
        padding: 0 .13rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: .3rem;
        border-bottom: none;
        border-right: none;
    }
</style>
