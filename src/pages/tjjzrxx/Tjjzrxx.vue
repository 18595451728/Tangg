<template>
    <div>
        <jzrxx-header></jzrxx-header>
        <jzrxx-xinxi></jzrxx-xinxi>
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
    mounted() {
      console.log(this.$token)
        axios.post('/Patient/patientList',{token:this.$storage.session.get('token')}).then(res=>{
            console.log(res)
        })
    }
}
</script>

<style>
</style>
