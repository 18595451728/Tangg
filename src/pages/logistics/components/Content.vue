<template>
    <div class="contents">
        <div class="order_con">
            <div class="order_title"><span>{{express_name}}单号：{{express_no}}</span></div>
            <div class="lc">
                <div class="l_top">
                    <div v-for="item in getLc">
                        <span :class="{active:item.hasdone}"></span>
                        <p :class="{active:item.hasdone}">{{item.title}}</p>
                    </div>
                    <div class="lines">
                        <div v-for="item,index in getLc" v-if="index!=0" :class="{active:item.hasdone}"></div>
                    </div>
                </div>
                <div class="l_bottom"></div>
            </div>
        </div>
        <div class="wl">
            <div class="wl_title">物流状态</div>
            <div class="wl_address">
                <div></div>
                <div class="dian">
                    <p>收</p>
                    <div class="line"></div>
                </div>
                <p>[收货地址]{{address_info.province}}{{address_info.city}}{{address_info.district}}{{address_info.place}}</p>
            </div>
            <div class="wl_status" v-for="item in express_data">
                <div class="wl_time">
                    <p>{{item.AcceptTime.split(' ')[0]}}</p>
                    <p>{{item.AcceptTime.split(' ')[1]}}</p>
                </div>
                <div class="dian">
                    <p></p>
                    <div class="line"></div>
                </div>
                <!--<p>[菜鸟驿站]<span>您已在杭州，正在派送</span></p>-->
                <p>{{item.AcceptStation}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        props:['express_name','express_no','express_data','address_info','state'],
        data(){
            return {
            }
        },
        computed:{
            getLc(){
                if(this.state==0){
                    return [
                        {
                            hasdone:!1,
                            title:'已发货'
                        },
                        {
                            hasdone:!1,
                            title:'运输中'
                        },
                        {
                            hasdone:!1,
                            title:'已签收'
                        }
                    ]
                }
                else if(this.state==1){
                    return [
                        {
                            hasdone:!0,
                            title:'已发货'
                        },
                        {
                            hasdone:!1,
                            title:'运输中'
                        },
                        {
                            hasdone:!1,
                            title:'已签收'
                        }
                    ]
                }else if(this.state==2||this.state==4){
                    return [
                        {
                            hasdone:!0,
                            title:'已发货'
                        },
                        {
                            hasdone:!0,
                            title:'运输中'
                        },
                        {
                            hasdone:!1,
                            title:'已签收'
                        }
                    ]
                }else{
                    return [
                        {
                            hasdone:!0,
                            title:'已发货'
                        },
                        {
                            hasdone:!0,
                            title:'运输中'
                        },
                        {
                            hasdone:!0,
                            title:'已签收'
                        }
                    ]
                }
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .contents>div{
        width: 6.9rem;
        margin: .25rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .order_con{
        padding: 0 .3rem .37rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .order_title{
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
    }
    .order_title img{
        margin-right: .2rem;
        width: .31rem;
    }
    .order_title span{
        font-size: .3rem;
        font-family: pfb;
        color: #333333;
    }
    .l_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .lc{
        text-align: center;
    }
    .lc span{
        width: .15rem;
        height: .15rem;
        -webkit-border-radius: .075rem;
        -moz-border-radius: .075rem;
        border-radius: .075rem;
        background: #eeeeee;
        display: inline-block;
        margin-bottom: .2rem;
    }
    .lc span.active{
        background: #af1c3b;
    }
    .lc p{
        font-size: .24rem;
        color: #999999;
        font-family: pfm;
    }
    .lc p.active{
        color: #333333;
        font-family: pfb;
    }
    .lines{
        position: absolute;
        width: 5.5rem;
        left: calc(50% - 2.75rem);
        height: .03rem;
        display: flex;
        align-items: center;
        top: .06rem;
        z-index: -1;
    }
    .lines div{
        width: 50%;
        background: #eeeeee;
        height: .03rem;
    }
    .lines div.active{
        background: #af1c3b;
    }
    .wl{
        padding: 0 .3rem .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .wl_title{
        line-height: .9rem;
        font-family: pfb;
        font-size: .3rem;
        color: #373737;
    }
    .wl_address{
        display: flex;
        align-items: center;
        margin-bottom: .7rem;
    }
    .wl_address>div:first-child{
        width: .8rem;
        text-align: right;
    }
    .wl_address>p{
        font-size: .22rem;
        color: #333;
        font-family: pfm;
        width: 4.5rem;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .dian{
        width: .68rem;
        text-align: center;
        position: relative;
    }
    .dian p{
        margin: 0 auto;
        width: .36rem;
        line-height: .36rem;
        height: .36rem;
        text-align: center;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #af1c3b;
        font-family: pfb;
        font-size: .17rem;
        color: #f9f9f9;
    }
    .dian .line{
        width: .02rem;
        height: .7rem;
        background: #dfdfdf;
        position: absolute;
        left: .33rem;
    }
    .wl_status{
        /*margin-bottom: .75rem;*/
        display: flex;
        align-items: flex-start;
        height: 1.19rem;
    }
    .wl_status:last-child{
        margin-bottom: 0;
    }
    .wl_time p{
        width: .8rem;
        text-align: right;
        font-size: .24rem;
        font-family: pfm;
        color: #b9b9b9;
    }
    .wl_time p:last-child{
        font-size: .2rem;
    }
    .wl_status .dian p{
        width: .07rem;
        height: .07rem;
        background: #9a9a9a;
    }
    .wl_status .dian .line{
        height: 1.15rem;
    }
    .wl_status:last-child  .dian .line{
        display: none;
    }
    .wl_status>p{
        font-size: .2rem;
        font-family: pfm;
        color: #999999;
        max-width: 4.5rem;
        line-height: .3rem;
    }
    .wl_status>p span{
        color: #666;
    }
</style>
