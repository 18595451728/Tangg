<template>
    <div class="patient_list">
        <div class="list" v-for="item in list">
            <div class="l_top">
                <p><img src="../../../../static/img/person.png" alt=""><span>就诊人：{{item.patient_name}}</span></p>
                <p>TEL:{{item.patient_telephone}}</p>
            </div>
            <div class="l_bottom">
                <div>
                    <p>生日：{{item.patient_birth}}</p>
                    <p>年龄：{{item.patient_age}}</p>
                    <p>性别：{{item.patient_sex.tt}}</p>
                </div>
                <div>病情描述：{{item.patient_describe}}</div>
                <div>家族遗传史：{{item.patient_history}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "patient_list",
        props:{
            list:Array
        }
    }
</script>

<style scoped>
    .patient_list{
        padding: 0 .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .list{
        margin-top: .3rem;
        background: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        -moz-box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
        box-shadow: 0 .1rem .13rem rgba(115,115,115,.09);
    }
    .list>div{
        padding: 0 .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .list>div.l_top{
        border-bottom: .01rem solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list>div.l_top p:first-child{
        display: flex;
        align-items: center;
        line-height: .72rem;
    }
    .list>div.l_top img{
        width: .27rem;
        margin-right: .18rem;
    }
    .list>div.l_bottom{
        padding-bottom: .1rem;
    }
    .l_bottom div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .6rem;
    }
    .l_bottom div:first-child{
        line-height: .7rem;
    }
</style>
