<template>
	<div class="detail">
        <img :src="details.appointment_detail_pic" alt="">
        <div class="text_content">
            <h3>
                <i></i>
                <span>{{details.appointment_name}}</span>
                <i></i>
            </h3>
            <p v-html="details.appointment_detail"></p>
            <!--<div class="img_content">-->
                <!--<img src="../../../../static/img/general02.jpg" alt="">-->
                <!--<img src="../../../../static/img/general03.jpg" alt="">-->
                <!--<img src="../../../../static/img/general03.jpg" alt="">-->
            <!--</div>-->
        </div>
        <div class="price">
            <b>预约金:</b>{{details.appointment_price}}元（此预约金可以抵扣理疗费，但如果没有如约                过来，20 元不退回）
        </div>
        <a @click="toBook">我要预约</a>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
  name: 'GeneralxqDetail',
    data(){
      return {
          id:'',
          details:''
      }
    },
    mounted() {
      this.id = this.$route.query.id
        var that =this
        axios.post('/Appointment/appointmentDetail',{
            appointment_id:this.id
        }).then(res=>{
            console.log(res)
            if(res.data.status==1){
                that.details = res.data.data
            }
        })
    },
    methods:{
      toBook(){
          this.$router.push({
              path:'/generalxx',
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
                font-size:0.24rem
                line-height:0.42rem
                color:#4c4c4c
            .img_content
                padding-top:0.2rem
                .img_content img:nth-child(3n)
                    margin-right:0
                img
                    display:inline-block
                    width:30%
                    margin-right:2%
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
