<template>
	<div class="xinxi">
        <div v-for="item in xinxi">
            <div class="info">
                <div class="service">
                    <img src="../../../../static/img/tg_yuyuelist01.jpg" alt="">
                    <!--<h3>邀请资深中医专家何利仁，马贵等16位教授会诊解决心血管疾病</h3>-->
                    <h3>{{item.appointment.appointment_name}}</h3>
                </div>
                <div class="time">
                    就诊时间：
                    <span> <input type="date" style="background: none" v-model="booktime"></span>
                </div>
                <div class="price">
                    预约金：
                    <span><b>{{item.appointment.appointment_price}}</b>元</span>
                </div>
            </div>
            <div class="person">
                <img src="../../../../static/img/icon_person.png" alt="">
                就诊人
                <span>{{item.user_patient_name}}</span>
            </div>
            <a @click="toPay" to="/yuyue/zfsucc">1000元预约金</a>
        </div>
	</div>
</template>
<script>
    import axios from 'axios'
export default {
  name: 'ZfxxXinxi',
    props:{
      xinxi:Array
    },
    data(){
      return{
          booktime:''
      }
    },
    mounted() {
    },
    methods:{
        toPay(){
            var that = this
            axios.post('/Appointment/appointmentOrder',{
                appointment_id:this.$route.query.id,
                user_patient_id:this.$route.query.jzrid,
                token:this.$storage.session.get('token'),
                appointment_date:this.booktime
            }).then(res=>{

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
                            that.$layer.msg(res.data.msg)
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
        background:#F5F5F5
        .info
            padding: 0 0.3rem
            background:#fbfbfb
            .service
                display:flex
                border-bottom:1px solid #efefef
                img
                    height:0.9rem
                    width:0.9rem
                    border-radius 0.16rem
                    margin:0.2rem 0.2rem 0.2rem 0
                h3
                    font-size:0.28rem
                    flex:1
                    margin-top:0.2rem
                    line-height:0.42rem
                    ellipsis2()
            .time
                height:0.75rem
                line-height:.75rem
                color:#4C4C4C
                font-size:0.26rem
                border-bottom:1px solid #efefef
                span
                    float:right
            .price
                height:0.75rem
                line-height:.75rem
                color:#4C4C4C
                font-size:0.26rem
                border-bottom:1px solid #efefef
                span
                    float:right
                    color:$baseColor
                    b
                        font-weight:600
        .person
            padding:0 .3rem
            height:.8rem
            line-height:.8rem
            background:#FFFFFF
            margin:.25rem 0
            img
                height:0.32rem
            span
                float:right
        a
            position:fixed
            bottom:0
            text-align:center
            width 100%
            letter-spacing:1px
            height:0.9rem
            line-height 0.9rem
            font-size 0.26rem
            color:#fff
            background:$baseColor
</style>
