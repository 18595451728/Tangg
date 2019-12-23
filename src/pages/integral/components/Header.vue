<template>
    <div class="yuyue_header">
        <div class="header_left" @click="goback">
            <img src="/static/img/back_white.png" alt="">
        </div>
        <div class="header_center">我的积分</div>
        <div class="header_right">
            <!-- <img src="../../../../static/img/tgicon_search_gray.png" alt=""> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GeneralxxHeader',
        methods: {
            goback() {
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
        background: #af1c3b;
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
        color: white;
    }

    .yuyue_header .header_right {
        width: 1rem;
        text-align: center;
    }

    .yuyue_header .header_right img {
        height: 0.45rem;
    }

</style>
