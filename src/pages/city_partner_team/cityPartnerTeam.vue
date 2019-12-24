<template>
    <div>
        <addjzrxx-header></addjzrxx-header>
        <addjzrxx-xinxi :xinxi="xinxi" :shareData="shareData"></addjzrxx-xinxi>
    </div>
</template>

<script>
import global from '../../components/Global'
import AddjzrxxHeader from './components/Header'
import AddjzrxxXinxi from './components/Xinxi'
import axios from 'axios'
export default {
  name: 'cityPartnerTeam',
  components: {
    AddjzrxxHeader,
      AddjzrxxXinxi
  },
    data(){
      return {
          first_list:[],
          second_list:[],
          distribut_money:'',
          xinxi:'',
          shareData:''
      }
    },
    mounted() {
      axios.post('/User/team',{token:global.token}).then(this.setData)
      axios.post('/User/shareList',{token:global.token}).then(this.setShareData)
    },
    methods:{
        setData(res){
            console.log(res)
            if(res.data.status==1){
                var data= res.data.data
                this.xinxi = data
                this.first_list = data.first_list
                this.second_list = data.second_list
                this.distribut_money = data.distribut_money
            }else{
                this.$layer.msg(res.data.msg)
            }
        },
        setShareData(res){
            console.log(res)
            if(res.data.status==1){
                var data= res.data.data
                this.shareData = data.list
            }else{
                this.$layer.msg(res.data.msg)
            }
        }
    }
}
</script>

<style>
</style>
