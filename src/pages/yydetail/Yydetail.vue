<template>
    <div>
        <yydetail-header></yydetail-header>
        <yydetail-detail :details="detail"></yydetail-detail>
    </div>
</template>

<script>
import YydetailHeader from './components/Header'
import YydetailDetail from './components/Detail'
import axios from 'axios'
export default {
  name: 'Yydetail',
  components: {
    YydetailHeader,
    YydetailDetail
  },
    data(){
      return{
        id:'',
          detail:[]
      }
    },
    mounted() {
      this.id = this.$route.query.id
        console.log(this.id)
        var that=this
        axios.post('/Appointment/appointmentDetail',{
            appointment_id:this.id
        }).then(res=>{
            console.log(res)
            if(res.data.status==1){
                that.detail.push(res.data.data)
            }
        })
    }
}
</script>

<style scoped>
</style>
