<template>
    <div class="pros">
        <div class="infos">
            <div class="top_titles">
                <div class="logo"> <img  src="../../../assets/img/tg-logo.png"></div>
                <div class="fr_info">
                    <p>唐冠健康</p>
                    <span>给你推荐了一个产品</span>
                </div>
            </div>
            <div class="swiper-container banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in bannerInfo.goods_banner_pic">
                        <img :src="item" alt="">
                    </div>
                </div>
        </div>
            <div class="pro_mes">
                <p class="price">{{bannerInfo.goods_price}}</p>
                <p class="name">{{bannerInfo.goods_name}}</p>
                <p class="desc">{{bannerInfo.goods_describe}}</p>
            </div>
        </div>

        <div class="posters_info">
            <div class="fl_img"><img src="../../../assets/img/posters.png"></div>
            <span>
                <p>长按识别小程序码</p><br/>
                <p>唐冠与您一起守护您的健康</p>
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Banner",
        props:{
            bannerInfo:{goods_banner_pic:[]},
            proInfo:Object,
        },
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
    .top_titles{overflow: hidden; padding: 0.20rem; }
    .top_titles .logo{float: left;width: 12px;height: 30px; }
    .top_titles .logo img{width: 100%; height: 100%;}
    .top_titles .fr_info{float: left; margin-left:10px;  }
    .top_titles .fr_info p{font-size: 0.30rem;line-height:16px;margin-bottom:0px;font-weight: 600; }
    .top_titles .fr_info span{font-size: 0.18rem;line-height: 0.18rem;}
    .posters_info{background: #fff;margin-top:10px;padding: 18px 18px;overflow:hidden; }
    .posters_info .fl_img{width: 74px; height: 74px;float: left;margin-right:12px; }
    .posters_info .fl_img img{width: 100%;height: 100%;}
    .posters_info span{  width: 123px; float: left;text-align: left;margin-top: 22px; }
    .posters_info p{font-size: 0.20rem;line-height: 0.20rem;color:#000000;  }
    .pros .infos{background: #fff;}

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
    .price{
        font-size: .30rem;
        color: #cf2653;
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
