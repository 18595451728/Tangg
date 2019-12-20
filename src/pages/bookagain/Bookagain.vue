<template>
    <div>
        <generalxx-header></generalxx-header>
        <generalxx-xinxi :address="address" :price="price"></generalxx-xinxi>
    </div>
</template>

<script>
    import GeneralxxHeader from './components/Header'
    import GeneralxxXinxi from './components/Xinxi'
    import axios from 'axios'
    export default {
        name: 'Bookagain',
        components: {
            GeneralxxHeader,
            GeneralxxXinxi
        },
        data(){
            return {
                address:[],
                price:[]
            }
        },
        mounted() {
            var that =this
            axios.post('/Patient/patientList',{
                token:this.$storage.session.get('token')
            }).then(res=>{
                console.log(res)
                if(res.data.status==1){
                    that.address.push(res.data.data[0])
                    axios.post('/Appointment/toAppointment',{
                        appointment_id:that.$route.query.cate_id,
                        user_patient_id:res.data.data[0].user_patient_id,
                        token:that.$storage.session.get('token')
                    }).then(re=>{
                        if(re.data.status==1){
                            console.log(re)
                            that.price.push(re.data.data.appointment.appointment_price)
                        }else{
                            that.$layer.msg(re.data.msg)
                        }
                    })
                }else{
                    that.$layer.msg(res.data.msg)
                }
            })
        }
    }
</script>

<style>
</style>
