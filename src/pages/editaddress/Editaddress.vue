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
        name: "Editaddress",
        components:{
            pj,
            Header
        },
        data () {
            return {
                addressInfo:{
                    address_id:0,	// 整型	必填	-	-	地址ID
                    consignee:'',	// 字符串	必填	-	-	收货人
                    telephone:'',	//	字符串	必填	-	-	电话
                    province:'',	//	字符串	必填	-	-	省
                    city:'',	//	字符串	必填	-	-	市
                    district:'',	//	字符串	必填	-	-	区
                    address:'',	//	字符串	必填	-	-	详细地址
                    is_default:1,	//	整型	必填	-	-	1默认
                },
            }
        },
        mounted() {

            // this.getAddressInfo();  // 新增收货地址
        },

        methods: {
            // 新增收货地址
            getAddressInfo() {
                axios.post("/User/addAddress",{token: this.$storage.session.get('token')})
                    .then(this.getAddressApi)
            },
            // 新增收货地址api
            getAddressApi(res) {
                let data = res.data;

                this.addressList = res.data.data.list;
            }
        }
    }
</script>

<style scoped>

</style>
