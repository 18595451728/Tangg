<template>
    <div class="mine_card">
        <div v-for="item in info">
            <div class="card_top">
                <div class="t_left">
                    <img :src="item.user.user_logo" alt="">
                    <div class="basemes">
                        <h3>{{item.user.user_name}}</h3>
                        <p>{{item.user.level_name}}</p>
                    </div>
                </div>
                <div class="t_right">编辑资料></div>
            </div>
            <div class="card_bottom">
                <div class="b_left">
                    <div>
                        <h3>我的VIP会员 > </h3>
                        <p>2020-11-11到期</p>
                    </div>
                </div>
                <div class="b_right">
                    <div>
                        <h3>VIP福利 ></h3>
                        <p>挂号有折扣</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine_card",
        props:{
            info:Array
        }
    }
</script>

<style scoped>
    .mine_card{
        width: 100%;
        height: 3.5rem;
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        margin-top: .22rem;
        -webkit-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        -moz-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .card_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: .01rem dashed #e9e8e9;
        padding-bottom: .32rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .t_left{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .t_left>img{
        width: 1.21rem;
        height: 1.21rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .t_left h3{
        font-size: .36rem;
        color: #010101;
        font-family: pfb;
        margin-bottom: .2rem;
    }
    .t_left p{
        color: white;
        width: 1.4rem;
        line-height: .3rem;
        font-size: .2rem;
        font-family: pfm;
        -webkit-border-radius: .15rem;
        -moz-border-radius: .15rem;
        border-radius: .15rem;
        background: #af1c3b;
        text-align: center;
    }
    .t_right{
        font-size: .24rem;
        color: #333333;
        font-family: pfm;
    }
    .card_bottom{
        padding-top: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .card_bottom>div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: .96rem;
    }
    .card_bottom>div h3{
        font-size: .3rem;
        color: #a51a38;
        margin-bottom: .2rem;
        font-family: pfb;
    }
    .card_bottom>div p{
        font-size: .24rem;
        color: #666666;
        font-family: fpm;
    }
    .b_left{
        border-right: .01rem dashed #e9e8e9;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
