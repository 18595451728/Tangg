<template>
	<div class="detail">
        <div v-for="item in details">
            <img :src="item.appointment_detail_pic" alt="">
            <div class="text_content">
                <h3>{{item.appointment_name}}</h3>
                <p v-html="item.appointment_detail"></p>
            </div>
            <div class="time">
                <b>坐诊时间:</b>{{item.start_time.tt}}——{{item.end_time.tt}}
            </div>
            <div class="price">
                <b>预约金:</b>{{item.appointment_price}}元（此预约金不抵扣，如果没有如约过来，                下次需要重新预约并且支付）
            </div>
            <a @click="book">我要预约</a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'YydetailDetail',
    props:{
        details:Array
    },
    data(){
      return{
          id:''
      }
    },
    mounted(){
      this.id = this.$route.query.id
    },
    methods:{
      book(){
          this.$router.push({
              path:'/yuyue/jzrxx',
              query:{
                  id:this.id
              }
          })
      }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
	.detail
        width 100%
        background:#f5f5f5
        img
            width:100%
        .text_content
            padding:0.3rem
            background:#FFFFFF
            margin-bottom 0.3rem
            h3
                font-size:0.28rem
                line-height:0.42rem
                text-align:center
                margin-bottom:0.3rem
            p
                font-size:0.24rem
                line-height:0.42rem
                color:#4c4c4c
        .time
            position:relative
            height:0.9rem
            line-height:0.9rem
            padding:0 0.3rem 0 1.7rem
            background #FFFFFF
            font-size:0.26rem
            margin-bottom:0.3rem
            b
                position:absolute
                left:0.3rem
                font-size:0.3rem
                font-weight:600
        .price
            height:1rem
            line-height:0.5rem
            padding:0.15rem 0.3rem 0.15rem 1.4rem
            background #FFFFFF
            font-size:0.26rem
            margin-bottom:1.3rem
            position:relative
            b
                position:absolute
                left:0.3rem
                font-size:0.3rem
                font-weight:600
        a
            position:fixed
            bottom:0
            text-align:center
            width 100%
            letter-spacing:1px
            height:0.9rem
            line-height 0.9rem
            font-size 0.26rem
            color:#fff
            background:$baseColor
</style>
