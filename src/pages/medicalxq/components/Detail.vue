<template>
    <div class="medicalxq">
        <div v-for="item in message">
            <div class="head">
                <img :src="item.pic" alt="">
                <p>{{item.name}}</p>
                <span>{{item.label}}</span>
            </div>
            <div class="intro">
                <h3>
                    <i></i>
                    <span>医生介绍</span>
                    <i></i>
                </h3>
                <p>{{item.introduction}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MedicalxqDetail',
    props:{
        message:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .head
        height:2.25rem
        padding:.4rem 0 .25rem
        text-align:center
        background:$baseColor
        color:#fff
        img
            height:1.2rem
            border-radius:0.6rem
        p
            font-size:.28rem
            line-height:.7rem
        span
            font-size:.24rem
    .intro
        padding:0 .3rem 1rem
        background:#fff
        h3
            font-size:.3rem
            line-height:1rem
            font-weight:600
            text-align:center
            i
                display:inline-block
                position:relative
                top:-0.1rem
                width:0.65rem
                height:1px
                background:#e0e0e0
            span
                padding:0 .24rem
        p
            line-height:.42rem
            font-size:.24rem
</style>
