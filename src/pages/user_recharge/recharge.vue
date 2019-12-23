<template>
    <div class="page">
        <Header></Header>

        <div class="xinxi">
            <div class="group">
                <ul>
                    <li>
                        <label >充值金额</label>
                        <div class="inputs" >
                            <p class="icon">￥</p>
                            <input v-model="money" type="text" >
                        </div>
                    </li>
                </ul>
                <div class="sel_money">
                    <div v-for="item,index in moneyList" :class="{active:item == money}"  @click="selBtn(item)" >充 {{item}}</div>
                </div>
            </div>

            <div class="  ">
                <router-link to="/yuyue/zfxx">充值</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import recharges from './components/recharges'
    export default {
        name: "recharge",
        components: {
            Header,
            recharges
        },
        data () {
            return {
                money: 200,
                moneyList: [200,500,2000,5000],
            }
        },
        mounted() {
            this.money = this.moneyList[0]
        },
        methods:{
            selBtn(item){
                this.money = item;
            },
        }
    }
</script>

<style scoped>
.page{

}
.xinxi{ padding:0.3rem;background: #f9f9f9;}

.sel_money{display: flex;margin-left: 0.30rem; }
.sel_money div{flex: 1;border-radius: 0.10rem;
    font-size: 0.22rem;line-height: 0.22rem; padding: 0.15rem 0px;
    border:#666666 1px solid ; color: #666666; margin-right: 0.30rem;text-align: center; }
.sel_money div.active{ border: #af1c3b 1px solid;color: #af1c3b;}
.group{width:100%;
    padding:0.30rem 0 .30rem;
    padding-top: 0.02rem;
    background:#fff;
    box-sizing:border-box;
    margin-bottom:0.25rem;
    border-radius:0.1rem}


li{
    border-bottom: #eeeeee 1px solid;
    margin:0.30rem 0.30rem;
    padding-bottom: 0.10rem;
    line-height:.65rem;
    font-size:0.26rem;
    color:#4c4c4c}

label{display:block;
    color: #000000;
    font-size: 0.26rem;
    width:100%;}

.inputs{position:relative;
    border-radius:5px;
    width:calc(100% - 0.40rem);
    display:block;
    text-align:left;}
input{
    width:calc(100% - 0.4rem);
    margin-left:0.4rem;
    font-size: 0.54rem;
}
.icon{position :absolute;font-size: 0.36rem;padding-left: 0px;
    top:0.14rem;
    left:-0.4px;}

i{float:right;
    width :0.5rem;
    height:0.65rem;
    background:url(../../../static/img/icon_yjt.png) no-repeat center;
    background-size: auto 0.2rem;}

p{
    line-height: 0.75rem;
    padding-left:.15rem;
}

textarea{
    margin:0 0.15rem;
    height:3rem;
    width:6.4rem;
    padding:0.15rem;
    box-sizing:border-box;
    border:1px solid #E0E0E0;
    margin-bottom: 0.3rem;
    resize:none;
}

a{
    border-radius:5px;
    display:block;
    text-align:center;
    width:100%;
    letter-spacing:1px;
    height:0.84rem;
    line-height:0.84rem;
    font-size:0.3rem;
    color:#fff;
    background:#af1c3b;
}
</style>
