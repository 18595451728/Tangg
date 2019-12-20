<template>
    <div class="writeform">
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Content from "./components/Content"
    export default {
        name: "Writeform",
            components:{
                Header,
                Content
            },
    }
</script>

<style scoped>

</style>
