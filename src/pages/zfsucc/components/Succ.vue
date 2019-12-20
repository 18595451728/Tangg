<template>
    <div class="succ">
        <img src="../../../../static/img/icon_wexin.png" alt="">
        <p>支付方式：微信支付</p>
        <div class="price"><b>50</b>元</div>
    </div>
</template>

<script>
export default {
  name: 'ZfsuccSucc'
}
</script>

<style lang="stylus" scoped>
    .succ
        text-align:center
        img
            margin-top:1.65rem
        p
            line-height:1.3rem
            font-size:0.28rem
            color:#4C4C4C
        .price
            font-size:0.28rem
            color:#1a1a1a
            font-weight:600
            line-height 0.8rem
            b
                font-size:0.55rem
                font-weight:600
</style>
