<template>
    <div class="cartcon">
        <div class="c_list">
            <div class="c_head">
                <p v-if="clearStu === 0">共{{dataList.length}}件商品</p>
                <p v-if="clearStu === 1">选择</p>
                <p @click="clearShoInfoBtn">{{clearStu === 0 ? '编辑' :'完成'}}</p>
            </div>
            <div class="list" v-for="item,index in dataList">
                <img @click="delShop(index,item.selected,item)" :src="item.selected === 1 ?'/static/img/selected.png':'/static/img/select.png'" class="select" alt="">
                <img :src="item.goods_pic" alt="" class="proimg">
                <div class="cart_art">
                    <!--名称-->
                    <p class="p_name">{{item.goods_name}}</p>
                    <!--描述-->
                    <p class="p_desc">{{item.goods_describe}}</p>
                    <div>
                        <!--价格-->
                        <p class="p_price">￥{{item.goods_price}}</p>
                        <div class="p_count">
                            <!--数量-->
                            <div class="reduce" @click="addNumBtn(index,item.goods_num,item.goods_price,item)" >-</div>
                            <input type="number" @blur="defaultNum" v-model="item.goods_num">
                            <div class="add" @click="minusNumBtn(index,item.goods_num,item.goods_price,item)">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c_func">
            <div class="f_left" @click="selectAll()">
                <img :src="selAllStu === 1 ?'/static/img/selected.png':'/static/img/select.png'" alt="">
                <span>全选</span>
            </div>
            <div class="f_right">
                <div class="r_left" v-if="clearStu === 0">
                    <!--总价格-->
                    <p>合计：<span>￥{{total_price}}</span></p>
                    <p>不含运费</p>
                </div>
                <!--总数量-->
                <div v-if="clearStu === 0" class="r_right" @click="jiesuan">结算 ({{total_num}})</div>
                <div v-if="clearStu === 1" class="r_right" @click="delShopBtn">删除 ({{total_num}})</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "cartCon",
        data() {
            return {

                clearStu:0,
                selAllStu:0, // 全部选中状态
                dataList:[],
                cartNum: 1,

                old_num:0,
                old_price:0,

                total_num:0, // 总条数
                total_price:'0', // 总价格


            }
        },
        mounted() {
            this.getShopCarInfo();  // 商品分类列表

        },
        methods: {

            // 结算 进行支付
            jiesuan(){
                this.$router.push({ path: "./ConfirmOrder", query: { cartType:0  }});
                // this.cartOrderWay();
            },

            // 获取结算信息
            cartOrderWay() {
                axios.post("/Order/cartOrder",{token: this.$storage.session.get('token'),cart_type:0})
                    .then(this.cartOrderApi)
            },

            //购物车列表
            cartOrderApi(res) {
                let datas = res.data;
                console.log('相间产',datas.data);
                if(datas.status === 1){
                    this.$router.push({ path: "./ConfirmOrder", query: { datas:datas.data  }});
                }
            },


            // 删除状态管理
            clearShoInfoBtn(){
                this.clearStu = this.clearStu === 1 ? 0 : 1;
            },

            // 删除购物车
            delShopBtn(){
                let dataList = this.dataList;
                for(var item in dataList){
                    if(dataList[item].selected === 1){
                        console.log('+',dataList[item])
                        this.delShopWay({cart_id:dataList[item].cart_id}); // 进行循环删除 购物车
                    }
                }
            },

            // 删除购物车数据
            delShopWay(info) {
                axios.post("/Cart/delCart",{token: this.$storage.session.get('token'),...info})
                    .then(this.delShopApi)
            },

            //删除购物车数据API
            delShopApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                    this.getShopCarInfo(); // 全部列表
                }
            },


            // 全部选中
            selectAll(){
                let stu =  this.selAllStu === 1 ? 0 : 1;
                this.total_num = this.selAllStu === 1 ? 0 : this.old_num;
                this.total_price = this.selAllStu === 1 ? 0 : this.old_price;

                let dataList = this.dataList;
                for(var item in dataList){
                    dataList[item].selected = stu;
                    this.selectWay({cart_id:dataList[item].cart_id, selected:stu}) // 后台传的接口
                }
                this.dataList = dataList;
                this.selAllStu = stu;
            },

            // 删除选中
            delShop(index,selected,item){
                this.dataList[index].selected = selected === 1 ? 0:1;
                this.selectWay({cart_id:this.dataList[index].cart_id, selected:this.dataList[index].selected}) // 后台传的接口
                if(this.dataList[index].selected === 1){
                    this.total_num = parseInt(this.total_num) + parseInt(item.goods_num); // 总条数
                    this.total_price = parseInt(this.total_price) + (parseInt(item.goods_price)*parseInt(item.goods_num)); // 总价格
                }else{
                    this.total_num = parseInt(this.total_num) - parseInt(item.goods_num); // 总条数
                    this.total_price = parseInt(this.total_price) - (parseInt(item.goods_price)*parseInt(item.goods_num)); // 总价格
                }
            },

            // 选中状态传入后台
            selectWay(info) {
                axios.post("/Cart/selected",{token: this.$storage.session.get('token'),...info})
                    .then(this.selectApi)
            },

            //选中状态传入后台API
            selectApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                }
            },

            // 数量累加
            addNumBtn(index,num,price,info){
                if(num <= 1){return}
                this.dataList[index].goods_num -- ; // 当前商品数量
                this.total_num -- ; // 总条数
                this.total_price = parseInt(this.total_price) - parseInt(this.dataList[index].goods_price); // 总价格
                this.old_num = this.total_num;
                this.old_price = this.total_price;
                this.selectNum({cart_id:info.cart_id, goods_num:this.dataList[index].goods_num});
            },


            // 数量减少
            minusNumBtn(index,num,price,info){
                if(num >= info.goods_store){
                    return
                }
                    this.dataList[index].goods_num ++ ; // 当前商品数量
                    this.total_num ++ ; // 总条数
                    this.total_price = parseInt(this.total_price) + parseInt(this.dataList[index].goods_price); // 总价格
                    this.old_num = this.total_num;
                    this.old_price = this.total_price;

                this.selectNum({cart_id:info.cart_id, goods_num:this.dataList[index].goods_num});
            },


            // 选中数量编辑 后台
            selectNum(info) {
                axios.post("/Cart/editCart",{token: this.$storage.session.get('token'),...info})
                    .then(this.selectNumApi)
            },

            //选中数量编辑后台API
            selectNumApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                }
            },


            // 购物车列表
            getShopCarInfo() {
                axios.post("/Cart/cartList",{token: this.$storage.session.get('token'),})
                    .then(this.getShopCarApi)
            },

            //购物车列表
            getShopCarApi(res) {
                let datas = res.data;
                if(datas.status === 1){
                    this.dataList = datas.data.cartList; // 数据
                    this.total_num = datas.data.total_price.total_num; // 总条数
                    this.total_price = datas.data.total_price.total_price; // 总价格
                    this.old_num = datas.data.total_price.total_num; // 总条数
                    this.old_price = datas.data.total_price.total_price; // 总价格
                }
            },


            defaultNum() {
                if (!this.cartNum) this.cartNum = 1
            },


        }
    }
