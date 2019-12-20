<template>
    <div class="series">
        <div class="s_top">
            <p class="fp">商品评价（200）</p>
            <p class="seeMore" @click="seeMore">查看全部 ></p>
        </div>
        <div class="s_bottom">
            <p><img src="/static/img/head_img.png" alt=""><span>唐冠商城</span></p>
            <p class="p_content">我是鼻粘膜充血导致鼻塞，偶尔头痛，效果不错，喷上就管用，晚上能舒服的畅通的睡觉。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Private",
        methods:{
            seeMore(){
                this.$router.push('/Evaluate')
            }
        }
    }
</script>

<style scoped>
    .series {
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
    }
    .s_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .s_top img {
        width: .18rem;
    }

    .fp {
        font-family: pfb;
        font-size: .24rem;
        color: #000000;
    }
    .seeMore{
        font-size: .24rem;
        color: #af1d3c;
        font-family: pf;
    }

    .s_bottom{

        margin-top: .3rem;
        margin-bottom: .1rem;
    }
    .s_bottom>p{
        display: flex;
        align-items: center;
    }
    .s_bottom>p img{
        width: .5rem;
        margin-right: .2rem;
    }
    .s_bottom>p span{
        font-size: .24rem;
        color: #999;
        font-family: pf;
    }
    .p_content{
        font-size: .2rem;
        font-family: pfb;
        color: #333333;
        line-height: .3rem;
        margin-top: .1rem;
    }
</style>
