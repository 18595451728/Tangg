<template>
    <div class="setting">
        <Header></Header>
        <List></List>
    </div>
</template>

<script>
    import List from './components/setting_list'
    import Header from './components/Header'
    export default {
        name: "Setting",
        components:{
            List,
            Header
        }
    }
</script>

<style scoped>

</style>