</script>

<style scoped>
    .cartcon {
        padding-bottom: 1.02rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c_list {
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

    .c_head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .35rem 0 .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c_head > p:first-child {
        font-size: .24rem;
        color: #666;
        font-family: pf;
    }

    .c_head > p:last-child {
        font-size: .24rem;
        color: #313131;
        font-family: pfb;
    }

    .list {
        display: flex;
        align-items: center;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: .01rem solid #dcdcdc;
    }

    .list:last-child {
        border-bottom: none;
    }

    .select {
        width: .33rem;
        margin-right: .3rem;
    }

    .proimg {
        width: 1.5rem;
        margin-right: .15rem;
    }

    .cart_art {
        width: 4rem;
    }

    .cart_art > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .p_name {
        font-size: .28rem;
        color: #333;
        font-family: pfb;
        margin-bottom: .2rem;
    }

    .p_desc {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
        margin-bottom: .3rem;
    }
    .p_price{
        font-family: pfb;
        font-size: .3rem;
        color: #313131;
    }
    .p_count {
        display: flex;
        align-items: center;
        width: 1.46rem;
        height: .5rem;
        border: .01rem solid #d2d2d2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        line-height: .48rem;
        overflow: hidden;
    }

    .add, .reduce {
        width: .45rem;
        background: #ededed;
        color: #535353;
        font-size: .4rem;
    }

    .p_count input {
        width: .53rem;
        border-right: .01rem solid #d2d2d2;
        border-left: .01rem solid #d2d2d2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        height: .48rem;
    }
    .c_func{
        position: fixed;
        bottom: 1rem;
        left: 0;
        width: 100%;
        height: 1.02rem;
        padding: 0 .32rem 0 .41rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 -.05rem .18rem -.05rem rgba(153,153,153,.15);
        -moz-box-shadow: 0 -.05rem .18rem -.05rem rgba(153,153,153,.15);
        box-shadow: 0 -.05rem .18rem -.05rem rgba(153,153,153,.15);
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }
    .f_left,.f_right{
        display: flex;
        align-items: center;
    }
    .f_left img{
        width: .33rem;
        margin-right: .25rem;
    }
    .f_left{
        font-size: .28rem;
        color: #333333;
        font-family: pf;
    }

    .r_left p:first-child{
        font-size: .24rem;
        font-family: pf;
        color: #333333;
    }
    .r_left p:first-child span{
        font-size: .3rem;
        font-family: pfb;
    }
    .r_left p:last-child{
        font-size: .20rem;
        font-family: pf;
        color: #333333;
        text-align: right;
    }

    .r_right{
        width: 1.93rem;
        line-height: .7rem;
        background: #af1c3b;
        color: white;
        font-family: pfb;
        font-size: .3rem;
        text-align: center;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        margin-left: .2rem;
    }
</style>
