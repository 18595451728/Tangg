<template>
    <div class="series">
        <div class="s_top">
            <p class="fp">商品评价（200）</p>
            <p class="seeMore" @click="seeMore">查看全部 ></p>
        </div>
        <div class="s_bottom" v-for="item in private.list">
            <p><img :src="item.user_logo" alt=""><span>{{item.user_name}}</span></p>
            <p class="p_content">{{item.content}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Private",
        props:{private:Object},
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
