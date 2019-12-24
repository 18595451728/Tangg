<template>
    <div>
        <home-header></home-header>
        <Banner :banners="banner"></Banner>
        <store-intro :intro="hot"></store-intro>
        <home-productrec :recommend="recommend"></home-productrec>
        <Footer></Footer>
    </div>
</template>

<script>
    import global from '../../components/Global'
    import HomeHeader from './components/Header'
    import Banner from './components/banner'
    import storeIntro from './components/intro'
    import HomeProductrec from './components/Productrec'
    import Footer from '@/components/Footer'
    import axios from 'axios'
    export default {
        name: "Store",
        components: {
            HomeHeader,
            Banner,
            storeIntro,
            HomeProductrec,
            Footer
        },
        data(){
            return {
                token: global.token,
                banner:'',
                hot:'',
                recommend:''
            }
        },
        mounted() {
            axios.post('/Index/shopHome',{token:this.token}).then(this.setData)
        },
        methods:{
            setData(res){
                console.log(res)
                if(res.data.status==1){
                    var data = res.data.data
                    this.banner=  data.banner
                    this.hot=  data.hot
                    this.recommend=  data.recommend
                }else{
                    this.$layer.msg(res.data.msg)
                }
            }
        }
    }
</script>

<style scoped>

</style>
