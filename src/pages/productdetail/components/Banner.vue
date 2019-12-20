<template>
    <div class="pros">
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item,index in 5">
                    <img src="/static/img/pro-detail-banner.png" alt="">
                </div>
            </div>
        </div>
        <div class="pro_mes">
            <p class="name">普瑞福鼻腔抗菌液</p>
            <p class="desc">复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥阴凉干燥处密封储存，请置于儿童不易接触处。</p>
            <div class="swiper-container price">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item,index in 5" :class="{active:prices==index}" @click="changePrice(index)">
                        <p>￥2688.00</p>
                        <p>1件起购</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        data() {
            return {
                prices:0
            }
        },
        mounted() {
            this.$nextTick(() => {
                var ns = new Swiper('.banner', {})
                var ps = new Swiper('.price', {
                    slidesPerView: 3.7,
                    spaceBetween: 10
                })
            })
        },
        methods:{
            changePrice(e){
                this.prices = e
            }
        }
    }
</script>

<style scoped>
    .pros {
        width: 6.9rem;
        margin: 0 auto;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        overflow: hidden;
    }

    img {
        width: 100%;
    }

    .pro_mes {
        padding: .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
    }

    .name {
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin-bottom: .15rem;
    }

    .desc {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
        line-height: .35rem;
        margin-bottom: .3rem;
    }

    .price .swiper-slide {
        height: 1.05rem;
        border: 1px solid #ececec;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: .18rem 0;
        background: #ececec;
    }

    .price .swiper-slide.active {
        border: 1px solid #af1c3b;
    }

    .price .swiper-slide p:first-child {
        font-size: .3rem;
        color: #af1c3b;
        font-family: pfb;
    }

    .price .swiper-slide p:last-child {
        font-size: .24rem;
        color: #333333;
        font-family: pf;
    }
</style>
