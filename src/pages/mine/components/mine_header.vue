<template>
    <div class="headers">
        <div class="back" @click="goback">
            <img src="../../../../static/img/back_white.png" alt="">
        </div>
        <div class="header_center">个人中心</div>
        <div class="header_right">
            <img src="../../../../static/img/settings.png" @click="tosetting" alt="">
            <img src="../../../../static/img/message_white.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine_header",
        methods:{
            goback(){
                this.goBack()
            },
            tosetting(){
                this.$router.push('/Setting')
            }
        }
    }
</script>

<style scoped>
    .headers{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .88rem;
    }
    .back{
        width: 1.32rem;
    }
    .back img{
        width: .22rem;
    }
    .header_center{
        font-size: .36rem;
        color: white;
    }
    .header_right{
        width: 1.32rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header_right img:first-child{
        width: .45rem;
    }
    .header_right img:last-child{
        width: .44rem;
    }
</style>
