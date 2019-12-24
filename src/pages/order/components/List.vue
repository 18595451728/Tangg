<template>
    <div class="list">
        <div class="l_item" v-for="item in list">
            <div class="i_head">
                <p>订单编号：{{item.order_no}}</p>
                <p>{{item.order_status_desc}}</p>
            </div>
            <div class="i_con" v-for="items in item.goods_list" @click="godetail(item.order_no,item.order_status)">
                <img :src="items.goods_pic" alt="">
                <div class="i_art">
                    <p class="i_name">{{items.goods_name}}</p>
                    <div>
                        <p class="i_desc">{{items.goods_describe}}</p>
                        <p class="i_num">×{{items.goods_num}}</p>
                    </div>
                    <p class="i_price">￥{{items.goods_price}}</p>
                </div>
            </div>
            <div class="i_func">
                <div class="cancleorder" v-if="item.order_status==1" @click="CancleOrder(item.order_no)">取消订单</div>
                <div class="payorder" v-if="item.order_status==1" @click="PayOrder(item.order_no)">付款</div>
                <div class="remindorder" v-if="item.order_status==2"  @click="RemindOrder(item.order_no)">提醒发货</div>
                <div class="logistics" v-if="item.order_status==3"  @click="LookOrder(item.order_no)">查看物流</div>
                <div class="confirmorder" v-if="item.order_status==3" @click="EnterOrder(item.order_no)">确认收货</div>
                <div class="deleteorder" v-if="item.order_status==4 || item.order_status==5 || item.order_status==0" @click="DeleteOrder(item.order_no)">删除订单</div>
                <div class="toevaluate" v-if="item.order_status==4" @click="EvaluateOrder(item.order_no)">去评价</div>
                <div class="shouhou" v-if="item.order_status==5" @click="AfterSale(item.order_no)">申请售后</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import global from "../../../components/Global"
    export default {
        name: "List",
        props:['list'],
        data(){
            return {

                token:global.token
            }
        },
        methods:{
            godetail(e,s){
                this.$router.push({
                    path:'/Orderdetail',
                    query:{
                        order_no:e,
                        status:s
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
            EnterOrder(e){       //确认订单
                axios.post('/Order/confirmOrder',{
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
            AfterSale(e){   //申请售后
                this.$router.push({
                    path:'/Choosetype',
                    query:{
                        order_no:e
                    }
                })
            },
            RemindOrder(e){
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
                this.$layer.msg(rs.data.msg)
                if(rs.data.status==1){
                    this.$emit('refreshData')
                }
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
        margin-bottom: .3rem;
    }
    .i_con:last-child{
        margin-bottom: 0;
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

