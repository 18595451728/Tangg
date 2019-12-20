<template>
    <div>
        <medicalres-header></medicalres-header>
        <ul class="tabs">
            <li :class="{active:tab==0}" @click="changeTab(0)">
                <router-link to=""><span>合作医生</span></router-link>
            </li>
            <li :class="{active:tab==1}" @click="changeTab(1)">
                <router-link to=""><span>合作医院</span></router-link>
            </li>
        </ul>
        <resource :list="doctorList"></resource>
    </div>
</template>

<script>
import MedicalresHeader from './components/Header'
import Resource from './components/Resource'
import axios from 'axios'
export default {
  name: 'Medicalres',
  components: {
    MedicalresHeader,
    Resource
  },
    data(){
      return{
          tab:0,
          doctorList:[]
      }
    },
    mounted(){
this.initDoctor()

    },
    methods:{
        changeTab(e){
            this.tab = e
            if(e==0){
                this.initDoctor()
            }else{
                this.initHos()
            }
        },
        initDoctor(){
            var that =this
            axios.post('/Medical/doctorList',{}).then(res=>{
                console.log(res)
                if(res.data.status==1){
                    that.doctorList = res.data.data.doctorList
                    console.log(that.doctorList)
                }else{
                    that.$layer.msg(res.data.msg)
                }
            })
        },
        initHos(){
            var that =this
            axios.post('/Medical/hospitalList',{}).then(res=>{
                console.log(res)
                if(res.data.status==1){
                    that.doctorList = res.data.data.hospitalList
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
    .tabs li.active span{
        border-bottom:2px solid $baseColor
    }
    .tabs
        height:.8rem
        line-height:.8rem
        overflow:hidden
        padding:0 0.75rem
        background:#f6f6f6
        li
            float:left
            width:3rem
            text-align:center
            span
                display:inline-block
                font-size:.3rem
                line-height 0.7rem
                box-sizing border-box
</style>
