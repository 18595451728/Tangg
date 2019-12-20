<template>
    <div class="rz">
        <img src="/static/img/tg-logo.png" class="logo" alt="">
        <div class="gs">
            <p>浙江唐冠健康管理有限公司</p>
            <p><img src="/static/img/dp.png" alt=""><img src="/static/img/wx.png" alt=""></p>
        </div>
        <div class="baby">全部宝贝</div>
    </div>
</template>

<script>
    export default {
        name: "Rz"
    }
</script>

<style scoped>
    .rz{
        width: 6.9rem;
        margin: .3rem auto;
        background: #ffffff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo{
        width: .3rem;
    }
    .gs{
        width: 4rem;
        font-size: .3rem;
        color: #333333;
        font-family: pf;
    }
    .gs img{
        width: 1.29rem;
        margin-right: .3rem;
        margin-top: .1rem;
    }
    .baby{
        width: 1.76rem;
        line-height: .48rem;
        border: .01rem solid #af1c3b;
        text-align: center;
        color: #af1c3b;
        font-size: .24rem;
        font-family: pf;
        background: #faeef1;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
</style>
