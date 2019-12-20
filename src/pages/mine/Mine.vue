<template>
    <div class="mine_container">
        <mine_header></mine_header>
        <mine_card :info="userinfo"></mine_card>
        <mine_order></mine_order>
        <mine_list></mine_list>
        <Footer></Footer>
    </div>
</template>

<script>
    import mine_header from "./components/mine_header"
    import mine_card from "./components/mine_card"
    import mine_order from "./components/mine_order"
    import mine_list from "./components/mine_list"
    import Footer from '@/components/Footer'
    import axios from 'axios'
    export default {
        name: "Mine",
        components:{
            mine_header,
            mine_card,
            mine_order,
            mine_list,
            Footer
        },
        data () {
          return {
            token: global.token,
            highService: {},
            medicallist: [],
              userinfo:[]
          }
        },
        mounted() {
            // var token = this.$route.query.token || this.$storage.session.get('token')
            // console.log(token,this.$storage.session.get('token'))
            // if(!token){
            //     var url = 'http://tangguan.123bingo.cn/dist/#/Mine';
            //     var h5_url = window.btoa(url);
            //     window.location.href = 'http://tangguan.123bingo.cn/api/WxLogin/login?h5_url='+h5_url;
            // }else{
            //     this.$storage.session.set('token',token)
            // }
            var token = this.$route.query.token
            if(token){
                this.$storage.session.set('token',token)
            }


            this.getHomeInfo()
        },
        methods: {
            getHomeInfo() {
                axios.post("/User/userInfo",{token: this.$storage.session.get('token')})
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                console.log(res)
                console.log(res.data.data)
                if(res.data.status==1){
                    this.userinfo.push(res.data.data)
                }else if(res.data.status==-1){
                    this.$router.push('/Mine')
                }

                // this.highService = res.data.data.appointment_cate
                // this.medicallist = res.data.data.appointment.list

            }

        }
    }
</script>

<style scoped>
    .mine_container{
        width: 100%;
        background: url("../../../static/img/mine_bg.png") no-repeat;
        background-size: 100%;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 1.2rem;
    }
</style>
