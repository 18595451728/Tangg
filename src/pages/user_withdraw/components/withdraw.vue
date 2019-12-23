<template>
    <div class="xinxi">
        <div class="group">
            <ul>
                <li>
                    <label >提现金额</label>
                    <div class="inputs" >
                        <p class="icon">￥</p>
                        <input v-model="parsms.money" type="text" >
                    </div>
                </li>
            </ul>

            <div class="user_money" @click="withdrawBtn">
                收益余额￥{{parsms.userMoney}},<em class="fl">全部体现</em>
            </div>
            <div class="  ">
                <router-link to="/yuyue/zfxx">提现</router-link>
            </div>
        </div>
        <span class="infos">
                <p>1.单笔提现金额不低于1.00元</p>
                <p>2.单日提现额为2.0万元，单笔提现不低于1.0元。</p>
                <p>3.提现成功后，金额将在24小时内转入微信钱包，请注意查收。</p>
            </span>


    </div>
</template>
<script>
export default {
  name: 'AddjzrxxXinxi',
    props:{
      parsms:Object
    },
    data () {
        return {
        }
    },
    methods:{
        // 提现金额
        withdrawBtn(){
            // this._props.money = this._props.userMoney
        }
    }
}
</script>

<style lang="stylus" scoped>
    /*f9f9f9*/
    .xinxi{ padding:0.3rem;background: #f9f9f9;}


    .group{width:100%;
        padding:0.30rem 0 .30rem;
        padding-top: .02rem;
        background:#fff;
        box-sizing:border-box;
        margin-bottom:0.30rem;
        border-radius:0.1rem}
    .group .user_money{margin: 0.30rem;color:#666; font-size:0.24rem; line-height: 0.24rem; }
    .group .user_money em {color: #af1c3b;}
    .infos{margin-top: 0.6rem;}
    .infos p{display: block; color: #7a7a7a;font-size: 0.20rem;line-height: 0.28rem;margin-bottom: 0.10rem;}
    li{ border-bottom: #eeeeee 1px solid;
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
        margin: 0.30rem;
        margin-top: 0.6rem;
        border-radius:5px;
        display:block;
        text-align:center;
        width:calc(100% - 0.6rem);;
        letter-spacing:1px;
        height:0.84rem;
        line-height:0.84rem;
        font-size:0.3rem;
        color:#fff;
        background:#af1c3b;
    }
</style>
