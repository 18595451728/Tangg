<template>
    <div class="popup" v-show="popup" @click="showPopup">
        <div class="p_con" @click.stop="">
            <img src="/static/img/canclie.png" class="cancle" @click="showPopup" alt="">
            <div class="pro_top" v-if="proInfoBig.sku_data.length > 0">

                <img :src="proInfoBig.sku_data ? (proInfoBig.sku_data[skuIndex].sku_logo ? proInfoBig.sku_data[skuIndex].sku_logo :'' ) :''" alt="">
                <div>
                    <p>￥{{proInfoBig.sku_data[skuIndex].goods_price}}</p>
                    <p>选择产品规格</p>
                </div>
            </div>
            <div class="choosesku">
                <p>选择产品型号</p>
                <div class="sku">
                    <p v-for="item,index in proInfoBig.sku_data" :class="{active:sku == index}" @click="changesku(index)">
                        {{item.sku_info}}
                    </p>
                </div>
            </div>
            <div class="changeNum">
                <p>购物数量</p>
                <div class="count">
                    <div class="reduce" @click="reduce">-</div>
                    <input type="number" @blur="defaultNum" v-model="proNum">
                    <div class="add" @click="add">+</div>
                </div>
            </div>
            <p class="tishi">当前商品可使用<span>满200减10</span>优惠券</p>
            <div class="func">
                <div class="addCart" @click="addCart">加入购物车</div>
                <div class="buyNow" @click="buyNow">立即购买</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Popup",
        props:{

            proInfoBig:{sku_data:[]},
            popup:true,
            sku_data:Array,
            skuIndex:0,
            goods_cate_id:'',
        },
        data(){
            return {
                cart_type:0,
                popup1:0, // 购买参数是否显示
                sku:'',
                proNum:1
        }
        },
        methods:{
            showPopup(){
                this.$emit('showPopup');

            },
            changesku(e){
                this.sku = e
            },
            // 购物数量 减少
            reduce(){
                this.proNum --;
                if(this.proNum <= 1){
                    this.proNum = 1
                }
            },
            // 购物数量 增加
            add(){
                this.proNum ++
                if( this.proNum >= this.proInfoBig.list.sale_num){
                    this.proNum = this.proInfoBig.list.sale_num
                }
            },
            defaultNum(){
                if (!this.proNum) this.proNum = 1
            },

            // 加入购物车
            addCart(){
                this.buy(0)
            },

            // 进行购买
            buyNow(){
                this.buy(1)
            },

            // 加入购物车方法
            buy(type) {
                // goods_id 商品id
                axios.post("/Cart/addCart",{token: this.$storage.session.get('token'), goods_id:this.goods_cate_id, goods_num:this.proNum,cart_type:type})
                    .then(this.addShopApi);
            },

            // 加入购物车接口
            addShopApi(res) {
                let data = res.data;
                if(data.status === 1){
                    this.$router.push('/Shopcart')
                }
            },

        }
    }
</script>

<style scoped>
    .popup{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background: rgba(0,0,0,.49);
    }
    .p_con{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
    }
    .cancle{
        position: absolute;
        top: .3rem;
        right: .3rem;
        width: .44rem;
    }
    .pro_top{
        display: flex;
        align-items: center;
    }
    .pro_top img{
        width: 2.2rem;
        margin-right: .25rem;
    }
    .pro_top p:first-child{
        font-size: .36rem;
        color: #af1c3b;
        font-family: pfb;
    }
    .pro_top p:last-child{
        font-size: .24rem;
        color: #999;
        font-family: pf;
        margin-top: .1rem;
    }
    .choosesku{
        margin-top: .4rem;
    }
    .choosesku>p{
        font-family: pfb;
        font-size: .24rem;
        color: #333;
    }
    .sku{
        display: flex;
        flex-wrap: wrap;
        margin-top: .2rem;
    }
    .sku p{
        padding: 0 .2rem;
        font-size: .24rem;
        color: #666666;
        font-family: pf;
        background: #f5f5f5;
        line-height: .62rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        border: .01rem solid #f5f5f5;
        margin-bottom: .2rem;
    }
    .sku p.active{
        background: #fff;
        border-color: #af1c3b;
        color: #af1c3b;
    }
    .changeNum{
        width: 6.5rem;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: .01rem solid #eeeeee;
        margin-top: .1rem;
    }
    .changeNum>p{
        font-size: .24rem;
        color: #333333;
        font-family: pf;
    }
    .count{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .46rem;

    }
    .count input{
        width: .92rem;
        text-align: center;
        height: .46rem;
        background: #f5f5f5;
        margin: 0 .02rem;
    }
    .count div{
        width: .5rem;
        text-align: center;
        font-size: .4rem;
    }
    .reduce{
        background: #eeeeee;
        color: #999999;
    }
    .add{
        background: #af1c3b;
        color: white;
    }
    .tishi{
        text-align: center;
        font-size: .26rem;
        font-family: pf;
        color: #999999;
        margin: .48rem 0 .28rem;
    }
    .tishi span{
        color: #af1c3b;
    }
    .func{
        display: flex;
        justify-content: space-between;
        line-height: .8rem;
        text-align: center;
    }
    .func>div{
        width:3.3rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        color: white;
        font-family: pf;
        font-size: .3rem;
    }
    .func>div:first-child{
        background: #d9b765;
    }
    .func>div:last-child{
        background: #af1c3b;
    }
</style>
