<template>
    <div class="order">
        <Header></Header>
        <List></List>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import List from "./components/List"
    export default {
        name: "Order",
        components:{
            Header,
            List
        }
    }
</script>

<style scoped>

</style>
