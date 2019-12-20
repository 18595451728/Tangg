<template>
    <div>
        <Header></Header>
        <Search></Search>
        <Tab></Tab>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Search from "./components/Search"
    import Tab from "./components/Allprotab"
    export default {
        name: "Allproduct",
        components:{
            Header,
            Search,
            Tab
        }
    }
</script>

<style scoped>

</style>
