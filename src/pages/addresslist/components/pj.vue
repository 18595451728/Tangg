<template>
    <div class="pj">
        <div v-for="item,index in addressList" @click="selAddress(item)" class="collect" >
            <div class="c_top">
                <div class="c_left"><span>{{item.consignee}}</span><span>{{item.telephone}}</span></div>
                <div class="c_right">
                    <img src="/static/img/edit.png" alt="" @click="edit(item)">
                    <img src="/static/img/del.png" alt="" @click="delAddress(item)">
                </div>
            </div>
            <div class="c_center">{{item.address}}</div>
            <div @click="isDefaultBtn" class="c_bottom" v-if="item.is_default == 1">
                <img src="/static/img/selected.png" alt=""><span>设为默认收货地址</span>
            </div>

        </div>
        <div class="save" @click="edit(undefined)">新增收货地址</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {common} from '../../../components/js/common';   //   公共变量
    export default {
        name: "pj",
        data() {
            return {
                star: 4,
                pro_num:1,
                addressList:[],
                isDefaultStu:0,
                isToConfirmorder:0, // 是否返回结算页面
            }
        },
        mounted() {
            this.isToConfirmorder = this.$route.query.paths ? 1 : 0;
            this.getAddressListInfo();  // 收货地址列表
        },
        methods: {
            // 地址选择
            selAddress(info){
                if(this.isToConfirmorder === 1){
                    common.addressInfo = info;
                    console.log('地址选择================',info,common.addressInfo)
                    this.$router.go(-1);//返回上一层
                }
            },
            stars(e) {
                this.star = e + 1
            },
            defaultNum(){
                if(!this.pro_num)this.pro_num = 1
            },

            edit(info){
                this.$router.push({ path: "./Editaddress", query: { addressId: info ? info.address_id :undefined  }});
            },

            // 删除收货地址
            delAddress(info) {
                axios.post("/User/addressDel",{token: this.$storage.session.get('token'),address_id:info.address_id})
                .then(this.defaultAddressApi)
            },
            // 设为默认地址API
            defaultAddressApi(res) {
                this.isDefaultStu = 1;
                let data = res.data;
                if(data.status === 1){
                    this.getAddressListInfo(); // 收货地址
                }
            },


            // 设为默认地址
            isDefaultBtn(){
                this.defaultAddress();
            },

            // 设为默认地址
            defaultAddress(info) {
                axios.post("/User/defaultAddress",{token: this.$storage.session.get('token'),address_id:info.address_id})
                    .then(this.defaultAddressApi)
            },
            // 设为默认地址API
            defaultAddressApi(res) {
                let data = res.data;
                if(data.status === 1){
                    this.getAddressListInfo(); // 收货地址
                }
            },


            // 收货地址列表
            getAddressListInfo() {
                axios.post("/User/addressList",{token: this.$storage.session.get('token')})
                    .then(this.getAddressListApi)
            },
            // 收货地址列表api
            getAddressListApi(res) {
                this.isDefaultStu = 0;
                let data = res.data;
                this.addressList = res.data.data.list;
            }
        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.7rem;
        margin: .25rem auto;
        padding: .35rem .3rem .3rem;
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
    .c_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .c_left{
        font-size: .3rem;
        color: #292929;
        font-family: pfb;
    }
    .c_left span:first-child{
        margin-right: .3rem;
    }

    .c_right img:first-child{
        width: .4rem;
    }
    .c_right img:last-child{
        width: .36rem;
        margin-left: .3rem;
    }
    .c_center{
        width: 4.7rem;
        font-size: .24rem;
        font-family: pfm;
        color: #666;
        line-height: .35rem;
        margin-top: .1rem;
    }
    .c_bottom{
        margin-top: .2rem;
        display: flex;
        align-items: center;
    }
    .c_bottom img{
        width: .33rem;
        margin-right: .2rem;
    }
    .c_bottom span{
        font-size: .24rem;
        color: #333333;
        font-family: pfm;
    }
    .pj > div.save{
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
        margin: 0;
        padding: 0;
    }
</style>
