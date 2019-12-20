<template>
    <div class="pj">
        <div class="edit">
            <div><p>姓名</p><input type="text" placeholder="收货人姓名"></div>
            <div><p>电话</p><input type="text" placeholder="收货人手机号"></div>
            <div><p>地区</p><input type="text" placeholder="选择省/市/区" readonly></div>
            <div><p>详情</p><input type="text" placeholder="街道门牌、楼层房间号等信息"></div>
            <div><p>设为默认地址</p><img src="/static/img/select.png" alt=""></div>
        </div>
        <div class="save">保存并使用</div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
                star: 4,
                pro_num:1
            }
        },
        methods: {
            stars(e) {
                this.star = e + 1
            },
            defaultNum(){
                if(!this.pro_num)this.pro_num = 1
            }
        }
    }
</script>

<style scoped>
    .edit {
        width: 6.9rem;
        margin: .25rem auto;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .edit>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eeeeee;
    }
    .edit>div p{
        line-height: .85rem;
        font-size: .24rem;
        color: #373737;
        font-family: pfb;
    }
    .edit>div input{
        width: 60%;
        font-family: pfm;
        font-size: .24rem;
        color: #9c9c9c;
        height: .8rem;
        background: none;
        text-align: right;
    }
    .edit>div img{
        width: .33rem;
    }
    .save{
        width: 6.7rem;
        line-height: .7rem;
        text-align: center;
        color: white;
        background: #af1c3b;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        position: fixed;
        left: .4rem;
        bottom: .3rem;
        font-family: pfm;
        font-size: .3rem;
    }
</style>
