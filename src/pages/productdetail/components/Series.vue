<template>

    <div class="series">
        <div class="s_top">
            <p class="fp">选择</p>
            <p class="choose">选择 颜色分类</p>
            <img src="/static/img/arrow_right.png" alt="">
        </div>
        <div class="s_bottom">
            <p class="fp" style="opacity: 0;">选择</p>
            <div v-for="item,index in sku_data" class="sku">
                <div > {{item.sku_info}}</div>
            </div>
            <img src="/static/img/arrow_right.png" alt="" style="opacity: 0;">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Series",
        props:{
            sku_data:[{sku_info:''}]
        },
    }
</script>

<style scoped>
    .series {
        width: 6.9rem;
        margin: .3rem auto;
        background: #ffffff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
.s_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    .s_top img {
        width: .18rem;
    }

    .fp {
        font-family: pfb;
        font-size: .24rem;
        color: #999999;
    }
    .choose{
        width: 85%;
        font-size: .24rem;
        color: #333333;
        font-family: pfb;
    }
    .s_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .3rem;
        margin-bottom: .1rem;
    }
    .sku {
        width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sku>div{
        line-height: .5rem;
        background: #ededed;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        font-size: .2rem;
        color: #999999;
        font-family: pf;
        padding: 0 .2rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .sku>div:first-child{
        width: 2.77rem;
    }
    .sku>div:last-child{
        width: 2.5rem;
    }
</style>
