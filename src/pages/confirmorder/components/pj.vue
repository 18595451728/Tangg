<template>
    <div class="pj">
        <div class="add_address">
            <p><img src="/static/img/add.png" alt=""><span>选择收货地址</span></p>
            <img src="/static/img/arrow_right.png" alt="">
        </div>
        <div class="pro_mes">
            <div class="pro">
                <img src="/static/img/cartpro.png" alt="">
                <div class="pro_art">
                    <p><span>普瑞福鼻腔抗菌液</span><span>￥2688.00</span></p>
                    <p><span>复方薄荷油滴鼻液成人儿童鼻炎</span><span>×1</span></p>
                    <p><span>15ml</span></p>
                </div>
            </div>
            <div class="pro_count">
                <p>购买数量</p>
                <div class="count">
                    <div class="reduce">-</div>
                    <input type="number" v-model="pro_num" @blur="defaultNum">
                    <div class="add">+</div>
                </div>
            </div>
            <div class="fs">
                <p>配送方式</p>
                <p>快递  包邮</p>
            </div>
            <div class="lm">
                <p>买家留言</p>
                <input type="text" placeholder="选填，建议事先与客服沟通确认">
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
        <div class="deep">
            <div class="d_left">
                <p>共1件商品</p>
                <p>合计：<span>¥2683.00</span></p>
            </div>
            <div class="d_right">立即购买</div>
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
    .add_address{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: .15rem;
        -moz-border-radius: .15rem;
        border-radius: .15rem;
        -webkit-box-shadow: 0 0 .24rem rgba(150,150,150,.07);
        -moz-box-shadow: 0 0 .24rem rgba(150,150,150,.07);
        box-shadow: 0 0 .24rem rgba(150,150,150,.07);
    }
    .add_address>img{
        width: .15rem;
    }
    .add_address p img{
        width: .52rem;
        margin-right: .3rem;
    }
    .add_address p span{
        font-size: .3rem;
        font-family: pfm;
        color: #333333;
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
    .pro_count,.fs,.lm{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .82rem;
        border-bottom: .01rem solid #e5e5e5;
    }
    .pro_count>p,.fs>p,.lm>p{
        font-size: .24rem;
        color: #373737;
        font-family: pfm;
    }
    .count{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1.46rem;
        height: .5rem;

        border: .01rem solid #d2d2d2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        overflow: hidden;
    }
    .reduce,.add{
        width: .45rem;
        color: #535353;
        font-size: .4rem;
        text-align: center;
        line-height: .48rem;
    }
    .count input{
        width: .54rem;
        border-right: .01rem solid #d2d2d2;
        border-left: .01rem solid #d2d2d2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        line-height: .48rem;
    }
    .lm{
        border-bottom: none;
    }
    .lm input{
        font-size: .24rem;
        color: #c8c8c8;
        font-family: pfm;
        width: 50%;
    }
    .sendmes{
        padding: .3rem .3rem 0;
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
        line-height: .98rem;
        background: #eeeeee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0 .4rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .d_left{
        display: flex;
        align-items: center;
        font-size: .24rem;
        color: #333333;
        font-family: pfm;
    }
    .d_left p{
        margin-right: .2rem;
    }
    .d_left span{
        font-family: pfb;
        font-size: .3rem;
    }
    .d_right{
        width: 2rem;
        line-height: .6rem;
        text-align: center;
        color: white;
        font-size: .3rem;
        font-family: pfb;
        background: #af1c3b;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
</style>
