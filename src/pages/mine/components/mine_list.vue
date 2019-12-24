<template>
    <div class="mine_list">
        <div class="l_area">
            <div class="l_each" @click="toCoupon">
                <div class="e-left">
                    <img src="../../../../static/img/coupon_icon.png" class="coupon" alt=""><span>优惠券</span>
                </div>
                <img src="../../../../static/img/arrow_right.png" alt="">
            </div>
            <div class="l_each" @click="tocollect">
                <div class="e-left">
                    <img src="../../../../static/img/collect_icon.png" class="collect" alt=""><span>我的收藏</span>
                </div>
                <img src="../../../../static/img/arrow_right.png" alt="">
            </div>
        </div>
        <div class="l_area">
            <router-link tag="div" to="/Bookhistory" class="l_each">
                <div class="e-left">
                    <img src="../../../../static/img/book_icon.png" class="book" alt=""><span>我的预约</span>
                </div>
                <img src="../../../../static/img/arrow_right.png" alt="">
            </router-link>
            <router-link tag="div" to="/Patient" class="l_each">
                <div class="e-left">
                    <img src="../../../../static/img/message_icon.png" class="message" alt=""><span>就诊人信息</span>
                </div>
                <img src="../../../../static/img/arrow_right.png" alt="">
            </router-link>
            <router-link tag="div" to="/Archives" class="l_each">
                <div class="e-left">
                    <img src="../../../../static/img/dangan.png" class="message" alt=""><span>健康档案</span>
                </div>
                <img src="../../../../static/img/arrow_right.png" alt="">
            </router-link>
        </div>
        <div class="l_area">
            <div class="l_each" @click="toTeam">
                <div class="e-left">
                    <img src="../../../../static/img/partner.png" class="coupon" alt=""><span>我的团队</span>
                </div>
                <img src="../../../../static/img/arrow_right.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine_list",
        methods:{
            tocollect(){
                this.$router.push('/Collection')
            },
            toCoupon(){
                this.$router.push('/Coupon')
            },
            toTeam(){
                this.$router.push('/cityPartnerTeam')
            }
        }
    }
</script>

<style scoped>
    .l_area{
        -webkit-box-shadow: .08rem .08rem .13rem rgba(115,115,115,.09);
        -moz-box-shadow: .08rem .08rem .13rem rgba(115,115,115,.09);
        box-shadow: .08rem .08rem .13rem rgba(115,115,115,.09);
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        margin-bottom: .3rem;
    }
    .l_area .l_each{
        border-bottom: .01rem solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .9rem;
        font-family: pfm;
        color: #000;
    }
    .l_area .l_each:last-child{
        border-bottom: none;
    }
    .l_area .l_each>img{
        width: .15rem;
    }
    .coupon{
         width: .42rem;
        margin-right: .3rem;
     }
    .collect{
        width: .43rem;
        margin-right: .29rem;
    }
    .book{
        width: .44rem;
        margin-right: .28rem;
    }
    .message{
        width: .44rem;
        margin-right: .28rem;
    }
    .e-left{
        display: flex;
        align-items: center;
    }
</style>
