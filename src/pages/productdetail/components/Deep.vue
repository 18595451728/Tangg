<template>
    <div class="deep">
        <div class="online">
            <img src="/static/img/online.png" alt="">
            <p>在线咨询</p>
        </div>
        <div class="line"></div>
        <div class="collect">
            <img src="/static/img/collect.png" alt="">
            <p>收藏</p>
        </div>
        <div class="joinCart">加入购物车</div>
        <div class="buyNow">立即购买</div>
    </div>
</template>

<script>
    export default {
        name: "Deep"
    }
</script>

<style scoped>
    .deep{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .98rem;
        background: #eeeeee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .online,.collect{
        text-align: center;
        font-family: pf;
        color: #333333;
        font-size: .24rem;
    }
    .online img{
        width: .45rem;
        margin-bottom: .1rem;
    }
    .collect img{
        width: .44rem;
        margin-bottom: .1rem;
    }
    .line{
        width: 1px;
        height: .72rem;
        background: #dcdcdc;
        margin: 0 .05rem;
    }
    .joinCart,.buyNow{
        width: 2rem;
        line-height: .6rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        text-align: center;
        color: #fff;
    }
    .joinCart{
        background: #d9b765;
    }
    .buyNow{
        background: #af1c3b;
    }
</style>
