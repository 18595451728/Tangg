<template>
    <div class="logistics">
        <Header></Header>
        <Content :express_data="express_data" :express_no="express_no" :express_name="express_name" :address_info="address_info" :state="state"></Content>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Content from "./components/Content"
    import global from "../../components/Global"
    import axios from "axios"
    export default {
        name: "Logistics",
        components:{
            Header,
            Content
        },
        data(){
            return {
                token:global.token,
                express_name:'',
                express_no:'',
                express_data:'',
                address_info:'',
                state:''
            }
        },
        mounted() {
            axios.post('/Order/orderExpress',{
                token:this.token,
                order_no:this.$route.query.order_no
            }).then(this.setData)
        },
        methods:{
            setData(res){
                console.log(res)
                if(res.data.status==1){
                    var data =res.data.data
                    this.express_name= data.express_name
                    this.express_no= data.express_no
                    this.express_data= data.express_data
                    this.address_info= data.address_info
                    this.state= data.state
                }else{
                    this.$layer.msg(res.data.msg)
                }
            }
        }
    }
</script>

<style scoped>

</style>
