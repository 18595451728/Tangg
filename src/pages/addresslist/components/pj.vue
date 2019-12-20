<template>
    <div class="pj">
        <div class="collect" v-for="item,index in 5">
            <div class="c_top">
                <div class="c_left"><span>尹浩</span><span>18042424242</span></div>
                <div class="c_right">
                    <img src="/static/img/edit.png" alt="" @click="edit">
                    <img src="/static/img/del.png" alt="">
                </div>
            </div>
            <div class="c_center">浙江省杭州市西湖区西溪路525号浙江大学国家大学科技园B幢</div>
            <div class="c_bottom" v-if="index==1">
                <img src="/static/img/selected.png" alt=""><span>设为默认收货地址</span>
            </div>
        </div>
        <div class="save" @click="edit">新增收货地址</div>
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
            },
            edit(){
                this.$router.push('/Editaddress')
            }
        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.7rem;
        margin: .25rem auto;
        padding: .35rem .3rem .3rem;
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
    .c_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .c_left{
        font-size: .3rem;
        color: #292929;
        font-family: pfb;
    }
    .c_left span:first-child{
        margin-right: .3rem;
    }

    .c_right img:first-child{
        width: .4rem;
    }
    .c_right img:last-child{
        width: .36rem;
        margin-left: .3rem;
    }
    .c_center{
        width: 4.7rem;
        font-size: .24rem;
        font-family: pfm;
        color: #666;
        line-height: .35rem;
        margin-top: .1rem;
    }
    .c_bottom{
        margin-top: .2rem;
        display: flex;
        align-items: center;
    }
    .c_bottom img{
        width: .33rem;
        margin-right: .2rem;
    }
    .c_bottom span{
        font-size: .24rem;
        color: #333333;
        font-family: pfm;
    }
    .pj > div.save{
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
        margin: 0;
        padding: 0;
    }
</style>
