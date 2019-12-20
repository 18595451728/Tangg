<template>
    <div class="tab">
        <div class="tab_hd">

            <div v-for="(item,index) of typeList" :key="item.appointment_id" :class="{active: tab === index}" @click="chooseTab(index,item.goods_cate_id)">
                {{item.goods_cate_name}}
            </div>

            <!--<div :class="{active:tab==1}" @click="chooseTab(1)">固体饮料</div>-->
        </div>
        <div v-if="proList.length > 0" class="tab_bd">
            <div class="pro" v-for="(item,index) in proList" @click="toDetail(item.goods_id)">
                <div class="pro_img"><img :src="item.goods_pic" alt=""></div>
                <p class="price">￥{{item.goods_price}}<span>￥{{item.goods_price}}</span></p>
                <p class="name">{{item.goods_name}}</p>
                <p class="desc">{{item.goods_describe}}</p>
                <p class="buy">立即购买</p>
            </div>
        </div>
        <p v-if="proList.length <= 0" class="qidai">商城正在上新中哦，请尽情期待！</p>
    </div>
</template>

<script>
    export default {
        name: "Allprotab",
        props:{
            typeList:Array, // 类型列表
            proList:Array, // 商品列表
        },
        data() {
            return {
                tab: 0,
                cateId:'',
            }
        },
        mounted() {

        },
        methods: {
            // tab 切换
            chooseTab(e,cateId) {
                this.tab = e;
                this.cateId = cateId;
                this.$emit('event1',{e,cateId});
            },
            // 调转详情页
            toDetail(cateId){
                this.$router.push({ path: "./ProductDetail", query: { cateId:cateId  }});
            }
        }
    }
</script>

<style scoped>
    .tab {
        width: 6.9rem;
        margin: .3rem auto;
    }

    .tab_hd {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tab_hd > div {
        width: 3.3rem;
        line-height: .6rem;
        font-size: .24rem;
        font-family: pfb;
        color: #333333;
        text-align: center;
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        -webkit-box-shadow: 0 0 .24rem rgba(87, 87, 87, .09);
        -moz-box-shadow: 0 0 .24rem rgba(87, 87, 87, .09);
        box-shadow: 0 0 .24rem rgba(87, 87, 87, .09);
    }

    .tab_hd > div.active {
        color: #fff;
        background: #af1c3b;
    }
    .tab_bd{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .3rem;
        flex-wrap: wrap;
    }
    .tab_bd > div {
        width: 3.3rem;
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        -webkit-box-shadow: 0 0 .24rem rgba(87, 87, 87, .09);
        -moz-box-shadow: 0 0 .24rem rgba(87, 87, 87, .09);
        box-shadow: 0 0 .24rem rgba(87, 87, 87, .09);
        padding: .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: .2rem;
    }
    .pro_img{
        width: 100%;
        height: 2rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pro_img img{
        width: 1.29rem;
        height: 1.9rem;
    }
    .price{
        font-family: pfb;
        font-size: .36rem;
        color: #af1c3b;
        margin: .2rem 0;
    }
    .price span{
        font-family: pf;
        font-size: .2rem;
        color: #999999;
        text-decoration: line-through;
    }
    .name{
        font-family: pfb;
        font-size: .28rem;
        color: #333333;
        margin: .2rem 0;
    }
    .desc{
        font-size: .24rem;
        color: #666666;
        font-family: pf;
        margin: .2rem 0;
    }
    .buy{
        width: 2rem;
        line-height: .6rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        background: #af1c3b;
        font-size: .3rem;
        color: white;
        text-align: center;
        font-family: pf;
    }
    .qidai{
        font-size: .24rem;
        font-family: pf;
        color: #999;
        text-align: center;
    }
</style>
