<template>
	<div class="xinxi">
		<form action="" v-for="item in address">
            <div class="group">
                <ul class="ul">
                    <li class="detail">
                        <label for="">就诊人：</label>
                        <input type="text" v-model="item.patient_name" placeholder="请输入就诊人姓名">
                    </li>
                    <li class="detail">
                        <label for="">联系电话：</label>
                        <input type="tel" v-model="item.patient_telephone" placeholder="请输入手机号">
                    </li>
                    <li class="detail">
                        <label for="">生日：</label>
                        <input type="date" style="width: 40%" v-model="item.patient_birth" @change="chooseBirth(item)" placeholder="1980-10-10">
                    </li>
                    <li class="detail">
                        <label for="">年龄：</label>
                        <input type="text" v-model="item.patient_age" readonly placeholder="请输入就诊人年龄">
                    </li>
                    <li class="sex_li">
                        <label for="" class="sex">性别：</label>
                        <!-- <div class="sexs"><input type="radio" v-model="sex1" name="sex" id="male" class="chose"><label for="male" class="sex_label sex_label1">  </label><span class="span1">男</span></div>
                        <div class="sexs"><input type="radio" v-model="sex" name="sex" id="female" class="chose"><label for="female" class="sex_label sex_label2"> </label><span class="span2">女</span></div> -->
                        <div class="sex-right">
                            <div class="male">
                                <div class="big_circle" @click="chooseSex(1)">
                                    <div v-show='item.patient_sex.vv==1' class="small_circle"></div>
                                </div>
                                <p>男</p>
                            </div>
                            <div class="female">
                                <div class="big_circle" @click="chooseSex(0)">
                                    <div v-show='item.patient_sex.vv==0' class="small_circle"></div>
                                </div>
                                <p>女</p>
                            </div>
                        </div>
                    </li>
                    <li class="detail">
                        <label for="" class="family">家族遗传史：</label>
                        <input type="text" v-model="item.patient_history" placeholder="请输入家族遗传史状况">
                    </li>
                </ul>
            </div>
            <div class="time">
                预约时间：
                <span><input type="date" style="background: none" v-model="booktime"></span>
            </div>
            <div class="price">
                预约诊金:
                <span><b v-for="item in price">{{item}}</b>元</span>
            </div>
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
        chooseBirth(e){
            let d = new Date(),sNow = Number(d)
            let sChoose = Number(new Date(e.patient_birth))
            if(sChoose-d>0){
                this.$layer.msg('时间选择错误')
                return false;
            }
            console.log(111)
            e.patient_age = d.getFullYear() - new Date(e.patient_birth).getFullYear()
        },
        chooseSex(e){
            this.address[0].patient_sex.vv = e
        },
        sendPay(){
            var that= this
            axios.post('/Appointment/appointmentOrder',{
                appointment_id:this.$route.query.id,
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
        .group
            width:100%

            box-sizing:border-box
            border-radius:0.16rem
            margin-bottom:0.25rem
            li
                height:.65rem
                line-height:.65rem
                overflow:hidden
                display:flex
                border-bottom:5px solid rgb(246,247,250)
                font-size:0.26rem
                color:#4c4c4c
                padding:0 .1rem
                background:#fff
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
                p
                    padding-left:.15rem
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


    .xinxi .group li.sex_li{
         display:flex;
         justify-content:space-between;
         align-items:center;
     }
    .sex-right{
        width:25%;
        padding-right:.15rem;
        display:flex;
        justify-content:space-between;
        align-items: center
    }
    .sex-right>div{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .big_circle{
        width: .3rem;
        height: .3rem;
        border:.02rem solid #e0e0e0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .small_circle{
        width:.15rem;
        height: .15rem;
        border-radius:50%;
        background: #2d71fb
    }
</style>
