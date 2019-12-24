<template>
    <div class="evaluate">
        <Header></Header>
        <pj :list="list" @changestar="changestar" @uploadImgs="uploadImgs" @changeNm="changeNm"></pj>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import pj from "./components/pj"
    import axios from "axios"
    import global from "../../components/Global"
    export default {
        name: "Evaluate",
        components:{
            Header,
            pj
        },
        data(){
            return {
                token:global.token,
                list:''
            }
        },
        mounted() {
            axios.post('/Order/commentGoods',{
                token:this.token,
                order_no:this.$route.query.order_no
            }).then(this.setData)
        },
        methods:{
            setData(res){
                console.log(res)
                if(res.data.status==1){
                    for(var i in res.data.data){
                        res.data.data[i].stars = 0
                        res.data.data[i].content = ''
                        res.data.data[i].imgs = []
                        res.data.data[i].pics = []
                        res.data.data[i].nm = !0
                    }
                    this.list = res.data.data
                }else{
                    this.$layer.msg(res.data.msg)
                }
            },
            changestar(r){
                console.log(r)
                this.list[r.index].stars = r.stars+1
            },
            uploadImgs(c){
                console.log(c)
                this.list[c.index].imgs.push(c.xian)
                this.list[c.index].pics.push(c.chuan)
            },
            changeNm(e){
                this.list[e.index].nm = e.nm
            }
        }
    }
</script>

<style scoped>

</style>
