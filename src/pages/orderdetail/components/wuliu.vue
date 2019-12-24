<template>
    <div class="wuliu" v-if="status>=3">
        <div class="w_con">
            <div>
                <p>卖家已发货</p>
                <p @click="todetail">卖家已发货，点击查看物流</p>
            </div>
            <img src="/static/img/car.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "wuliu",
        data(){
            return {
                status:''
            }
        },
        mounted(){
            this.status = this.$route.query.status
        },
        methods:{
            todetail(){
                this.$router.push({
                    path:'/Logistics',
                    query:{
                        order_no:this.$route.query.order_no
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .wuliu{
        width: 6.9rem;
        height: 1.87rem;
        margin: .26rem auto;
        background: url("/static/img/logistics.png") no-repeat;
        background-size: 100%;
        padding: 0 .4rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .w_con{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .wuliu img{
        width: 1.25rem;
    }
    .wuliu p:first-child{
        font-family: pfb;
        font-size: .3rem;
        color: white;
        margin-bottom: .2rem;
    }
    .wuliu p:last-child{
        font-size: .22rem;
        color: white;
        font-family: pfm;
        padding-bottom: .1rem;
        border-bottom: .01rem solid #f5ecd8;
    }
</style>
