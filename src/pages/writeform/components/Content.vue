<template>
    <div class="contents">
        <div class="j_top">
            <div class="t_mes">
                <img src="/static/img/cartpro.png" alt="">
                <div class="t_art">
                    <p><span>普瑞福鼻腔抗菌液</span><span>×1</span></p>
                    <p>复方薄荷油滴鼻液成人儿童鼻炎</p>
                    <p>商品小计：<span>￥399.00</span></p>
                </div>
            </div>
        </div>
        <div class="ht">
            <div class="h_top">
                <p>物流公司</p>
                <p><input type="text" placeholder="请填写"></p>
            </div>
            <div class="h_top">
                <p>物流单号</p>
                <p><input type="text" placeholder="*必填"></p>
            </div>
            <div class="h_top">
                <p>联系电话</p>
                <p><input type="text" placeholder="请填写手机号码"></p>
            </div>
            <div class="upload">
                <p>上传物流单</p>
                <div class="sc">
                    <img src="/static/img/camera.png" alt="">
                    <input type="file">
                </div>
            </div>
        </div>
        <div class="send">提交申请</div>


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
    .t_art{
        width: 4.55rem;
    }
    .t_art p:first-child {
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin: .2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .t_art p:nth-child(2) {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
    }
    .t_art p:last-child{
        font-size: .24rem;
        font-family: pfm;
        color: #999;
        margin-top: .48rem;
        text-align: right;
    }
    .t_art p:last-child span{
        font-family: pfb;
        font-size: .3rem;
        color: #333;
    }
    .ht{
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

    .h_top p:first-child{
        font-size: .26rem;
        color: #373737;
        font-family: pfm;
    }
    .h_top p:last-child input{
        font-size: .24rem;
        color: #949494;
        font-family: pfm;
        text-align: right;
    }

    .h_top img{
        width: .18rem;
        margin-left: .3rem;
    }

    .t_top.thh input{
        width: 75%;
        background: none;
        font-family: pfm;
        color: #989898;
        font-size: .24rem;
    }
    .upload{
        padding: 0 0 .3rem;
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
        width: 1.5rem;
    }
    .sc img{
        width: 1.5rem;
        height: 1.5rem;
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
    .contents>div.ht{
        margin-top: .75rem;
    }
</style>
