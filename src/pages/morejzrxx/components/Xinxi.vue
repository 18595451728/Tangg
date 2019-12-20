<template>
	<div class="xinxi">
		<form action="">
            <div class="group">
                <ul>
                    <li>
                        <label for="">预约人：</label>
                        <input type="text" placeholder="王爱清">
                        <i></i>
                    </li>
                    <li>
                        <label for="">联系电话：</label>
                        <input type="tel" placeholder="135123456787">
                        <i></i>
                    </li>
                    <li>
                        <label for="">生日：</label>
                        <input type="date" placeholder="1980-10-10">
                        <i></i>
                    </li>
                    <li>
                        <label for="">年龄：</label>
                        <input type="text" placeholder="39岁">
                        <i></i>
                    </li>
                    <li>
                        <label for="">性别：</label>
                        <input type="text" placeholder="女">
                        <i></i>
                    </li>
                    <li>
                        <label for="">家族遗传史：</label>
                        <input type="text" placeholder="无">
                        <i></i>
                    </li>
                </ul>
            </div>
            <div class="time">
                预约时间：
                <span>2019-11-12 下午3：00</span>
            </div>
            <router-link to="/yuyue/zfsucc">提交</router-link>
        </form>
	</div>
</template>
<script>
export default {
  name: 'MorejzrxxXinxi'
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .xinxi
        padding:0.3rem
        .group
            width:100%
            padding:0 .1rem
            background:#fff
            box-sizing:border-box
            margin-bottom:0.25rem
            border-radius:0.16rem
            li
                height:.65rem
                line-height:.65rem
                overflow:hidden
                display:flex
                border-bottom:1px solid #e0e0e0
                font-size:0.26rem
                color:#4c4c4c
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
</style>
