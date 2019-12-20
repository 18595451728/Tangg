<template>
    <div class="contents">
        <div class="order_con">
            <div class="order_title"><img src="/static/img/order_title.png" alt=""><span>订单信息</span></div>
            <div class="order_mes">
                <div>
                    <p>订单号</p>
                    <p>12345678954</p>
                </div>
                <div>
                    <p>申请时间</p>
                    <p><span>2018-11-13</span><span>13:40</span></p>
                </div>
                <div>
                    <p>退款金额</p>
                    <p>￥45.00</p>
                </div>
                <div>
                    <p>退回（原支付账户）</p>
                    <p>￥45.00</p>
                </div>
            </div>
        </div>
        <div class="logi_con">
            <div class="l_top">
                <div class="line"></div>
                <div class="t_status">
                    <p v-for="item,index in lc" :class="{active:item.hasdone}">{{item.title}}</p>
                </div>
                <div class="lc">
                    <img  v-for="item,index in lc" :class="{hasdone:item.hasdone,finish:index==3}" :src="index==3?item.hasdone?'/static/img/selected.png':'/static/img/select.png':item.hasdone?'/static/img/lca.png':'/static/img/lc.png'" alt="">
                </div>
            </div>
            <div class="l_bottom">取消申请</div>
        </div>
        <div class="order_con">
            <div class="order_title"><img src="/static/img/deal.png" alt=""><span>处理进度</span></div>
            <div class="deal_con">
                <div class="lines"></div>
                <div class="progress" v-for="item,index in 4">
                    <img src="/static/img/deal_gou.png" alt="">
                    <div class="d_art">
                        <p>退款已返回至原支付账户，请注意查收</p>
                        <p v-if="index==2">请及时退回商品并<span>上传快递单号</span></p>
                        <p>2017-11-13 13:41</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){
            return {
                lc:[
                    {
                        hasdone:!0,
                        title:'待审核'
                    },
                    {
                        hasdone:!1,
                        title:'已审核'
                    },
                    {
                        hasdone:!1,
                        title:'退款中'
                    },
                    {
                        hasdone:!1,
                        title:'已完成'
                    }
                ]
            }
        },
        methods:{

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
    .order_con{
        padding: 0 .3rem .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .order_title{
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
    }
    .order_title img{
        margin-right: .2rem;
        width: .31rem;
    }
    .order_title span{
        font-size: .3rem;
        font-family: pfb;
        color: #333333;
    }
    .order_mes{

    }
    .order_mes>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .3rem;
    }

    .order_mes>div p:first-child{
        font-size: .28rem;
        color: #333;
        font-family: pfm;
    }
    .order_mes>div p:last-child{
        font-size: .24rem;
        color: #666;
        font-family: pfm;
    }
    .order_mes>div:last-child p:last-child{
        font-size: .28rem;
        color: #333;
    }
    .order_mes>div p span{
        margin-left: .3rem;
    }
    .logi_con{
        padding: .3rem .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .l_top{
        position: relative;
        padding-bottom: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .l_top>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .t_status{
        margin-bottom: .43rem;
    }
    .t_status p{
        font-size: .26rem;
        color: #666666;
        font-family: pfm;
    }
    .t_status p.active{
        color: #333333;
    }
    .lc{
        width: 5.77rem;
        margin: 0 auto;
        text-align: center;
    }
    .lc img{
        width: .3rem;
    }
    .lc img.hasdone{
        width: .35rem;
    }
    .lc img.finish{
        width: .4rem;
    }
    .l_top .line{
        width: 5.02rem;
        height: .05rem;
        background: #cbcbcb;
        position: absolute;
        left: calc(50% - 2.51rem);
        bottom: .475rem;
        z-index: -1;
    }

    .l_bottom{
        text-align: center;
        line-height: .88rem;
        font-family: pfb;
        color: #333;
        font-size: .3rem;
        border-top: 1px solid #e5e5e5;
    }
    .deal_con{
        position: relative;
        padding-top: .3rem;
    }
    .progress{
        display: flex;
        align-items: flex-start;
        height: 1.26rem;
    }

    .progress:last-child{
        height: auto;
        margin-bottom: .2rem;
    }
    .progress>img{
        width: .3rem;
        margin-right: .2rem;
    }
    .d_art p{
        font-size: .26rem;
        color: #333;
        font-family: pfm;
        margin-bottom: .15rem;
    }
    .d_art p:last-child{
        font-size: .24rem;
        color: #999999;
        margin-bottom: 0;
    }
    .d_art p span{
        color: #af1c3b;
    }
    .lines{
        position: absolute;
        left: .14rem;
        top: .6rem;
        width: .02rem;
        height: 3.5rem;
        background: #333;
        z-index: -1;
    }
</style>
