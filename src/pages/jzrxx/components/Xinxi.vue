<template>
	<div class="xinxi">
		<form action="" v-for="item in message">
            <div class="group">
                <ul class="ul">
                    <li class="detail">
                        <label for="">就诊人：</label>
                        <input type="text" v-model="item.patient_name" placeholder="请输入就诊人姓名">
                    </li>
                    <li class="detail">
                        <label for="">联系电话：</label>
                        <input type="tel" v-model="item.patient_telephone" placeholder="请输入手机号">
                    </li>
                    <li class="detail">
                        <label for="">生日：</label>
                        <input type="date" v-model="item.patient_birth"  @change="chooseBirth(item)" placeholder="1980-10-10">
                    </li>
                    <li class="detail">
                        <label for="">年龄：</label>
                        <input type="text" v-model="item.patient_age" readonly placeholder="请输入就诊人年龄">
                    </li>
                    <li class="sex_li">
                        <label for="" class="sex">性别：</label>
                        <!-- <div class="sexs"><input type="radio" v-model="sex1" name="sex" id="male" class="chose"><label for="male" class="sex_label sex_label1">  </label><span class="span1">男</span></div>
                        <div class="sexs"><input type="radio" v-model="sex" name="sex" id="female" class="chose"><label for="female" class="sex_label sex_label2"> </label><span class="span2">女</span></div> -->
                        <div class="sex-right">
                            <div class="male">
                                <div class="big_circle" @click="chooseSex(1)">
                                    <div v-show='item.patient_sex.vv==1' class="small_circle"></div>
                                </div>
                                <p>男</p>
                            </div>
                            <div class="female">
                                <div class="big_circle" @click="chooseSex(0)">
                                    <div v-show='item.patient_sex.vv==0' class="small_circle"></div>
                                </div>
                                <p>女</p>
                            </div>
                        </div>
                    </li>
                    <li class="detail">
                        <label for="" class="family">家族遗传史：</label>
                        <input type="text" v-model="item.patient_history" placeholder="请输入家族遗传史状况">
                    </li>
                </ul>
            </div>
            <div class="group">
                <p>病情描述：</p>
                <textarea name="" id="" cols="30" rows="10" v-model="item.patient_describe"></textarea>
            </div>
            <a @click="nextStep">下一步</a>
        </form>
	</div>
</template>
<script>
    import axios from 'axios'
export default {
  name: 'JzrxxXinxi',
    props:{
        message:Array
    },
    data(){
      return{
          id:'',
      }
    },
    mounted(){
      this.id = this.$route.query.id
    },
    methods:{
        chooseBirth(e){
            console.log(e)
            let d = new Date(),sNow = Number(d)
            let sChoose = Number(new Date(e.patient_birth))
            console.log(sNow,sChoose)
            if(sChoose-d>0){
                this.$layer.msg('时间选择错误')
                return false;
            }
            console.log(111)
            e.patient_age = d.getFullYear() - new Date(e.patient_birth).getFullYear()
        },
        chooseSex(e){
            this.message[0].patient_sex.vv = e
        },
        nextStep(){
            var that =this
            axios.post('/Patient/patientEdit',{
                patient_name:this.message[0].patient_name,
                patient_telephone:this.message[0].patient_telephone,
                patient_birth:this.message[0].patient_birth,
                patient_age:this.message[0].patient_age,
                patient_sex:this.sex,
                patient_history:this.message[0].patient_history,
                patient_describe:this.message[0].patient_describe,
                user_patient_id:this.message[0].user_patient_id,
                token:this.$storage.session.get('token')
            }).then(res=>{
                console.log(res)
                if(res.data.status==1){
                        that.$router.push(
                            {
                                path:'/yuyue/zfxx',
                                query:{
                                    id:this.id,
                                    jzrid:this.message[0].user_patient_id
                                }

                            }
                        )
                }else{
                    that.$layer.msg(res.data.msg)
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .xinxi
        .group
            width:100%

            box-sizing:border-box
            margin-bottom:0.25rem
            li:last-child
                border-bottom:none
            li
                height:.65rem
                line-height:.65rem
                overflow:hidden
                display:flex
                border-bottom:1px solid #e0e0e0
                font-size:0.26rem
                color:#4c4c4c
                padding:0 .1rem
                background:#fff
                border-bottom:5px solid rgb(246,247,250)
                label
                    width:2rem
                    padding-left 0.15rem
                input
                    flex:1
                    text-align:right
                i
                    float:right
                    width 0.5rem
                    height:0.65rem
                    background:url(../../../../static/img/icon_yjt.png) no-repeat center
                    background-size: auto 0.2rem
            p
                line-height 0.75rem
                padding-left:.15rem
            textarea
                margin:0 0.15rem
                height:3rem
                width:7.2rem
                padding:0.15rem
                box-sizing:border-box
                border:1px solid #E0E0E0
                margin-bottom 0.3rem
                resize:none
        a
            position:fixed
            bottom:0
            left:0
            text-align:center
            width 100%
            letter-spacing:1px
            height:0.9rem
            line-height 0.9rem
            font-size 0.3rem
            color:#fff
            background:$baseColor


    .xinxi .group li.sex_li{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .sex-right{
        width:25%;
        padding-right:.15rem;
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .sex-right>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .big_circle{
        width: .3rem;
        height: .3rem;
        border:.02rem solid #e0e0e0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .small_circle{
        width:.15rem;
        height: .15rem;
        border-radius:50%;
        background: #2d71fb
    }
</style>
