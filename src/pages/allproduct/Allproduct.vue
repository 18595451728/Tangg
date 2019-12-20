<template>
    <div>
        <Header></Header>
        <Search></Search>
        <Tab @event1 = 'chooseTab($event)' :typeList="typeList"  :proList="proList" ></Tab>
    </div>
</template>


import axios from 'axios'

<script>
    import Header from "./components/Header"
    import Search from "./components/Search"
    import Tab from "./components/Allprotab"
    import axios from 'axios'
    export default {
        name: "Allproduct",
        components:{
            Header,
            Search,
            Tab
        },
        data () {
            return {
                token: global.token,
                typeList:[], // 类型列表
                cate_id:'', // 分类id
                proList:[], // 商品列表
            }
        },
        mounted() {
            this.getTypeListInfo();  // 商品分类列表
        },
        methods: {
            // 头部tab选择 获取类型id
            chooseTab(data){
                this.cate_id = data.cateId;
                this.getProListInfo(); // 获取商品列表
            },

            // 商品分类列表
            getTypeListInfo() {
                axios.post("/Goods/goodsCate",{token: this.token})
                    .then(this.getTypeList);
                this.getProListInfo(); // 获取商品列表
            },
            getTypeList(res) {
                this.typeList = res.data.data.list;
            },


            // 获取商品列表
            getProListInfo() {
                axios.post("/Goods/goodsList",{token: this.token, list_row:10,page:1,cate_id:this.cate_id})
                    .then(this.getProList)
            },
            getProList(res) {
                this.proList = res.data.data.list;
            }


        }
    }
</script>

<style scoped>

</style>
