<template>
    <div>
        <jzrxx-header></jzrxx-header>
        <jzrxx-xinxi :message="list"></jzrxx-xinxi>
    </div>
</template>

<script>
import JzrxxHeader from './components/Header'
import JzrxxXinxi from './components/Xinxi'
import axios from 'axios'
export default {
  name: 'Jzrxx',
  components: {
    JzrxxHeader,
    JzrxxXinxi
  },
    data(){
      return {
          list:[]
      }
    },
    mounted() {
        var token = this.$route.query.token
        if(token){
            this.$storage.session.set('token',token)
        }
        var that =this
        axios.post('/Patient/patientList',{token:this.$storage.session.get('token')}).then(res=>{
            console.log(res)
            if(res.data.status==1){
                if(res.data.data.length==0){
                    that.$layer.msg('请先添加就诊人信息')
                    setTimeout(()=>{
                        that.$router.push('/mine/tjjzrxx')
                    },1500)
                }
                that.list.push(res.data.data[0])
                console.log(that.list)
            }else if(res.data.status==-1){
                that.$layer.msg('请先登录')
                setTimeout(()=>{
                    that.$router.push('/Mine')
                },1000)
            }
        })
    }
}
</script>

<style>
</style>
