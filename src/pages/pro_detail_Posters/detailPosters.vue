<template>
    <div class="detail">
        <Header></Header>
        <Banner :proInfo = "proInfo" :bannerInfo="bannerInfo" ></Banner>

    </div>
</template>

<script>
    import Header from "./components/Header"
    import Banner from "./components/Banner"
    import Swiper from 'swiper'
    import axios from 'axios'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "ProductDetail",
        components:{
            Header,
            Banner,
        },
        data () {
            return {
                skuIndex:'',
                proInfoBig:{}, // 商品详情
                token: global.token,
                goods_cate_id:'', // 商品id
                proInfo:undefined, // 商品
                bannerInfo:{goods_banner_pic:[], purchase:[],
                    goods_detail_pic:"",goods_param:[]}, // banner 头部
            }
        },
        mounted() {
            this.goods_cate_id = this.$route.query.cateId;
            this.getProInfo();  // 获取商品详情
        },
        methods: {



            // 获取商品详情
            getProInfo() {
                // goods_id 商品id
                axios.post("/Goods/goodsDetail",{token: this.token, goods_id:this.goods_cate_id})
                    .then(this.getProInfoApi);
            },

            // 获取商品详情接口
            getProInfoApi(res) {
                let data = res.data.data;
                this.proInfo = data;
                this.bannerInfo = data.list;
            },
        }
    }
</script>

<style scoped>
    .detail{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        overflow-y: scroll;
        padding-bottom: .98rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

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
