<template>
    <div class="pj">
        <div class="collect" v-for="item,index in 5">
            <img src="/static/img/cartpro.png" class="pro_img" alt="">
            <div class="pro_art">
                <p class="pro_name">普瑞福鼻腔抗菌液</p>
                <p class="pro_desc">复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥阴凉干燥处密封储</p>
                <p class="pro_people">1314人收藏</p>
                <div>
                    <p class="pro_price" v-if="index!=2">￥2688.00</p>
                    <p class="gq" v-else>商品过期不存在</p>
                    <img src="/static/img/del.png" class="del" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
                star: 4,
                pro_num:1
            }
        },
        methods: {
            stars(e) {
                this.star = e + 1
            },
            defaultNum(){
                if(!this.pro_num)this.pro_num = 1
            }
        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.9rem;
        margin: .25rem auto;
        padding: .3rem .25rem .3rem .3rem;
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
    .collect{
        display: flex;
        align-items: flex-start;
    }
    .collect>img{
        width: 2rem;
        height: 2rem;
        margin-right: .3rem;
    }
    .pro_name{
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin-bottom: .2rem;
    }
    .pro_desc{
        font-size: .24rem;
        color: #666;
        font-family: pfm;
        line-height: .3rem;
        margin-bottom: .2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .pro_people{
        font-size: .2rem;
        color: #999999;
        margin-bottom: .25rem;
    }
    .pro_price{
        font-family: pfb;
        color: #af1c3b;
        font-size: .36rem;
    }
    .gq{
        height: .42rem;
        line-height: .38rem;
        border: .01rem solid #e5e5e5;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 .08rem;
        font-family: pfm;
        color: #cccccc;
        font-size: .24rem;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .del{
        width: .29rem;
    }
    .pro_art div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
