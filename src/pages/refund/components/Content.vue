<template>
    <div class="contents">
        <div class="j_top">
            <div class="t_mes">
                <img src="/static/img/cartpro.png" alt="">
                <div class="t_art">
                    <p>普瑞福鼻腔抗菌液</p>
                    <p>复方薄荷油滴鼻液成人儿童鼻炎</p>
                </div>
            </div>
        </div>
        <div class="ht">
            <div class="h_top">
                <p>货物状态</p>
                <p @click="chooseReceive"><span>已收到货</span><img src="/static/img/arrow_right.png" alt=""></p>
            </div>
            <div class="h_top hh">
                <p>退款原因</p>
                <p @click="chooseReason"><span>未按约定时间发货</span><img src="/static/img/arrow_right.png" alt=""></p>
            </div>
            <div class="h_bottom">卖家未及时发货，单方面违约</div>
        </div>
        <div class="tt">
            <div class="t_top">
                退款金额： ¥ 50.00
            </div>
            <div class="t_bottom">最多 ¥50.00， 含发货邮费 ¥0.00</div>
            <div class="t_top thh">
                <span>退款说明：</span><input type="text" placeholder="选填">
            </div>
        </div>
        <div class="upload">
            <p>上传凭证</p>
            <div class="sc">
                <img src="/static/img/certificate.png" alt="">
                <input type="file">
            </div>
        </div>
        <div class="send" @click="send">提交申请</div>
        <div class="popupone" v-show="showOne" @click="closeOne">
            <div class="p_main" @click.stop="">
                <p class="p_title">货物状态</p>
                <div class="chooseStatus">
                    <p><span>未收到货</span><img :src="!hasReceive?'/static/img/selected.png':'/static/img/select.png'" @click="Receive(false)" alt=""></p>
                    <div class="line"></div>
                    <p><span>已收到货</span><img :src="hasReceive?'/static/img/selected.png':'/static/img/select.png'" @click="Receive(true)" alt=""></p>
                </div>
            </div>
        </div>
        <div class="popupone" v-show="showTwo" @click="closeTwo">
            <div class="p_main" @click.stop="">
                <p class="p_title">退款原因</p>
                <div class="tkr">
                    <p class="active">7天无理由退款</p>
                    <p>快递一直没送达</p>
                    <p>卖家发错货</p>
                    <p>未按约定时间发货</p>
                    <p>颜色/款式/图案与描述不符</p>
                    <p>收到商品少件或破损</p>
                    <p>假冒品牌</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){
            return {
                hasReceive:!1,
                showOne:!1,
                showTwo:!1
            }
        },
        methods:{
            chooseReceive(){
                this.showOne = !0
            },
            chooseReason(){
                this.showTwo = !0
            },
            closeOne(){
                this.showOne = !1
            },
            closeTwo(){
                this.showTwo = !1
            },
            Receive(e){
                this.hasReceive = e
            },
            send(){
                this.$router.push('/Servicedetail')
            }
        }
    }
</script>

<style scoped>
    .contents>div{
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
    .t_mes {
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        /*margin-bottom: .3rem;*/
    }

    .t_mes img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .2rem;
    }
    .t_art p:first-child {
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin: .2rem 0;
    }

    .t_art p:last-child {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
    }
    .ht,.tt{
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .h_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .83rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .t_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: .83rem;
        font-family: pfb;
        color: #373737;
        font-size: .24rem;
    }
    .h_top p:first-child{
        font-size: .24rem;
        color: #373737;
        font-family: pfb;
    }
    .h_top p:last-child{
        font-size: .24rem;
        color: #333333;
        font-family: pfm;
        display: flex;
        align-items: center;
    }
    .h_top img{
        width: .18rem;
        margin-left: .3rem;
    }
    .h_top.hh{
        border-bottom: none;
    }
    .h_bottom,.t_bottom{
        font-size: .24rem;
        color: #999999;
        font-family: pfm;
        padding-bottom: .3rem;
        margin-top: -.09rem;
    }
    .t_bottom{
        border-bottom: 1px solid #e5e5e5;
    }
    .t_top.thh{
        align-items: center;
        justify-content: flex-start;
    }
    .t_top.thh input{
        width: 75%;
        background: none;
        font-family: pfm;
        color: #989898;
        font-size: .24rem;
    }
    .upload{
        padding: 0 .3rem .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .upload>p{
        line-height: .83rem;
        font-family: pfb;
        font-size: .24rem;
        color: #373737;
    }
    .sc{
        position: relative;
        width: 1.8rem;
    }
    .sc img{
        width: 1.8rem;
        height: 1.8rem;
    }
    .sc input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .send{
        position: fixed;
        width: 6.7rem;
        height: .7rem;
        left: .4rem;
        bottom: .3rem;
        line-height: .7rem;
        text-align: center;
        font-family: pfb;
        font-size: .3rem;
        color: white;
        background: #af1c3b;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    .contents>div.popupone{
        position: fixed;
        width: 100%;
        height: calc(100% - .9rem);
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.3);
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        margin: 0;
    }
    .p_main{
        background: white;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
    }
    .p_title{
        line-height: 1.32rem;
        font-size: .3rem;
        color: #2a2a2a;
        font-family: pfb;
        text-align: center;
    }
    .chooseStatus{
        padding: 0 .4rem .7rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .chooseStatus p{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chooseStatus p span{
        font-family: pfb;
        font-size: .26rem;
        color: #373737;
    }
    .chooseStatus p img{
        width: .33rem;
    }
    .line{
        width: 100%;
        height: 1px;
        background: #e5e5e5;
        margin: .3rem 0;
    }
    .tkr{
        padding: 0 .4rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
    }
    .tkr p{
        padding: 0 .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: .62rem;
        border: .01rem solid #f5f5f5;
        background: #f5f5f5;
        font-family: pf;
        font-size: .24rem;
        color: #666666;
        margin-right: .3rem;
        margin-bottom: .3rem;
        -webkit-border-radius: .32rem;
        -moz-border-radius: .32rem;
        border-radius: .32rem;
    }
    .tkr p.active{
        border-color: #af1c3b;
        background: none;
        color: #af1c3b;
    }
</style>
