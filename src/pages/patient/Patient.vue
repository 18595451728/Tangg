<template>
    <div class="Patient">
        <patient_header></patient_header>
        <patient_list :list="list"></patient_list>
        <addList></addList>
    </div>
</template>

<script>
    import patient_header from "./components/patient_header"
    import patient_list from "./components/patient_list"
    import addList from "./components/addList"
    import axios from 'axios'
    export default {
        name: "Patient",
        components:{
            patient_header,
            patient_list,
            addList
        },
        data(){
            return {
                list:[]
            }
        },
        mounted() {
            var that=this
            axios.post('/Patient/patientList',{
                token:this.$storage.session.get('token')
            }).then(res=>{
                console.log(res)
                if(res.data.status==1){
                    that.list = res.data.data
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

<style scoped>

</style>
