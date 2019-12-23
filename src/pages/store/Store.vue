<template>
    <div>
        <home-header></home-header>
        <Banner></Banner>
        <store-intro></store-intro>
        <home-productrec></home-productrec>
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
    }
</script>

<style scoped>

</style>
