<template>
    <div class="confirmOrder">
        <Header></Header>
        <pj></pj>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import pj from "./components/pj"
    export default {
        name: "ConfirmOrder",
        components:{
            pj,
            Header
        }
    }
</script>

<style scoped>

</style>
