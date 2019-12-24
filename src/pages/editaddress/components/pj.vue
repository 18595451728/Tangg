<template>
    <div class="pj">

        <div class="edit">
            <div><p>姓名</p><input v-model="addressInfo.consignee" type="text" placeholder="收货人姓名"></div>
            <div><p>电话</p><input v-model="addressInfo.telephone" type="text" placeholder="收货人手机号"></div>
            <div><p>地区</p><input v-model="addressInfo.consignee" type="text" placeholder="选择省/市/区" readonly></div>
            <div><p>详情</p><input v-model="addressInfo.address" type="text" placeholder="街道门牌、楼层房间号等信息"></div>

            <div @click="isdefaultBtn"><p>设为默认地址</p><img :src="addressInfo.is_default === 1 ? '/static/img/selected.png': '/static/img/select.png'" alt=""></div>

        </div>
        <div class="save" @click="addAddress">保存并使用</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "pj",
        data() {
            return {
                areaList:'',
                areaInfo:['请选择', '请选择', '请选择'],
                areaLists:[],
                star: 4,
                pro_num:1,
                addressId:'',
                address:'',
                addressInfo:{
                    address_id:0,	// 整型	必填	-	-	地址ID
                    consignee:'',	// 字符串	必填	-	-	收货人
                    telephone:'',	//	字符串	必填	-	-	电话
                    province:'浙江',	//	字符串	必填	-	-	省
                    city:'杭州',	//	字符串	必填	-	-	市
                    district:'喜欢',	//	字符串	必填	-	-	区
                    address:'',	//	字符串	必填	-	-	详细地址
                    is_default:1,	//	整型	必填	-	-	1默认
                },


            }
        },
        mounted() {
            this.addressId = this.$route.query.addressId;
            console.log('----',this.addressId)
            this.addAddressDetail();  // 地址详情
        },
        methods: {
            // 设为默认地址
            isdefaultBtn(){
                this.addressInfo.is_default = this.addressInfo.is_default === 1 ? 0 : 1
            },
            stars(e) {
                this.star = e + 1
            },
            defaultNum(){
                if(!this.pro_num)this.pro_num = 1
            },

            // 地址详情
            addAddressDetail() {
                axios.post("/User/addressInfo",{token: this.$storage.session.get('token'), address_id:this.addressId})
                    .then(this.addAddressDetailApi)
            },
            // 地址详情api
            addAddressDetailApi(res) {
                let data = res.data;
                if(data.status === 1){
                    this.addressInfo = data.data.list
                }
            },

            // 新增收货地址
            addAddress() {
                axios.post("/User/addAddress",{token: this.$storage.session.get('token'), ...this.addressInfo})
                    .then(this.getAddressApi)
            },
            // 新增收货地址api
            getAddressApi(res) {
                let data = res.data;
                if(data.status === 1){
                    this.$router.push({ path: "./Addresslist"});
                }
            }
        }
    }
</script>

<style scoped>
    .edit {
        width: 6.9rem;
        margin: .25rem auto;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .edit>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eeeeee;
    }
    .edit>div p{
        line-height: .85rem;
        font-size: .24rem;
        color: #373737;
        font-family: pfb;
    }
    .edit>div input{
        width: 60%;
        font-family: pfm;
        font-size: .24rem;
        color: #9c9c9c;
        height: .8rem;
        background: none;
        text-align: right;
    }
    .edit>div img{
        width: .33rem;
    }
    .save{
        width: 6.7rem;
        line-height: .7rem;
        text-align: center;
        color: white;
        background: #af1c3b;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        position: fixed;
        left: .4rem;
        bottom: .3rem;
        font-family: pfm;
        font-size: .3rem;
    }
</style>
