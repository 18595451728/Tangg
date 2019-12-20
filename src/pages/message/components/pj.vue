<template>
    <div class="pj">
        <div class="collect" v-for="item in 3">
            <div class="c_top">唐冠商城今日上新产品</div>
            <div class="c_center">复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥阴凉干燥处密封储复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥阴凉干燥处密封储...</div>
            <div class="c_bottom"><span>13:43</span><span>2019-11-13</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pj",
        data() {
            return {
                star: 4,
                pro_num:1
            }
        },
        methods: {
            stars(e) {
                this.star = e + 1
            },
            defaultNum(){
                if(!this.pro_num)this.pro_num = 1
            },
            edit(){
                this.$router.push('/Editaddress')
            }
        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.7rem;
        margin: .3rem auto;
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -moz-box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        box-shadow: 0 0 .18rem rgba(153, 153, 153, .15);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .c_top{
        font-family: pfb;
        font-size: .3rem;
        color: #333;
        margin-bottom: .2rem;
    }
    .c_center{
        font-family: pfm;
        font-size: .24rem;
        color: #666666;
        margin-bottom: .3rem;
        line-height: .35rem;
    }
    .c_bottom{
        display: flex;
        align-items: center;

    }
    .c_bottom span{
        font-family: pfm;
        font-size: .24rem;
        color: #999999;
    }
    .c_bottom span:first-child{
        margin-right: .25rem;
    }
</style>
