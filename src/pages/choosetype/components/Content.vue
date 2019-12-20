<template>
    <div class="contents">
        <div class="j_top">
            <div class="t_mes">
                <img src="/static/img/cartpro.png" alt="">
                <div class="t_art">
                    <p>普瑞福鼻腔抗菌液</p>
                    <p>复方薄荷油滴鼻液成人儿童鼻炎</p>
                </div>
            </div>
        </div>
        <div class="j_bottom">
            <div class="tk" @click="refund">
                <img src="/static/img/jth.png" class="jth" alt="">
                <div class="wz">
                    <p>我要退货（无需退款）</p>
                    <p>没收到货，或与卖家协商同意不退货只退款</p>
                </div>
                <img src="/static/img/arrow_right.png" class="arrow_right" alt="">
            </div>
            <div class="line"></div>
            <div class="tk" @click="refund">
                <img src="/static/img/tk.png" class="tkp" alt="">
                <div class="wz">
                    <p>我要退货退款</p>
                    <p>已收到货，需要退还收到的货物</p>
                </div>
                <img src="/static/img/arrow_right.png" class="arrow_right" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){
            return {

            }
        },
        methods:{
            refund(){
                this.$router.push('/Refund')
            }
        }
    }
</script>

<style scoped>
    .contents>div{
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
    .t_mes {
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        /*margin-bottom: .3rem;*/
    }

    .t_mes img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .2rem;
    }
    .t_art p:first-child {
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin: .2rem 0;
    }

    .t_art p:last-child {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
    }
    .j_bottom{
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .tk{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .arrow_right{
        width: .18rem;
    }
    .jth{
        width: .5rem;
    }
    .tkp{
        width: .48rem;
    }
    .line{
        margin: .3rem 0;
        width: 100%;
        height: 1px;
        background: #e5e5e5;
    }
    .wz{
        width: 5rem;
    }
    .wz p:first-child{
        font-size: .3rem;
        color: #333;
        font-family: pfb;
    }
    .wz p:last-child{
        font-size: .24rem;
        color: #9f9f9f;
        font-family: pfm;
        margin-top: .2rem;
    }
</style>
