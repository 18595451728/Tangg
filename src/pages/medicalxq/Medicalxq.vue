<template>
    <div>
        <medicalxq-header></medicalxq-header>
        <medicalxq-detail :message="message"></medicalxq-detail>
    </div>
</template>

<script>
import MedicalxqHeader from './components/Header'
import MedicalxqDetail from './components/Detail'
import axios from 'axios'
export default {
  name: 'Medicalxq',
  components: {
    MedicalxqHeader,
    MedicalxqDetail
  },
    data(){
      return {
          message:[]
      }
    },
    mounted() {
      var that=this
        axios.post('/Medical/doctorDetail',{
            doctor_id:this.$route.query.id
        }).then(res=>{
            console.log(res)
            if(res.data.status==1){
                that.message.push(res.data.data.doctorDetail)
            }else{
                that.$layer.msg(res.data.msg)
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .tabs li.active span{
        border-bottom:2px solid $baseColor
    }
    .tabs
        height:.8rem
        line-height:.8rem
        overflow:hidden
        padding:0 0.75rem
        background:#f6f6f6
        li
            float:left
            width:3rem
            text-align:center
            span
                display:inline-block
                font-size:.3rem
                line-height 0.7rem
                box-sizing border-box
</style>
