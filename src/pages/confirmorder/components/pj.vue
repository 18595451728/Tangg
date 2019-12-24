<template>
    <div class="pj">
        <!--v-if="address === undefined"-->
        <div @click="toAddress" class="add_address" v-if="address === undefined">
            <p><img src="/static/img/add.png" alt=""><span>选择收货地址</span></p>
            <img src="/static/img/arrow_right.png" alt="">
        </div>

        <div @click="toAddress" class="add_address addres_info" v-if="address !== undefined">
            <div class="info">
                <p><img src="/static/img/add.png" alt=""><em>{{address.consignee}}</em> <em>{{address.telephone}}</em></p>
                <p class="des">{{address.province}}{{address.city}}{{address.district}}{{address.address}}</p>
            </div>
            <img src="/static/img/arrow_right.png" alt="">
        </div>

        <!--商品列表-->


        <div class="pro_mes" >
            <span v-for="item,index in cartList">


            <div class="pro" >
                <img :src="item.goods_pic ? item.goods_pic :'' " alt="">
                <div class="pro_art">
                    <p><span>{{item.goods_name}}</span><span>￥{{item.goods_price}}</span></p>
                    <p><span>{{item.goods_describe}}</span><span>×{{item.goods_num}}</span></p>
                    <p><span>15ml</span></p>
                </div>
            </div>
            <div class="pro_count">
                <p>购买数量</p>
                <div class="count">
                    <div class="reduce" @click="mineNumBtn(item, index)">-</div>
                    <input type="number" v-model="item.goods_num" @blur="defaultNum">
                    <div class="add" @click="addNumBtn(item,index)">+</div>
                </div>
            </div>
        </span>

            <div class="fs">
                <p>配送方式</p>
                <p>快递  包邮</p>
            </div>
            <div class="lm">
                <p>买家留言</p>
                <input v-model="liuyan"  type="text" placeholder="选填，建议事先与客服沟通确认">
            </div>
        </div>
        <div class="sendmes">
            <div class="mes_list">
                <p>商品金额</p>
                <p>¥{{totalPrice.total_price}}</p>
            </div>
            <div v-if="coupon_list.length > 0" class="mes_list">
                <p>优惠券</p>
                <p>-¥ </p>
            </div>
            <div class="mes_list" v-if="integral_info.user_integral > 0">
                <p>积分代扣</p>
                <p>您有{{integral_info.user_integral}}积分可抵扣{{(integral_info.exchange_integral/integral_info.integral_exchange)*integral_info.user_integral}}元</p>
            </div>
            <div class="mes_endprice">
                <p><span>实付：</span>￥{{totalPrice.total_price}}</p>
            </div>
        </div>

        <div class="deep">
            <div class="d_left">
                <p>共{{totalPrice.total_num}}件商品</p>
                <p>合计：<span>¥{{totalPrice.total_price}}</span></p>
            </div>
            <div class="d_right" @click="buPayBtn">立即购买</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {common} from '../../../components/js/common';   //   公共变量
    export default {
        name: "pj",
        data() {
            return {
                cart_type:0, // 购物车   直接购买
                star: 4,
                pro_num:1,

                cartList:[],
                address:undefined,
                totalPrice:[],
                coupon_list:[], // 优惠券列表
                couponInfo:{},
                integral_info:{}, // 积分

                liuyan:'', // 买家留言
            }
        },

        mounted() {

            this.cart_type = this.$route.query.cartType;
            this.cartOrderWay()
        },
        methods: {

            // 商品 数量减少
            mineNumBtn(info,index){


                if(this.cartList[index].goods_num <= 1){
                    return;
                }

                this.cartList[index].goods_num = parseInt(this.cartList[index].goods_num) - 1 ;
                this.totalPrice.total_num = parseInt(this.totalPrice.total_num) - 1;
                this.totalPrice.total_price = parseInt(this.totalPrice.total_price) - parseInt(this.cartList[index].goods_price);
                this.selectNum({cart_id:info.cart_id, goods_num:this.cartList[index].goods_num});


            },

            // 商品 数量增加
            addNumBtn(info,index){
                if(this.cartList[index].goods_num > 10){
                    return;
                }
                this.cartList[index].goods_num = parseInt(this.cartList[index].goods_num) + 1 ;
                this.totalPrice.total_num = parseInt(this.totalPrice.total_num) + 1;
                this.totalPrice.total_price = parseInt(this.totalPrice.total_price) + parseInt(this.cartList[index].goods_price);
                this.selectNum({cart_id:info.cart_id, goods_num:this.cartList[index].goods_num});
            },

            // 选中数量编辑 后台
            selectNum(info) {
                axios.post("/Cart/editCart",{token: this.$storage.session.get('token'),...info})
                    .then(this.selectNumApi)
            },

            //选中数量编辑后台API
            selectNumApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                }
            },


            // 获取结算列表
            cartOrderWay() {
                axios.post("/Order/cartOrder",{token: this.$storage.session.get('token'),cart_type:this.cart_type})
                    .then(this.cartOrderApi)
            },

            //获取结算列表
            cartOrderApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                    if(common.addressInfo !== undefined){
                        this.address = common.addressInfo;
                        common.addressInfo = {};
                    }else{
                        this.address = datas.data.address;
                    }
                    this.cartList = datas.data.cartList;
                    this.coupon_list = datas.data.coupon_list;
                    this.totalPrice = datas.data.totalPrice;
                    this.integral_info = datas.data.integral_info;
                    // this.getOrderPriceWay();  // 获取优惠价格方法
                }
            },

            // 去支付
            buPayBtn(){
                this.toBuyWay(); // 去支付
            },

            // 去支付方法
            toBuyWay() {
                if(!this.address){
                    this.$layer.msg('请进行选择收货地址')
                    return;
                }
                let params = {pay_integral:'',coupon_id:0, address_id:this.address.address_id, user_note:this.liuyan};
                axios.post("/Order/addOrder",{token: this.$storage.session.get('token'),cart_type:this.cart_type,...params})
                    .then(this.toBuyApi)
            },

            //去支付API
            toBuyApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                    this.weChatPay(datas.data.order_no);
                }
            },

            // 去支付方法
            weChatPay(order_no) {
                axios.post("/Pay/weChatPay",{token: this.$storage.session.get('token'),order_no:order_no})
                    .then(this.weChatPayApi)
            },

            //去支付API
            weChatPayApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                    this.$layer.msg(res.msg);
                    setTimeout(()=>{
                        this.$router.push({ path: "./Mine"});
                    },1500)
                }
            },






            // 获取优惠价格方法
            getOrderPriceWay() {
                axios.post("/Order/orderBuy",{token: this.$storage.session.get('token'),cart_type:this.cart_type})
                    .then(this.getOrderPriceApi)
            },

            //获取优惠价格API
            getOrderPriceApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                    this.address = datas.data.address;
                    this.cartList = datas.data.cartList;
                    this.coupon_list = datas.data.coupon_list;
                    this.totalPrice = datas.data.totalPrice;
                    this.integral_info = datas.data.integral_info;
                }
            },



            // 跳入收货地址
            toAddress(){
                this.$router.push({ path: "./Addresslist",query: { paths:'confirmorder'  }});
            },


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
    .addres_info .des{
        line-height: 0.38rem;
        margin-top: 0.14rem;
        color: #666;
    }
    .add_address.addres_info p{color: #333;}

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
        margin-bottom: -0.30rem;
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
    .add_address img{
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
        margin-top: 0.30rem;
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
