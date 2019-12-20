<template>
	<div class="xinxi">
		<form action="">
            <div class="group">
                <ul class="ul">
                    <li class="detail">
                        <label for="">就诊人：</label>
                        <input type="text" v-model="name" placeholder="请输入就诊人姓名">
                    </li>
                    <li class="detail">
                        <label for="">联系电话：</label>
                        <input type="tel" v-model="tel" placeholder="请输入手机号">
                    </li>
                    <li class="detail">
                        <label for="">生日：</label>
                        <input type="date" v-model="birth" @change="chooseBirth" placeholder="1980-10-10">
                    </li>
                    <li class="detail">
                        <label for="">年龄：</label>
                        <input type="text" v-model="age" readonly placeholder="请输入就诊人年龄">
                    </li>
                    <li class="sex_li">
                        <label for="" class="sex">性别：</label>
                        <!-- <div class="sexs"><input type="radio" v-model="sex1" name="sex" id="male" class="chose"><label for="male" class="sex_label sex_label1">  </label><span class="span1">男</span></div>
                        <div class="sexs"><input type="radio" v-model="sex" name="sex" id="female" class="chose"><label for="female" class="sex_label sex_label2"> </label><span class="span2">女</span></div> -->
                        <div class="sex-right">
                            <div class="male">
                                <div class="big_circle" @click="chooseSex(1)">
                                    <div v-show='sex==1' class="small_circle"></div>
                                </div>
                                <p>男</p>
                            </div>
                            <div class="female">
                                <div class="big_circle" @click="chooseSex(0)">
                                    <div v-show='sex==0' class="small_circle"></div>
                                </div>
                                <p>女</p>
                            </div>
                        </div>
                    </li>
                    <li class="detail">
                        <label for="" class="family">家族遗传史：</label>
                        <input type="text" v-model="inherit" placeholder="请输入家族遗传史状况">
                    </li>
                </ul>
            </div>
            <div class="group">
                <p>病情描述：</p>
                <textarea name="" v-model="details"></textarea>
            </div>
            <a @click="addMes">提交</a>
        </form>
	</div>
</template>
<script>
    import axios from 'axios'
export default {
  name: 'JzrxxXinxi',
    data(){
      return {
          name:'',
          tel:'',
          birth:'',
          age:'',
          sex:0,
          inherit:'',
          details:''
      }
    },
    methods:{
        chooseBirth(){
            let d = new Date(),sNow = Number(d)
            let sChoose = Number(new Date(this.birth))
            if(sChoose-d>0){
                this.$layer.msg('时间选择错误')
                return false;
            }
            this.age = d.getFullYear() - new Date(this.birth).getFullYear()
        },
        chooseSex(e){
            this.sex = e
        },
        addMes(){
            console.log(this.sex,this.sex1)
            var that=this
            axios.post('/Patient/patientAdd',{
                patient_name:this.name,
                patient_telephone:this.tel,
                patient_birth:this.birth,
                patient_age:this.age,
                patient_sex:this.sex,
                patient_history:this.inherit,
                patient_describe:this.details,
                token:this.$storage.session.get('token')
            }).then(res=>{
                if(res.data.status==1){
                    that.$layer.msg(res.data.msg)
                    setTimeout(()=>{
                        that.$router.go(-1)
                    },1500)
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
        // padding:0.3rem
        .group
            width:100%
            padding:0
            background:#fff
            box-sizing:border-box
            margin-bottom:0.25rem
            -moz-box-shadow:2px 2px 7px #eee;
            -webkit-box-shadow:2px 2px 7px #eee;
            box-shadow:2px 5px 7px #eee;
            border-radius:0.1rem
            li:last-child
                border-bottom:none
            li
                height:.65rem
                line-height:.45rem
                overflow:hidden
                display:flex
                border-bottom:5px solid rgb(246,247,250)
                font-size:0.26rem
                color:#4c4c4c
                label
                    width:2rem
                    padding-left 0.15rem
                    line-height .65rem
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
                width:6.4rem
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

        .group{
            width :100%;
            // padding :0.1rem;
            padding-right:0;
            padding-left:0
        }
        .detail{
            width :100%;
            padding:0.1rem;
            // margin-bottom:0.2rem;
            border-bottom:0.4rem;
            padding-left:0;
            padding-right:0
        }
        li{
            border-bottom:5px
        }
        label{
            color:black
        }
        input::-webkit-input-placeholder {
        color: rgb(221,221,221);
        font-weight :bold
        }
        input::-moz-input-placeholder {
        color: rgb(221,221,221);
        }
        input::-ms-input-placeholder {
        color: rgb(221,221,221);
        }
       .label_sex{
           width :20px!important;
           position:absolute;
           right:0;
           top:-5px
       }
       .label_sex1{
           right:100px
       }
       .label_sex2{
           right:30px
       }     input{
           margin-right:5px
       }

       .sex{
           position relative;
           width 10px
       }
       .chose+label{
           width : 8px!important;
           height : 15px!important;
           line-height :18px;
           display : inline-block;
           text-align :left;
           vertical-align :bottom;
           border: 1px solid gray;
           border-radius:50%;

       }
       .chose{
           display :none
       }
       .sex_label{
            position :absolute;
            right:0
       }
       .sex_label1{
           right:2rem
       }
       .sex_label2{
           right:0.75rem
       }
       .sexs{
           display flex;
           align-items center;
           justify-content space-between
       }
       .span1{
           margin-left:175px;
           line-height .65rem
       }
       .span2{
           margin-left:48px;
           line-height .65rem
       }
       .chose+label:hover{
           border: 1px solid #2783FB;
           cursor: pointer;
       }
       .chose:checked+label{
           background :#2783fb;
           border:1px solid #2783fb;
           width :10px
       }
       chose:checked+label:after{
           content:"\2022";
           font-size:30px;
           color: white;
           width:20px
       }
       .family{
           line-height :0.95rem
       }
       .sex_li{
           display flex;
           justify-content space-between
           align-items center
       }
       .sex-right{
           width 25%;
           padding-right .15rem;
           display flex;
           justify-content space-between
           align-items center
       }
       .sex-right>div{
           display flex;
           justify-content space-between
           align-items center
       }
       .big_circle{
           width .3rem;
           height .3rem;
           border:.02rem solid #e0e0e0;
           border-radius 50%;
           display flex;
           align-items center;
           justify-content center
       }

       .small_circle{
           width .15rem;
           height .15rem;
           border-radius 50%;
           background #2d71fb
       }
    .xinxi .group textarea{
        width: 7.2rem;
    }
</style>
