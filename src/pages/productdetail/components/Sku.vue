<template>
    <div class="sku">
        <div class="s_hd">
            <div style="opacity: 0"></div>
            <div :class="{active:tab==0}" @click="Tab(0)">图文详情</div>
            <div :class="{active:tab==1}" @click="Tab(1)">产品属性</div>
            <div style="opacity: 0"></div>
        </div>
        <div class="s_bd">
            <div v-show="tab==0">
                <img src="/static/img/xqt.png" width="100%" alt="">
            </div>
            <div v-show="tab==1">
                <div class="each">
                    <p>产品名称</p>
                    <p>普瑞福连翘抗菌液</p>
                </div>
                <div class="each">
                    <p>主要成分</p>
                    <p>辛夷、白芷、黄柏、艾叶、冰片、黄苓、血竭、连翘、当归、大黄、川芎、苍耳子、没药、鹅不食草、细辛、田七、紫花地丁、茶树精油</p>
                </div>
                <div class="each">
                    <p>杀灭微生物类别</p>
                    <p>本品对金黄色葡萄球菌、白色念珠菌、大肠杆菌具有杀灭作用</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sku",
        data(){
            return{
                tab:0
            }
        },
        mounted() {
        },
        methods:{
            Tab(e){
                this.tab = e
            }
        }
    }
</script>

<style scoped>
    .sku{
        width: 6.9rem;
        margin: .3rem auto;
        background: #ffffff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .s_hd{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #dcdcdc;
        padding: 0 .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

    }
    .s_hd>div{
        line-height: .8rem;
        font-size: .28rem;
        font-family: pfb;
        color: #666666;
        position: relative;
    }
    .s_hd>div::after{
        position: absolute;
        display: block;
        content: "";
        clear: both;
        width: 100%;
        height: .03rem;
        background: #ffffff;
        left: 0;
        bottom: .01rem;
    }
    .s_hd>div.active{
        color: #af1c3b;
    }
    .s_hd>div.active::after{
        background: #af1c3b;
    }

    .s_bd{
        padding: 0 .2rem .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .each{
        line-height: .36rem;
        margin: .15rem 0;
        display: flex;
        align-items: flex-start;
        font-size: .24rem;
        font-family: pfb;
    }
    .each p:first-child{
        width: .98rem;
        margin-right: .3rem;
        color: #666666;
    }
    .each p:last-child{
        width: 5.2rem;
        color: #333;
    }
</style>
