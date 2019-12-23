<template>
    <div class="intro">
        <div class="pro" v-for="item in 2">
            <div class="pro_name">艾叶止痒抑菌膏</div>
            <div class="pro_desc">用于皮肤瘙痒、皮炎湿疹</div>
            <div class="pro_img">
                <img src="/static/img/introProduct.png" alt="">
            </div>
        </div>
        <div class="books">
            <img src="/static/img/books.png" width="100%" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "intro"
    }
</script>

<style scoped>
    .books{
        margin-top: .3rem;
    }
    .intro{
        width: 6.9rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .pro{
        width: 3.3rem;
        padding: .2rem .15rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .27rem rgba(40,40,40,.06);
        -moz-box-shadow: 0 0 .27rem rgba(40,40,40,.06);
        box-shadow: 0 0 .27rem rgba(40,40,40,.06);
        -webkit-border-radius: .2rem;
        -moz-border-radius: .2rem;
        border-radius: .2rem;
    }
    .pro_name{
        font-family: pfb;
        font-size: .3rem;
        color: #000;
        margin-bottom: .2rem;
    }
    .pro_desc{
        font-family: pfm;
        font-size: .24rem;
        color: #666;
        margin-bottom: .3rem;
    }
    .pro_img{
        text-align: center;
    }
    .pro_img img{
        width: 1.97rem;
    }
</style>
