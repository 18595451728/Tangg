<template>
    <div class="setting_list">
        <div class="list1">
            <div class="address" @click="goaddress">
                <p>我的收货地址</p>
                <img src="/static/img/arrow_right.png" alt="">
            </div>
            <div class="rules">
                <p>服务条款</p>
                <img src="/static/img/arrow_right.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "setting_list",
        methods:{
            goaddress(){
                this.$router.push('/Addresslist')
            }
        }
    }
</script>

<style scoped>
    .setting_list{
        width: 6.9rem;
        margin: 0 auto;
    }
    .list1{
        width: 6.9rem;
        margin: .3rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .3rem;
    }
    .list1>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .address{
        border-bottom: 1px solid #dcdcdc;
    }
    .list1 p{
        line-height: .87rem;
        font-size: .3rem;
        color: #333;
        font-family: pfb;
    }
    .list1 img{
        width: .17rem;
    }
</style>
