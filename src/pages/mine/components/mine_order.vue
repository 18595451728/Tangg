<template>
    <div class="mine_order">
        <div class="o_top">
            <p>我的订单</p>
            <p @click="goOrder">查看全部</p>
        </div>
        <div class="o_bottom">
            <div>
                <img src="../../../../static/img/o1.png" class="o1" alt="">
                <p>待支付</p>
            </div>
            <div>
                <img src="../../../../static/img/o2.png" class="o2" alt="">
                <p>待发货</p>
            </div>
            <div>
                <img src="../../../../static/img/o3.png" class="o3" alt="">
                <p>待收货</p>
            </div>
            <div>
                <img src="../../../../static/img/o4.png" class="o4" alt="">
                <p>待评价</p>
            </div>
            <div>
                <img src="../../../../static/img/o5.png" class="o5" alt="">
                <p>退款/售后</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine_order",
        methods:{
            goOrder(){
                console.log(111)
                this.$router.push('/Order')
            }
        }
    }
</script>

<style scoped>
    .mine_order{
        width: 100%;
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        margin-top: .22rem;
        margin-bottom: .3rem;
        -webkit-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        -moz-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .o_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .88rem;
        border-bottom: 1px solid #e0e0e0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .o_top p:first-child{
        font-size: .3rem;
        color: #000000;
        font-family: pfb;
    }
    .o_top p:last-child{
        font-size: .24rem;
        color: #666666;
        font-family: pfm;
    }
    .o_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .o_bottom>div{
        text-align: center;
        font-size: .24rem;
        color: #4c4c4c;
        font-family: pfm;
    }
    .o_bottom>div p{
        margin-top: .18rem;
    }
    .o1{
        width: .47rem;
    }
    .o2{
        width: .49rem;
    }
    .o3{
        width: .44rem;
    }
    .o4{
        width: .5rem;
    }
    .o5{
        width: .44rem;
    }
</style>
