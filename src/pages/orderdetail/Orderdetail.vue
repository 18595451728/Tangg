<template>
    <div class="orderdetail">
        <Header></Header>
        <Wuliu></Wuliu>
        <PJ :goodsMes="detail.goods_list" :orderMes="detail.order"></PJ>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Wuliu from "./components/wuliu"
    import PJ from "./components/pj"
    import axios from "axios"
    import global from "../../components/Global"
    export default {
        name: "Orderdetail",
        components:{
            Header,
            Wuliu,
            PJ
        },
        data(){
            return {
                token:global.token,
                detail:''
            }
        },
        mounted() {
            this.initData()
        },
        methods:{
            initData(){
                axios.post('/Order/orderDetail',{
                    token:this.token,
                    order_no:this.$route.query.order_no
                }).then(this.setData)
            },
            setData(res){
                console.log(res)
                if(res.data.status==1){
                    this.detail = res.data.data
                }else{
                    this.$layer.msg(res.data.msg)
                }
            }
        }
    }
</script>

<style scoped>

</style>
