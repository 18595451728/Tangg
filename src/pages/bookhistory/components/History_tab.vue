<template>
    <div class="History_tab">
        <div class="tab_hd">
            <div v-for="(item,index) in list" :class="{active:tab==index}" @click="changeTab(index)">{{item}}</div>
        </div>
        <div class="tab_bd">
            <div v-for="(item,index) in lists" class="his">
                <div class="h_top" :class="{yuyue:item.order_status==2}">
                    <p style="opacity: 0"><img :src="[item.order_status==2?'../../../../static/img/clock_red.png':'../../../../static/img/clock_grey.png']" alt=""><span :class="{red:item.status==0}">{{item.appointment_date}}</span></p>

                    <p style="line-height: .63rem" :class="{red:item.order_status==2}">{{item.order_status==1?'待支付':item.order_status==2?'已预约':item.order_status==3?'已就诊':item.order_status==4?'已完成':''}}</p>
                </div>
                <div class="h_center">
                    <img :src="item.appointment_pic" alt="">
                    <p>{{item.appointment_name}}</p>
                </div>
                <div class="h_bottom">
                    <div>预约费 <p>{{item.total_fee}} <span>元</span></p></div>
                    <!--<div class="cancle" v-if="item.order_status!=4" v-html="item.order_status==2?'取消预约':'再次预约'"></div>-->
                    <!--<div @click="bookagain(item)" class="cancle" v-if="item.order_status!=4 && item.order_status!=2">再次预约</div>-->
                    <!--<div v-else></div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "History_tab",
        data:function () {
            return {
                list:['全部','已取消','待支付','已预约','已就诊','已完成'],
                tab:0,
                lists:'',
                currentPage:1
            }
        },
        mounted(){
            this.initData('')
        },
        methods:{
            bookagain(e){
                this.$router.push({
                    path:'/Bookagain',
                    query:{
                        id:e.appointment_order_id,
                        cate_id:e.appointment_cate_id
                    }
                })
            },
            changeTab(e){
                this.tab = e
                if(e==0){
                    e=''
                }else{
                    e=e-1
                }
                this.initData(e)
            },
            initData(e){
                var that =this
                axios.post('/Appointment/userAppointmentList',{
                    token:this.$storage.session.get('token'),
                    list_row:10,
                    page:this.currentPage,
                    order_status:e
                }).then(res=>{
                    console.log(res)
                    if(res.data.status==1){
                        that.lists = res.data.data.list
                        if(res.data.data.list.length==0){
                            that.$layer.msg('暂无记录')
                        }
                    }else if(res.data.status==-1){
                        that.$layer.msg('请先登录')
                        setTimeout(()=>{
                            this.$router.push('/Mine')
                        },1000)
                    }else{
                        that.$layer.msg(res.data.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .tab_hd{
        line-height: .8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
    }
    .tab_hd div{
        font-size: .26rem;
        color: #333333;
        position: relative;
        width: 15%;
        text-align: center;
    }
    .tab_hd div.active::after{
        display: block;
        width: 100%;
        height: .04rem;
        background: #a51a38;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .tab_bd{
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .his{
        margin-top: .3rem;
        padding: 0 .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        -moz-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .his>div{
        padding-left: .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .h_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .24rem;
    }
    .h_top p:first-child{
        display: flex;
        align-items: center;
    }
    .h_top img{
        width: .24rem;
        margin-right: .15rem;
    }
    .h_top span{
        line-height: .63rem;
    }
    .red{
        color: #a51a38;
    }
    .h_center{
        border-top: .01rem solid #e0e0e0;
        border-bottom: .01rem solid #e0e0e0;
        display: flex;
        align-items: center;
        padding-top: .2rem;
        padding-bottom: .2rem;
    }
    .h_center img{
        width: 1.1rem;
        margin-right: .2rem;
    }
    .h_center p{
        width: 4.2rem;
        font-size: .28rem;
        color: #333333;
        line-height: .4rem;
    }
    .h_bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .h_bottom>div:first-child{
        font-size: .24rem;
        color: #999999;
    }
    .h_bottom>div:first-child p{
        font-size: .28rem;
        color: #a51a38;
        font-weight: bold;
        display: inline-block;
    }
    .h_bottom>div:first-child p span{
        font-size: .24rem;
    }
    .h_bottom>div.cancle{
        width: 1.35rem;
        line-height: .42rem;
        border: .01rem solid #a51a38;
        -webkit-border-radius: .22rem;
        -moz-border-radius: .22rem;
        border-radius: .22rem;
        font-size: .24rem;
        color: #a51a38;
        text-align: center;
    }
</style>
