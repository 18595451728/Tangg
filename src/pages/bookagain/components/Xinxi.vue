<template>
	<div class="xinxi">
		<form action="" v-for="item in address">
            <div class="group">
                <ul>
                    <li>
                        <label for="">预约人：</label>
                        <input type="text" placeholder="王爱清" v-model="item.patient_name">
                        <i></i>
                    </li>
                    <li>
                        <label for="">联系电话：</label>
                        <input type="tel" placeholder="135123456787" v-model="item.patient_telephone">
                        <i></i>
                    </li>
                    <li>
                        <label for="">生日：</label>
                        <input type="date" placeholder="1980-10-10" v-model="item.patient_birth">
                        <i></i>
                    </li>
                    <li>
                        <label for="">年龄：</label>
                        <input type="text" placeholder="39岁" v-model="item.patient_age">
                        <i></i>
                    </li>
                    <li>
                        <label for="">性别：</label>
                        <input type="text" placeholder="女" v-model="item.patient_sex.tt">
                        <i></i>
                    </li>
                </ul>
            </div>
            <div class="time">
                预约时间：
                <span><input type="date" style="background: none" v-model="booktime"></span>
            </div>
            <!--<div class="price">-->
                <!--预约诊金:-->
                <!--<span><b v-for="item in price">{{item}}</b>元</span>-->
            <!--</div>-->
            <a @click="sendPay">提交</a>
        </form>
	</div>
</template>
<script>
    import axios from 'axios'
export default {
  name: 'GeneralxxXinxi',
    props:{
      address:Array,
        price:Array
    },
    data(){
      return {
          booktime:''
      }
    },
    methods:{
        sendPay(){
            var that= this
            axios.post('/Appointment/appointmentOrderAgain',{
                appointment_order_id:this.$route.query.id,
                user_patient_id:this.address[0].user_patient_id,
                token:this.$storage.session.get('token'),
                appointment_date:this.booktime
            }).then(res=>{
                console.log(res)
                if(res.data.status==1){
                    var order_no = res.data.data.order_no
                    axios.post('/Pay/appointmentPay',{
                        token:that.$storage.session.get('token'),
                        order_no:order_no
                    }).then(re=>{
                        console.log(re)
                        if(re.data.status==1){
                            const pay_params = re.data.data
                            console.log(typeof WeixinJSBridge,pay_params)
                            if (typeof WeixinJSBridge == "undefined"){
                                if( document.addEventListener ){
                                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                                }else if (document.attachEvent){
                                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                                }
                            }else{
                                that.onBridgeReady(pay_params);
                            }
                        }else{
                            that.$layer.msg(re.data.msg)
                        }
                    })
                }else{
                    that.$layer.msg(res.data.msg)
                }
            })
        },
        onBridgeReady(params) {
            var that=this
            console.log(params)
            const pay_params = params
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": pay_params.appId,  //公众号名称，由商户传入
                    "timeStamp": pay_params.timeStamp,  //时间戳，自1970年以来的秒数
                    "nonceStr": pay_params.nonceStr,  //随机串
                    "package": pay_params.package,
                    "signType": pay_params.signType,  //微信签名方式：
                    "paySign": pay_params.paySign  //微信签名
                },
                function(res){
                    // alert(res.err_desc)
                    // alert(res)

                    // console.log(res)
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                        that.$router.push('/Bookhistory')
                    } else{
                        // alert(res.err_desc)
                        //  alert('支付失败！');
                    }
                });
        },
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .xinxi
        padding:0.3rem
        .group
            width:100%
            padding:0 .1rem
            background:#fff
            box-sizing:border-box
            border-radius:0.16rem
            margin-bottom:0.25rem
            li
                height:.65rem
                line-height:.65rem
                overflow:hidden
                display:flex
                border-bottom:1px solid #e0e0e0
                font-size:0.26rem
                color:#4c4c4c
                label
                    width:2rem
                    padding-left 0.15rem
                input
                    flex:1
                    text-align:right
                i
                    float:right
                    width 0.5rem
                    height:0.65rem
                    background:url(../../../../static/img/icon_yjt.png) no-repeat center
                    background-size: auto 0.2rem
        .time
            height:.7rem
            line-height:.7rem
            padding:0 0.3rem
            background:#FFFFFF
            border-radius:0.16rem
            margin:0.3rem 0
            font-size:0.26rem
            color:#4c4c4c
            -moz-box-shadow:2px 2px 7px #eee;
            -webkit-box-shadow:2px 2px 7px #eee;
            box-shadow:2px 5px 7px #eee;
            border-radius:0.1rem
            span
                float:right
        .price
            height:.7rem
            line-height:.7rem
            padding:0 0.3rem
            background:#FFFFFF
            border-radius:0.16rem
            margin:0.3rem 0
            font-size:0.26rem
            color:#4c4c4c
            -moz-box-shadow:2px 2px 7px #eee;
            -webkit-box-shadow:2px 2px 7px #eee;
            box-shadow:2px 5px 7px #eee;
            border-radius:0.1rem
            span
                float:right
                b
                    font-size:0.3rem
                    color:$baseColor
        a
            position:fixed
            bottom:0
            left:0
            text-align:center
            width 100%
            letter-spacing:1px
            height:0.9rem
            line-height 0.9rem
            font-size 0.3rem
            color:#fff
            background:$baseColor
</style>
