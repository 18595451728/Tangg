<template>
	<div class="xinxi">
        <div class="list">
            <div class="l_title">
                <span>成员</span>
                <span>总佣金(元)</span>
            </div>
            <div class="l_con" v-for="item in list">
                <p><img :src="item.user_logo" alt=""><span>{{item.user_name}}</span></p>
                <p>{{item.money}}</p>
            </div>
        </div>
	</div>
</template>
<script>
    import global from "../../../components/Global"
    import axios from "axios"
export default {
  name: 'AddjzrxxXinxi',
    data(){
      return {
          list:[],
          token:global.token,
          page:1
      }
    },
    mounted(){
      axios.post('/User/teamDetail',{
          token:this.token,
          level:this.$route.query.level,
          page:this.page
      }).then(this.setData)
    },
    methods:{
        setData(res){
            console.log(res)
            if(res.data.status==1){
                this.list = res.data.data.list
            }else{
                this.$layer.msg(res.data.msg)
            }
        }
    }
}
</script>

<style  scoped>
    .xinxi{
        width: 6.9rem;
        margin: .3rem auto;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        overflow: hidden;
    }
    .l_title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: pfb;
        font-size: .24rem;
        color: #666;
        line-height: .6rem;
        background: #e3e3e3;
    }
    .l_title span{
        width: 40%;
        text-align: center;
    }
    .l_con{
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: .01rem solid #e5e5e5;
    }
    .l_con p:first-child{
        display: flex;
        align-items: center;
        font-size: .3rem;
        color: #333;
        font-family: pfb;
        width: 60%;

    }
    .l_con p img{
        width: .8rem;
        margin-right: .25rem;
    }
    .l_con p span{
        width: 2.5rem;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .l_con p:last-child{
        font-size: .36rem;
        color: #af1c3b;
        font-family: pfb;
        width: 35%;
        text-align: center;
    }
</style>
