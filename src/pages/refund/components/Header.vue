<template>
    <div class="yuyue_header">
        <div class="header_left" @click="goback">
            <img src="../../../../static/img/tgicon_back.png" alt="">
        </div>
        <div class="header_center">申请退款</div>
        <div class="header_right">
            <!-- <img src="../../../../static/img/tgicon_search_gray.png" alt=""> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'proDHeader',
        methods:{
            goback(){
                this.goBack()
            }
        }
    }
</script>

<style scoped>
    .yuyue_header {
        height: 0.9rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        background: #fff;
        -webkit-box-shadow: 0 .05rem 1.92rem -.05rem rgba(200,200,200,.14);
        -moz-box-shadow: 0 .05rem 1.92rem -.05rem rgba(200,200,200,.14);
        box-shadow: 0 .05rem 1.92rem -.05rem rgba(200,200,200,.14);
    }

    .yuyue_header .header_left {
        width: 0.9rem;
        text-align: center;
    }

    .yuyue_header .header_left img {
        height: 0.36rem;
    }

    .yuyue_header .header_center {
        flex: 1;
        text-align: center;
        font-size: 0.36rem;
        font-family: pfb;
    }

    .yuyue_header .header_right {
        width: 1rem;
        text-align: center;
    }

    .yuyue_header .header_right img {
        height: 0.45rem;
    }
</style>
