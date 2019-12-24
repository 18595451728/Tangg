<template>
    <div class="archives">
        <Header></Header>
        <pj :health="health"></pj>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import pj from "./components/pj"
    import global from "../../components/Global"
    import axios from 'axios'
    export default {
        name: "Archives",
        components:{
            Header,
            pj
        },
        data(){
            return {
                token: global.token,
                health:''
            }
        },
        mounted(){
            axios.post('/User/health',{token:this.token}).then(this.setData)
        },
        methods:{
            setData(res){
                console.log(res)
                if(res.data.status==1){
                    this.health = res.data.data.health
                }else{
                    this.$layer.msg(res.data.msg)
                }
            }
        }
    }
</script>

<style scoped>

</style>
