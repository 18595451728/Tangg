<template>
    <div class="pj">
        <div class="j_title">健康币明细</div>
        <div class="j_list">
            <div class="j_each" v-for="item,index in 15">
                <div class="j_left">
                    <p class="sign">充值</p>
                    <p class="dates">12月11日 8:51</p>
                </div>
                <div class="j_right" :class="{active:index==1}">+200</div>
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
    .pj{
        width: 6.9rem;
        margin: 0 auto;
    }
    .pj > div.j_list {
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        padding: 0 .3rem;
    }
.j_title{
    line-height: .83rem;
    font-family: pfb;
    color: #010101;
    font-size: .28rem;
}
.j_each{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .3rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: .01rem solid #eeeeee;
}
.j_each:last-child{
    border-bottom: none;
}
    .sign{
        font-size: .24rem;
        font-family: pfm;
        color: #333;
        margin-bottom: .1rem;
        width: 3.9rem;
        white-space: nowrap;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .dates{
        font-family: pfm;
        color: #999999;
        font-size: .2rem;
    }
    .j_right{
        font-family: pfb;
        font-size: .3rem;
        color: #000000;
    }
    .j_right.active{
        color: #f0b308;
    }
</style>
