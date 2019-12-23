<template>
    <div class="pj">
        <div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">姓名</p>
                    <p class="h_right">唐冠健康</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">性别</p>
                    <p class="h_right">女</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">出生年月</p>
                    <p class="h_right">1999年1月12日</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">联系地址</p>
                    <p class="h_right">浙江省杭州市西湖区西溪路</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">联系电话</p>
                    <p class="h_right">18744554644</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">临床表现</p>
                    <p class="h_right"></p>
                </div>
                <div class="list_con">
                    临床表现常指医学中患者得了某种疾病后身体发生的一系列异常变化。临床表现常常用着对疾病诊断的重要依据。临床表现常指医学中患者得了某种疾病后身体发生临床表现常指医学中患者得了某种疾病后身体发生的一系列异常变化。临床表现常常用着对疾病诊断的重要依据。临床表现常指医学中患者得了某种疾病后身体发生
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">健康管理周期及效果预期</p>
                    <p class="h_right"></p>
                </div>
                <div class="list_con">
                    临床表现常指医学中患者得了某种疾病后身体发生的一系列异常变化。临床表现常常用着对疾病诊断的重要依据。临床表现常指医学中患者得了某种疾病后身体发生临床表现常指医学中患者得了某种疾病后身体发生的一系列异常变化。临床表现常常用着对疾病诊断的重要依据。临床表现常指医学中患者得了某种疾病后身体发生
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">健康管理方法</p>
                    <p class="h_right">针灸</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">客户注意事项</p>
                    <p class="h_right"></p>
                </div>
                <div class="list_con">
                    临床表现常指医学中患者得了某种疾病后身体发生的一系列异常变化。临床表现常常用着对疾病诊断的重要依
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">单疗程费用</p>
                    <p class="h_right">2000元</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">预计总费用</p>
                    <p class="h_right">2000元</p>
                </div>
            </div>
            <div class="list">
                <div class="list_header">
                    <p class="h_left">备注</p>
                    <p class="h_right"></p>
                </div>
                <div class="list_con">
                    临床表现常指医学中患者得了某种疾病后身体发生的一系列异常变化。临床表现常常用着对疾病诊断的重要依
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.9rem;
        margin: .3rem auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .3rem .01rem;
    }
    .list{
        border-bottom: .01rem solid #eeeeee;
    }
    .list:last-child{
        border-bottom: none;
    }
    .list_header{
        line-height: .82rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: pfm;
        font-size: .24rem;
        color: #666;
    }
    .h_right{
        color: #333;
    }
    .list_con{
        line-height: .36rem;
        font-family: pfm;
        color: #333333;
        font-size: .24rem;
        margin-bottom: .3rem;
        background: #eeeeee;
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
</style>
