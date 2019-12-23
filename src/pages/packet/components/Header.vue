<template>
    <div class="yuyue_header">
        <div class="h_top">
            <div class="header_left" @click="goback">
                <img src="/static/img/back_white.png" alt="">
            </div>
            <div class="header_center">钱包</div>
            <div class="header_right">
                <!-- <img src="../../../../static/img/tgicon_search_gray.png" alt=""> -->
            </div>
        </div>
        <div class="packets">
            <div>
                <div class="p_left">
                    <p>2000</p>
                    <p>总健康币</p>
                </div>
                <div class="p_right">
                    <img src="/static/img/bi.png" alt=""><span>充值</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'proDHeader',
        methods:{
            goback(){
                this.goBack()
            }
        }
    }
</script>

<style scoped>
    .yuyue_header {
        height: 3.05rem;
        background: url("/static/img/packet_bg.png") center -.4rem no-repeat;
        background-size: 100%;
    }
    .h_top{
        height: 0.9rem;
        display: flex;
        align-items: center;
    }

    .yuyue_header .header_left {
        width: 0.9rem;
        text-align: center;
    }

    .yuyue_header .header_left img {
        height: 0.36rem;
    }

    .yuyue_header .header_center {
        flex: 1;
        text-align: center;
        font-size: 0.36rem;
        font-family: pfb;
        color: #fff;
    }

    .yuyue_header .header_right {
        width: 1rem;
        text-align: center;
    }

    .yuyue_header .header_right img {
        height: 0.45rem;
    }
    .packets{
        height: 2.15rem;
        padding-left: .8rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .packets>div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .p_left{
        color: #fff;
        font-family: pfm;
        font-size: .24rem;
    }
    .p_left p:first-child{
        font-size: .7rem;
        font-family: pfb;
        margin-bottom: .15rem;
    }
    .p_right{
        width: 2rem;
        height: .7rem;
        line-height: .7rem;
        background: #fff;
        display: flex;
        align-items: center;
        padding-left: .12rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-top-left-radius: .35rem;
        border-bottom-left-radius: .35rem;
    }
    .p_right img{
        margin-right: .2rem;
        width: .52rem;
    }
    .p_right span{
        font-family: pfb;
        color: #af1c3b;
        font-size: .3rem;
    }
</style>
