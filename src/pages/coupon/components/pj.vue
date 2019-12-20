<template>
    <div class="tab">
        <div class="t_hd">
            <div :class="{active:tab==0}" @click="chooseTab(0)">未使用</div>
            <div :class="{active:tab==1}" @click="chooseTab(1)">不可用</div>
        </div>
        <div class="t_bd">
            <div v-for="item in 5" class="coupon" :class="{shixiao:tab==1}">
                <div class="c_left">
                    <div class="l_main">
                        <p>￥<span>50</span></p>
                        <p>优惠券</p>
                    </div>
                </div>
                <div class="c_center">
                    <div class="c_main">
                        <p class="tishi">商城可用</p>
                        <p class="desc">满2000可直接使用</p>
                        <p class="times">有效期:<span>2019/01/24</span>至<span>2019/06/14</span></p>
                    </div>
                </div>
                <div class="c_right">
                    <p v-show="tab==0">立即使用</p>
                    <p v-show="tab==1" class="useless">已失效</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
                tab:0
            }
        },
        methods: {
            chooseTab(e){
                console.log(e)
                this.tab = e
            }
        }
    }
</script>

<style scoped>
    .tab{
        width: 6.9rem;
        margin: 0 auto;
    }
    .t_hd{
        margin: .3rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .t_hd>div{
        width: 3.3rem;
        line-height: .6rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        text-align: center;
        font-family: pfb;
        color: #333;
        font-size: .28rem;
        -webkit-box-shadow: 0 0 .24rem rgba(87,87,87,.09);
        -moz-box-shadow: 0 0 .24rem rgba(87,87,87,.09);
        box-shadow: 0 0 .24rem rgba(87,87,87,.09);
    }
    .t_hd>div.active{
        background: #af1c3b;
        color: white;
    }
    .coupon{
        width: 100%;
        height: 1.82rem;
        background: url("/static/img/coupon_bg.png") no-repeat;
        background-size: 100%;
        margin-bottom: .3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .coupon.shixiao{
        background: url("/static/img/coupon_bg1.png") no-repeat;
        background-size: 100%;
    }
    .coupon>div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .c_left{
        width: 1.76rem;
        color: white;
    }
    .c_left p{
        font-family: pfb;
        font-size: .24rem;
        text-align: center;
    }
    .c_left p span{
        font-size: .5rem;
    }
    .c_left p:first-child{
        margin-bottom: .25rem;
    }
    .c_center{
        width: 3.8rem;
        padding-left: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_right{
        width: 1.4rem;
    }
    .c_right p{
        width: .3rem;
        text-align: center;
        line-height: .35rem;
        font-size: .22rem;
        font-family: pfb;
        color: #af1c3b;
    }
    .tishi,.desc{
        font-family: pfb;
        font-size: .24rem;
        color: #333333;
    }
    .tishi{
        width: 2rem;
        padding-bottom: .2rem;
        border-bottom: 1px dashed #bfbfbf;
    }
    .desc{
        margin-top: .2rem;
        margin-bottom: .15rem;
    }
    .times{
        font-size: .2rem;
        font-family: pfm;
        color: #bcbcbc;
    }
    .times span{
        color: #999999;
    }
    .c_right p.useless{
        color: #a0a0a0;
        font-size: .22rem;
        font-family: pfb;
    }
</style>
