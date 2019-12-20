<template>
    <div class="list">
        <div class="l_item" v-for="item in list">
            <div class="i_head">
                <p>订单编号：E232454646454FDF34</p>
                <p>{{item.desc}}</p>
            </div>
            <div class="i_con" @click="godetail">
                <img src="/static/img/cartpro.png" alt="">
                <div class="i_art">
                    <p class="i_name">普瑞福鼻腔抗菌液</p>
                    <div>
                        <p class="i_desc">复方薄荷油滴鼻液成人儿童鼻炎</p>
                        <p class="i_num">×1</p>
                    </div>
                    <p class="i_price">￥2688.00</p>
                </div>
            </div>
            <div class="i_func">
                <div class="cancleorder" v-if="item.status==1">取消订单</div>
                <div class="payorder" v-if="item.status==1 ">付款</div>
                <div class="remindorder" v-if="item.status==2">提醒发货</div>
                <div class="logistics" v-if="item.status==3">查看物流</div>
                <div class="confirmorder" v-if="item.status==3">确认收货</div>
                <div class="deleteorder" v-if="item.status==4 || item.status==5">删除订单</div>
                <div class="toevaluate" v-if="item.status==4">去评价</div>
                <div class="shouhou" v-if="item.status==5">申请售后</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data(){
            return {
                list:[{
                    status:1,
                    desc:'待付款'
                },{
                    status:2,
                    desc:'已付款'
                },{
                    status:3,
                    desc:'待收货'
                },{
                    status:4,
                    desc:'待评价'
                },{
                    status:5,
                    desc:'交易成功'
                }]
            }
        },
        methods:{
            godetail(){
                this.$router.push('/Orderdetail')
            }
        }
    }
</script>

<style scoped>
    .list{
        margin: .3rem auto;
        width: 6.9rem;
    }
    .l_item{
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: .15rem;
        -moz-border-radius: .15rem;
        border-radius: .15rem;
        -webkit-box-shadow: 0 0 .18rem rgba(153,153,153,.15);
        -moz-box-shadow: 0 0 .18rem rgba(153,153,153,.15);
        box-shadow: 0 0 .18rem rgba(153,153,153,.15);
        margin-bottom: .3rem;
    }
    .i_head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .3rem;
    }
    .i_head p:first-child{
        font-size: .24rem;
        color: #999999;
        font-family: pf;
    }
    .i_head p:last-child{
        font-size: .26rem;
        color: #af1c3b;
        font-family: pfm;
    }
    .i_con{
        display: flex;
        align-items: center;
        border-bottom: .01rem solid #f7f7f7;
        padding-bottom: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .i_con>img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .3rem;
    }
    .i_name{
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin-bottom: .2rem;
    }
    .i_art{
        width: 4.3rem;
    }
    .i_art>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .i_desc{
        font-size: .24rem;
        color: #999999;
        font-family: pfm;
    }
    .i_num{
        font-size: .28rem;
        color: #3b3b3b;
        font-family: pfb;
    }
    .i_price{
        font-size: .3rem;
        color: #333333;
        font-family: pfb;
        margin-top: .5rem;
    }
    .i_func{
        display: flex;
        justify-content: flex-end;
        padding-top: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .i_func>div{
        width: 2rem;
        line-height: .7rem;
        text-align: center;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        font-size: .3rem;
        font-family: pfb;
        color: #fff;
        margin-left: .3rem;
    }
    .cancleorder{
        background: #bfbfbf;
    }
    .payorder,.remindorder,.confirmorder,.toevaluate,.shouhou{
        background: #af1c3b;
    }
    .logistics{
        background: #d9b765;
    }
    .deleteorder{
        background: #231915;
    }
</style>

