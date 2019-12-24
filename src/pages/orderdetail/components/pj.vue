<template>
    <div class="pj">

        <div class="pro_mes">
            <div>
                <div class="pro" v-for="item in goodsMes">
                    <img :src="item.goods_pic" alt="">
                    <div class="pro_art">
                        <p><span>{{item.goods_name}}</span><span>￥{{item.goods_price}}</span></p>
                        <p><span>{{item.goods_describe}}</span><span>×1</span></p>
                        <p v-show="item.sku_info"><span>{{item.sku_info}}</span></p>
                        <!--<p><span>15ml</span></p>-->
                    </div>
                </div>
            </div>
            <div class="sendmes">
                <div class="mes_list">
                    <p>商品金额</p>
                    <p>¥{{orderMes.total_fee}}</p>
                </div>
                <div class="mes_list">
                    <p>优惠券</p>
                    <p>-¥ {{orderMes.coupon_price}}</p>
                </div>
                <div class="mes_list">
                    <p>积分代扣</p>
                    <p>您有{{orderMes.integral}}积分可抵扣{{orderMes.integral_money}}元</p>
                </div>
                <div class="mes_endprice">
                    <p><span>实付：</span>￥{{orderMes.total_price}}</p>
                </div>
            </div>
        </div>
        <div class="xiang">
            <div class="each_xiang">
                <p>配送方式</p>
                <p>{{orderMes.ps||'免运费  快递发货'}}</p>
            </div>
            <div class="each_xiang">
                <p>买家留言</p>
                <p>{{orderMes.user_note||'无'}}</p>
            </div>
        </div>
        <div class="ding">
            <div class="each_ding">
                <p>订单编号：{{orderMes.order_no}}</p>
            </div>
            <div class="each_ding">
                <p>创建时间：{{orderMes.order_time}}</p>
            </div>
        </div>
        <div class="deep" :class="{single:order_status==0||order_status==2}">
            <!--<div class="d_left" @click="refund">申请售后</div>-->
            <!--<div class="d_right" @click="EnterCancle">确认收货</div>-->
            <div class="cancleorder" v-if="order_status==1" @click="CancleOrder(order_no)">取消订单</div>
            <div class="payorder" v-if="order_status==1" @click="PayOrder(order_no)">付款</div>
            <div class="remindorder" v-if="order_status==2"  @click="RemindOrder(order_no)">提醒发货</div>
            <div class="logistics" v-if="order_status==3"  @click="LookOrder(order_no)">查看物流</div>
            <div class="confirmorder" v-if="order_status==3" @click="EnterOrder(order_no)">确认收货</div>
            <div class="deleteorder" v-if="order_status==4 || order_status==5 || order_status==0" @click="DeleteOrder(order_no)">删除订单</div>
            <div class="toevaluate" v-if="order_status==4" @click="EvaluateOrder(order_no)">去评价</div>
            <div class="shouhou" v-if="order_status==5" @click="AfterSale(order_no)">申请售后</div>
        </div>
    </div>
</template>

<script>
    import global from '../../../components/Global'
    import axios from 'axios'
    export default {
        name: "pj",
        props:['goodsMes','orderMes'],
        data() {
            return {
                token:global.token,
                order_status:'',
                order_no:''
            }
        },
        mounted(){
            this.order_status = this.$route.query.status
            console.log(this.order_status)
            this.order_no = this.$route.query.order_no
        },
        methods: {
            stars(e) {
                this.star = e + 1
            },
            AfterSale(e){
                this.$router.push({
                    path:'/Choosetype',
                    query:{
                        order_no:e
                    }
                })
            },
            EnterOrder(e){
                let that =this
                axios.post('/Order/confirmOrder',{
                    token:this.token,
                    order_no:e
                }).then(res=>{
                    console.log(res)
                    that.$layer.msg(res.data.msg)
                    if(res.data.status==1){
                        that.$router.push('/order')
                    }
                })
            },



            PayOrder(){ //去付款
                axios.post('/Order/cancelOrder',{
                    token:this.token,
                    order_no:e
                }).then(this.tishi)
            },
            LookOrder(e){ //查看物流
                this.$router.push({
                    path:'/Logistics',
                    query:{
                        order_no:e
                    }
                })
            },
            CancleOrder(e){ //取消订单
                axios.post('/Order/cancelOrder',{
                    token:this.token,
                    order_no:e
                }).then(this.tishi)
            },
            EvaluateOrder(e){        //去评价
                this.$router.push({
                    path:'/Evaluate',
                    query:{
                        order_no:e
                    }
                })
            },
            RemindOrder(e){ //提醒发货
                axios.post('/Order/remindOrder ',{
                    token:this.token,
                    order_no:e
                }).then(this.tishi)
            },
            DeleteOrder(e){ //删除订单
                axios.post('/Order/delOrder ',{
                    token:this.token,
                    order_no:e
                }).then(this.tishi)
            },
            tishi(rs){
                var that =this
                this.$layer.msg(rs.data.msg)
                if(rs.data.status==1){
                    setTimeout(function () {
                        that.$router.go(-1)
                    },1500)
                }
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
        margin-bottom: .3rem;
    }
    .pro:last-child{
        margin-bottom: 0;
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
    .deep>div:first-child{
        background: #d9b765;
    }
    .deep>div:last-child{
        background: #af1c3b;
    }
    .deep>div{
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
    .deep.single>div{
        width: 6.6rem;
        margin-left: .15rem;
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
