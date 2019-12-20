<template>
    <div class="collection">
        <Header></Header>
        <pj></pj>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import pj from "./components/pj"
    export default {
        name: "Collection",
        components:{
            pj,
            Header
        }
    }
</script>

<style scoped>

</style>
