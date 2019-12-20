<template>
    <div class="refund">
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Content from "./components/Content"
    export default {
        name: "Refund",
        components:{
            Header,
            Content
        },
        data(){
            return {
                isShow:!1,
                isShow1:!1,
            }
        },
        methods:{
            openReceive(e){
                console.log(e)
                this.isShow = e
            },
            openReason(e){
                console.log(e)
                this.isShow1 = e
            }
        }
    }
</script>

<style scoped>

</style>
