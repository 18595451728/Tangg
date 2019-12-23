<template>
    <div class="count">
        <div class="jifen">500</div>
        <div class="func">
            <div class="f_title">兑换积分</div>
            <div class="f_two">
                <img src="/static/img/zs.png" alt="">
                <input type="number" placeholder="300">
                <div class="changeAll">全部兑换</div>
            </div>
            <div class="f_rule">当前可用积分500，可用兑换50个健康币</div>
            <div class="f_btn">确定兑换</div>
        </div>
        <div class="j_list">
            <div class="l_title">
                <div class="chooseTime"><span>本月</span><img src="/static/img/arrow_down.png" alt=""></div>
                <div class="nums">
                    <p>获取 <span>50</span></p>
                    <p>使用 4</p>
                </div>
            </div>
            <div class="l_each" v-for="item  in 5">
                <div class="e_left">
                    <p>购买商品积分奖励</p>
                    <p>2019.11.14  09:54:03</p>
                </div>
                <div class="e_right">+20</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "count"
    }
</script>

<style scoped>
    .jifen{
        width: 100%;
        line-height: 1.08rem;
        text-align: center;
        font-family: pfb;
        color: white;
        font-size: .7rem;
        background: #af1c3b;
    }
    .func,.j_list{
        width: 6.9rem;
        margin: .25rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .32rem rgba(175, 175, 175, .2);
        -moz-box-shadow: 0 0 .32rem rgba(175, 175, 175, .2);
        box-shadow: 0 0 .32rem rgba(175, 175, 175, .2);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .3rem;
        position: relative;
        background: #fff;
    }
    .func{
        padding: .3rem;
    }
    .func::after{
        position: absolute;
        content: "";
        display: block;
        width: 7.5rem;
        height: 2.55rem;
        left: -.3rem;
        top: -.25rem;
        background: -moz-linear-gradient(top, #af1c3b 0%, #ffffff 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#af1c3b), color-stop(100%,#ffffff));
        background: -webkit-linear-gradient(top, #af1c3b 0%,#ffffff 100%);
        background: -o-linear-gradient(top, #af1c3b 0%,#ffffff 100%);
        background: -ms-linear-gradient(top, #af1c3b 0%,#ffffff 100%);
        background: linear-gradient(to bottom, #af1c3b 0%,#ffffff 100%);
        z-index: -1;
    }
    .f_title{
        font-family: pfm;
        color: #333333;
        font-size: .3rem;
        margin-bottom: .65rem;
    }
    .f_two{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: .3rem;
        border-bottom: .01rem solid #f3f3f3;
    }
    .f_two img{
        width: .48rem;
    }
    .f_two input{
        width: 4.25rem;
        font-family: pfb;
        color: #333333;
        font-size: .5rem;
        line-height: .45rem;
        height: .45rem;
    }
    .changeAll{
        color: #af1c3b;
        font-size: .28rem;
        font-family: pfb;
    }
    .f_two input::-webkit-input-placeholder {
        color: #333333;
    }
    .f_two input::-moz-input-placeholder {
        color: #333333;
    }
    .f_two input::-ms-input-placeholder {
        color: #333333;
    }
    .f_rule{
        font-size: .24rem;
        color: #888888;
        font-family: pfb;
        margin: .2rem 0 .6rem;
    }
    .f_btn{
        width: 6.3rem;
        line-height: .8rem;
        background: #af1c3b;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        text-align: center;
        color: white;
        font-family: pfm;
        font-size: .34rem;
    }
    .l_title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .chooseTime{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .3rem;
        color: #666;
        font-family: pfb;
        width: 1.5rem;
        line-height: .46rem;
        -webkit-border-radius: .23rem;
        -moz-border-radius: .23rem;
        border-radius: .23rem;
        background: #eeeeee;
    }
    .chooseTime img{
        margin-left: .15rem;
        width: .2rem;
    }
    .nums{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: .3rem;
        color: #333333;
        font-family: pfb;
    }
    .nums p:last-child{
        margin-left: .35rem;
    }
    .nums p span{
        color: #af1c3b;
    }
    .l_each{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: .01rem solid #dcdcdc;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .e_left{
        font-family: pfm;
        color: #999999;
        font-size: .24rem;
    }
    .e_left p:first-child{
        font-family: pfm;
        font-size: .28rem;
        color: #333;
        margin-bottom: .15rem;
    }
    .e_right{
        font-size: .3rem;
        color: #af1c3b;
        font-family: pfb;
    }
</style>
