<template>
    <div class="tab">
        <div class="tab_hd">
            <div :class="{active:tab==0}" @click="chooseTab(0)">外用抗菌</div>
            <div :class="{active:tab==1}" @click="chooseTab(1)">固体饮料</div>
        </div>
        <div class="tab_bd">
            <div class="pro" v-for="item in 5" @click="toDetail()">
                <div class="pro_img"><img src="/static/img/pro.png" alt=""></div>
                <p class="price">￥2688.00<span>￥2688.00</span></p>
                <p class="name">普瑞福鼻腔抗菌液</p>
                <p class="desc">复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血</p>
                <p class="buy">立即购买</p>
            </div>
        </div>
        <p class="qidai">商城正在上新中哦，请尽情期待！</p>
    </div>
</template>

<script>
    export default {
        name: "Allprotab",
        data() {
            return {
                tab: 0
            }
        },
        mounted() {

        },
        methods: {
            chooseTab(e) {
                this.tab = e
            },
            toDetail(){
                this.$router.push('./ProductDetail')
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
