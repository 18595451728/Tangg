<template>
    <div class="detail">
        <Header></Header>
        <Banner :proInfo = "proInfo" :bannerInfo="bannerInfo" ></Banner>
        <Series :sku_data="sku_data"></Series>
        <Private></Private>
        <Rz></Rz>
        <Sku :bannerInfo="bannerInfo"></Sku>

        <!--<Deep></Deep>-->

        <Popup :proInfoBig="proInfoBig" :popup="popup"></Popup>

        <div class="deep">
            <div class="online">
                <img src="/static/img/online.png" alt="">
                <p>在线咨询</p>
            </div>
            <div class="line"></div>
            <div class="collect">
                <img src="/static/img/collect.png" alt="">
                <p>收藏</p>
            </div>
            <div class="joinCart" @click="showPopup">加入购物车</div>
            <div class="buyNow" @click="showPopup">立即购买</div>
        </div>

    </div>
</template>

<script>
    import Header from "./components/Header"
    import Banner from "./components/Banner"
    import Series from "./components/Series"
    import Private from "./components/Private"
    import Rz from "./components/Rz"
    import Sku from "./components/Sku"
    import Deep from "./components/Deep"
    import Popup from "./components/Popup"
    import Swiper from 'swiper'
    import axios from 'axios'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "ProductDetail",
        components:{
            Header,
            Banner,
            Series,
            Private,
            Rz,
            Sku,
            Deep,
            Popup
        },
        data () {
            return {
                popup:0, // 是否显示规格参数
                proInfoBig:{}, // 商品详情
                token: global.token,
                goods_cate_id:'', // 商品id
                proInfo:undefined, // 商品
                bannerInfo:{goods_banner_pic:[], purchase:[],
                    goods_detail_pic:"",goods_param:[]}, // banner 头部
                filter_spec:{},  // 规格
                sku_data:[{sku_info:''}], // 样式

            }
        },
        mounted() {
            console.log(this.$route.params)
            this.goods_cate_id = this.$route.query.cateId;
            console.log('===',this.goods_cate_id);
            this.getProInfo();  // 获取商品详情
        },
        methods: {

            // 进行加入购物车 与 购买
            showPopup(){

            },

            // 获取商品详情
            getProInfo() {
                // goods_id 商品id
                axios.post("/Goods/goodsDetail",{token: this.token, goods_id:this.goods_cate_id})
                    .then(this.getProInfoApi);
            },

            // 获取商品详情接口
            getProInfoApi(res) {
                let data = res.data.data;
                console.log('==================',data)
                this.proInfo = data;
                this.bannerInfo = data.list;
                this.filter_spec = data.filter_spec; // 规格参数
                this.sku_data = data.sku_data; // 样式
                this.proInfoBig = data;
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
