<template>
    <div class="orderdetail">
        <Header></Header>
        <Wuliu></Wuliu>
        <PJ></PJ>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Wuliu from "./components/wuliu"
    import PJ from "./components/pj"
    export default {
        name: "Orderdetail",
        components:{
            Header,
            Wuliu,
            PJ
        }
    }
</script>

<style scoped>

</style>
