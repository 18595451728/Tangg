<template>
    <div class="detail">
        <Header></Header>
        <Banner></Banner>
        <Series></Series>
        <Private></Private>
        <Rz></Rz>
        <Sku></Sku>
        <Deep></Deep>
        <Popup></Popup>
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
</style>
