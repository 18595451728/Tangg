<template>
    <div class="pj">

        <div class="pro_mes">
            <div class="pro">
                <img src="/static/img/cartpro.png" alt="">
                <div class="pro_art">
                    <p><span>普瑞福鼻腔抗菌液</span><span>￥2688.00</span></p>
                    <p><span>复方薄荷油滴鼻液成人儿童鼻炎</span><span>×1</span></p>
                    <p><span>15ml</span></p>
                </div>
            </div>
            <div class="sendmes">
                <div class="mes_list">
                    <p>商品金额</p>
                    <p>¥2688.00</p>
                </div>
                <div class="mes_list">
                    <p>优惠券</p>
                    <p>-¥ 4.00</p>
                </div>
                <div class="mes_list">
                    <p>积分代扣</p>
                    <p>您有10积分可抵扣1.00元</p>
                </div>
                <div class="mes_endprice">
                    <p><span>实付：</span>￥2683.00</p>
                </div>
            </div>
        </div>
        <div class="xiang">
            <div class="each_xiang">
                <p>配送方式</p>
                <p>免运费  快递发货</p>
            </div>
            <div class="each_xiang">
                <p>买家留言</p>
                <p>无</p>
            </div>
        </div>
        <div class="ding">
            <div class="each_ding">
                <p>订单编号：E232454646454FDF34</p>
            </div>
            <div class="each_ding">
                <p>创建时间：2019-09-20 17:42:07</p>
            </div>
        </div>
        <div class="deep">
            <div class="d_left" @click="refund">申请售后</div>
            <div class="d_right">确认收货</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
                star: 4,
                pro_num:1
            }
        },
        methods: {
            stars(e) {
                this.star = e + 1
            },
            defaultNum(){
                if(!this.pro_num)this.pro_num = 1
            },
            refund(){
                this.$router.push('/Choosetype')
            }
        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.9rem;
        margin: .25rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }

    .pro_mes{
        padding: .3rem .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .pro{
        display: flex;
        align-items: flex-start;
        padding-bottom: .3rem;
        border-bottom: .01rem solid #e5e5e5;
    }
    .pro>img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .3rem;
    }
    .pro_art{
        width: 4.65rem;
    }
    .pro_art p{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pro_art p:first-child{
        color: #333333;
        font-size: .28rem;
        font-family: pfb;
    }
    .pro_art p:first-child span{
        font-size: .24rem;
    }
    .pro_art p:nth-child(2){
        color: #999999;
        font-size: .24rem;
        font-family: pfm;
        margin: .2rem 0
    }
    .pro_art p:last-child span{
        padding: 0 .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: .5rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background: #eee;
        font-size: .2rem;
        font-family: pf;
        color: #999999;
    }

    .sendmes{
        padding-top: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .mes_list{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .3rem;
    }
    .mes_list p:last-child{
        font-size: .26rem;
        color: #333333;
    }
    .mes_list:first-child p:last-child{
        font-size: .26rem;
        color: #949494;
        font-family: pfb;
    }
    .mes_list p:first-child{
        font-size: .26rem;
        color: #949494;
        font-family: pfm;
    }
    .mes_endprice{
        line-height: .9rem;
        text-align: right;
        font-size: .4rem;
        color: #333333;
        font-family: pfb;
        border-top: .01rem solid #e5e5e5;
    }
    .mes_endprice span{
        font-size: .24rem;
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
    .xiang{
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .each_xiang{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .83rem;
    }
    .each_xiang:first-child{
        border-bottom: 1px solid #eeeeee;
    }
    .each_xiang p:first-child{
        font-family: pfm;
        font-size: .26rem;
        color: #373737;
    }
    .each_xiang p:last-child{
        font-size: .24rem;
        color: #949494;
    }
    .ding{
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: pfm;
        font-size: .28rem;
        color: #333333;
    }
    .each_ding:first-child{
        margin-bottom: .3rem;
    }
</style>
