<template>

    <div class="shopcart">
        <Header></Header>
        <con></con>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import con from "./components/cartCon"
    import Footer from "./components/Footer"

    export default {
        name: "Shopcart",
        components:{
            Header,
            con,
            Footer
        },
        data () {
            return {

            }
        },
        mounted() {

        },


    }
</script>

<style scoped>

</style>
