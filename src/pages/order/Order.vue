<template>
    <div class="order">
        <Header></Header>
        <List :list="list" @refreshData="refreshData"></List>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import List from "./components/List"
    import axios from 'axios'
    import global from "../../components/Global"
    export default {
        name: "Order",
        components:{
            Header,
            List
        },
        data(){
            return {
                token:global.token,
                page:1,
                list_row:10,
                list:[]
            }
        },
        mounted() {
            this.initData()
        },
        methods:{
            refreshData(){
                this.initData()
            },
            initData(){
                var status = this.$route.query.status
                status = !status?status==0?0:'':status
                console.log(status)
                axios.post('/Order/orderList',{
                    token:this.token,
                    status:status,
                    list_row:this.list_row,
                    page:this.page
                }).then(this.setData)
            },
            setData(res){
                console.log(res)
                if(res.data.status==1){
                    this.list = res.data.data.list
                }else{
                    this.$layer.msg(res.data.msg)
                }
            }
        }
    }
</script>

<style scoped>

</style>
