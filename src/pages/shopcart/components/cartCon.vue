<template>
    <div class="cartcon">
        <div class="c_list">
            <div class="c_head">
                <p>共2件商品</p>
                <p>编辑</p>
            </div>
            <div class="list" v-for="item in 2">
                <img src="/static/img/selected.png" class="select" alt="">
                <img src="/static/img/cartpro.png" alt="" class="proimg">
                <div class="cart_art">
                    <p class="p_name">普瑞福鼻腔抗菌液</p>
                    <p class="p_desc">复方薄荷油滴鼻液成人儿童鼻炎</p>
                    <div>
                        <p class="p_price">￥399.00</p>
                        <div class="p_count">
                            <div class="reduce">-</div>
                            <input type="number" @blur="defaultNum" v-model="cartNum">
                            <div class="add">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c_func">
            <div class="f_left">
                <img src="/static/img/select.png" alt="">
                <span>全选</span>
            </div>
            <div class="f_right">
                <div class="r_left">
                    <p>合计：<span>￥399.00</span></p>
                    <p>不含运费</p>
                </div>
                <div class="r_right" @click="jiesuan">结算 (1)</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartCon",
        data() {
            return {
                cartNum: 1
            }
        },
        methods: {
            defaultNum() {
                if (!this.cartNum) this.cartNum = 1
            },
            jiesuan(){
                this.$router.push('/ConfirmOrder')
            }
        }
    }
</script>

<style scoped>
    .cartcon {
        padding-bottom: 1.02rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c_list {
        width: 6.9rem;
        margin: .25rem auto;
        padding: 0 .3rem;
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

    .c_head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .35rem 0 .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c_head > p:first-child {
        font-size: .24rem;
        color: #666;
        font-family: pf;
    }

    .c_head > p:last-child {
        font-size: .24rem;
        color: #313131;
        font-family: pfb;
    }

    .list {
        display: flex;
        align-items: center;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: .01rem solid #dcdcdc;
    }

    .list:last-child {
        border-bottom: none;
    }

    .select {
        width: .33rem;
        margin-right: .3rem;
    }

    .proimg {
        width: 1.5rem;
        margin-right: .15rem;
    }

    .cart_art {
        width: 4rem;
    }

    .cart_art > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .p_name {
        font-size: .28rem;
        color: #333;
        font-family: pfb;
        margin-bottom: .2rem;
    }

    .p_desc {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
        margin-bottom: .3rem;
    }
    .p_price{
        font-family: pfb;
        font-size: .3rem;
        color: #313131;
    }
    .p_count {
        display: flex;
        align-items: center;
        width: 1.46rem;
        height: .5rem;
        border: .01rem solid #d2d2d2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        line-height: .48rem;
        overflow: hidden;
    }

    .add, .reduce {
        width: .45rem;
        background: #ededed;
        color: #535353;
        font-size: .4rem;
    }

    .p_count input {
        width: .53rem;
        border-right: .01rem solid #d2d2d2;
        border-left: .01rem solid #d2d2d2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        height: .48rem;
    }
    .c_func{
        position: fixed;
        bottom: 1rem;
        left: 0;
        width: 100%;
        height: 1.02rem;
        padding: 0 .32rem 0 .41rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 -.05rem .18rem -.05rem rgba(153,153,153,.15);
        -moz-box-shadow: 0 -.05rem .18rem -.05rem rgba(153,153,153,.15);
        box-shadow: 0 -.05rem .18rem -.05rem rgba(153,153,153,.15);
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }
    .f_left,.f_right{
        display: flex;
        align-items: center;
    }
    .f_left img{
        width: .33rem;
        margin-right: .25rem;
    }
    .f_left{
        font-size: .28rem;
        color: #333333;
        font-family: pf;
    }

    .r_left p:first-child{
        font-size: .24rem;
        font-family: pf;
        color: #333333;
    }
    .r_left p:first-child span{
        font-size: .3rem;
        font-family: pfb;
    }
    .r_left p:last-child{
        font-size: .20rem;
        font-family: pf;
        color: #333333;
        text-align: right;
    }

    .r_right{
        width: 1.93rem;
        line-height: .7rem;
        background: #af1c3b;
        color: white;
        font-family: pfb;
        font-size: .3rem;
        text-align: center;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        margin-left: .2rem;
    }
</style>
