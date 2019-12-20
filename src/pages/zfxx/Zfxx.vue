<template>
    <div>
        <zfxx-header></zfxx-header>
        <zfxx-xinxi :xinxi="xinxi"></zfxx-xinxi>
    </div>
</template>

<script>
import ZfxxHeader from './components/Header'
import ZfxxXinxi from './components/Xinxi'
import axios from 'axios'
export default {
  name: 'Jzrxx',
  components: {
    ZfxxHeader,
    ZfxxXinxi
  },
    data(){
      return{
          id:'',
          jzrid:'',
          xinxi:[]
      }
    },
    mounted() {
      if(window.location.href.indexOf('?#')<0){
          window.location.href = window.location.href.replace('#','?#')
      }

        this.id = this.$route.query.id
        this.jzrid = this.$route.query.jzrid
        var that=this
      axios.post('/Appointment/toAppointment',{
          appointment_id:this.id,
          user_patient_id:this.jzrid,
          token:this.$storage.session.get('token')
      }).then(res=>{
          console.log(res)
          if(res.data.status==1){
              that.xinxi.push(res.data.data)
          }
      })
    }
}
</script>

<style>
</style>
