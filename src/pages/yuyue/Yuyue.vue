<template>
    <div>
        <yuyue-header></yuyue-header>
        <yuyue-list :list="list"></yuyue-list>
        <Footer></Footer>
    </div>
</template>

<script>
    import YuyueHeader from './components/Header'
    import YuyueList from './components/List'
    import Footer from '@/components/Footer'
    import axios from 'axios'
    export default {
        name: 'Yuyue',
        components: {
            YuyueHeader,
            YuyueList,
            Footer
        },
        data: function () {
            return {
                list:[]
            }
        },
        mounted() {
            var that =this
            axios.post('/Appointment/appointmentList',{
                page:1,
                list_row:10
            }).then(res=>{
                console.log(res)
                if(res.data.status==1){
                    that.list = res.data.data.list
                }
            })
        }
    }
</script>

<style scoped>
</style>
