<template>
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in getBanner">
                <img src="/static/img/storeBanner.png" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:['banners'],
        mounted() {
            this.$nextTick(function () {
                let ss = new Swiper('.banner',{
                    pagination : '.swiper-pagination',
                    observer:true
                })
            })
        },
        computed:{
            getBanner(){
                console.log(this.banners)
                return this.banners
            }
        }
    }
</script>

<style scoped>
    .banner{
        height: 3rem;
        margin-bottom: .3rem;
    }
    .banner img{
        width: 100%;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: 0;
    }

</style>
<style>
    .swiper-pagination-bullet{
        background: #bfbfbf;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .swiper-pagination-bullet-active{
        width: 30px;
        background: #af1c3b;
    }
</style>
