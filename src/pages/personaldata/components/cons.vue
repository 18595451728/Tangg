<template>
    <div class="cons">
        <div class="c_head">
            <img src="/static/img/head_img.png" alt="">
            <p>点击修改头像</p>
        </div>
        <div class="c_con">
            <div class="c_each">
                <div class="c_left">昵称</div>
                <div class="c_right">一缕阳光</div>
            </div>
            <div class="c_each">
                <div class="c_left">性别</div>
                <div class="c_right">
                    <img src="/static/img/male.png" alt="">
                    <p>男</p>
                    <img src="/static/img/arrow_right.png" alt="">
                </div>
            </div>
            <div class="c_each">
                <div class="c_left">城市</div>
                <div class="c_right">浙江 杭州</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cons"
    }
</script>

<style scoped>
    .c_head{
        width: 100%;
        text-align: center;
        padding: .2rem 0 .4rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_head img{
        width: 1.2rem;
        margin-bottom: .2rem;
    }
    .c_head p{
        font-family: pfm;
        color: #333333;
        font-size: .3rem;
    }
    .c_con{
        width: 6.9rem;
        margin: 0 auto;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_each{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .88rem;
        font-family: pfm;
        color: #666666;
        font-size: .24rem;
        border-bottom: .01rem solid #f7f7f7;
    }
    .c_each:first-child{
        line-height: .95rem;
    }
    .c_each:last-child{
        border-bottom: none;
    }
    .c_right{
        color: #333;
        display: flex;
        align-items: center;
    }
    .c_right img:first-child{
        width: .24rem;
    }
    .c_right img:last-child{
        width: .13rem;
    }
    .c_right p{
        margin: 0 .23rem 0 .13rem;
    }
</style>
