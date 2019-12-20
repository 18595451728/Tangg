<template>
    <div class="History_header">
        <img src="../../../../static/img/back_white.png" alt="" @click="goback">
        <p>就诊人信息</p>
        <img src="" alt="">
    </div>
</template>

<script>
    export default {
        name: "patient_header",
        methods:{
            goback(){
                this.goBack()
            }
        }
    }
</script>

<style scoped>
    .History_header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #a51a38;
        line-height: .88rem;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-size: .36rem;
        color: #ffffff;
    }
    .History_header img{
        width: .22rem;
    }
</style>
