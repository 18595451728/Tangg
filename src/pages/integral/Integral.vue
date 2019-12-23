<template>
    <div class="integral">
        <Header></Header>
        <Count></Count>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Count from "./components/count"
    export default {
        name: "Integral",
        components:{
            Header,
            Count
        }
    }
</script>

<style scoped>

</style>
