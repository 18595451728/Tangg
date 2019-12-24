<template>
    <div class="collection">
        <Header></Header>
        <pj></pj>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import pj from "./components/pj"
    import axios from 'axios'
    export default {
        name: "Addresslist",
        components:{
            pj,
            Header
        },
        data () {
            return {
                addressList:[],
            }
        },
        mounted() {
            // this.getAddressListInfo();  // 收货地址列表
        },
        methods: {
            // 收货地址列表
            getAddressListInfo() {
                axios.post("/User/addressList",{token: this.$storage.session.get('token')})
                    .then(this.getAddressListApi)
            },
            // 收货地址列表api
            getAddressListApi(res) {
                let data = res.data;
                this.addressList = res.data.data.list;
            }
        }
    }
</script>

<style scoped>

</style>
