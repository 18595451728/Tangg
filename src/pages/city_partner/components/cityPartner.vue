<template>
	<div class="xinxi">

            <div class="group">
                <ul>
                    <li>
                        <label for="">姓名：</label>
                        <input type="text" placeholder="请在此输入您的姓名">
                    </li>
                    <li>
                        <label for="">联系电话：</label>
                        <input type="tel" placeholder="请在此输入您的联系电话">
                    </li>
                </ul>
            </div>

            <div class="  " @click="toPartnerSuccess">
                <router-link to="/yuyue/zfxx">提交资料</router-link>
            </div>

	</div>
</template>
<script>
export default {
  name: 'cityPartner',
    props:{
        typeList:Array, // 类型列表
        proList:Array, // 商品列表
    },
    data() {
        return {
            tab: 0,
            cateId:'',
        }
    },
    mounted() {

    },
    methods:{
        toPartnerSuccess(){
            this.$emit('toPartnerSuccesss',{userId:12});
        }
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
            padding:0.30rem 0 .30rem
            background:#fff
            box-sizing:border-box
            margin-bottom:0.25rem
            -moz-box-shadow:2px 2px 7px #eee;
            -webkit-box-shadow:2px 2px 7px #eee;
            box-shadow:2px 5px 7px #eee;
            border-radius:0.1rem
            li:last-child
                border-bottom:none
            li
                padding:0.30rem 0.30rem
                line-height:.65rem
                font-size:0.26rem
                color:#4c4c4c
                label
                    display:black
                    width:100%
                    padding-left 0.15rem
                input
                    border-radius:5px
                    width:calc(100% - 0.60rem);
                    display:block
                    text-align:left
                    padding:0.20rem 0.20rem

                    background:#eeeeee

                i
                    float:right
                    width 0.5rem
                    height:0.65rem
                    background:url(../../../../static/img/icon_yjt.png) no-repeat center
                    background-size: auto 0.2rem
            p
                line-height 0.75rem
                padding-left:.15rem
            textarea
                margin:0 0.15rem
                height:3rem
                width:6.4rem
                padding:0.15rem
                box-sizing:border-box
                border:1px solid #E0E0E0
                margin-bottom 0.3rem
                resize:none
        a
            /*position:fixed*/
            /*bottom:0*/
            /*left:0*/
            border-radius:5px
            display:block
            text-align:center
            width 100%
            letter-spacing:1px
            height:0.9rem
            line-height 0.9rem
            font-size 0.3rem
            color:#fff
            background:$baseColor
</style>
