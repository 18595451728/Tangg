<template>
    <div class="pj">
        <div class="j_list">
            <div class="j_each" v-for="item,index in 15">
                <div class="j_left">
                    <p class="sign">充值</p>
                    <p class="dates">12月11日 8:51</p>
                </div>
                <div class="j_right">+200</div>
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
        padding: 0 .3rem;
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
        font-size: .28rem;
        font-family: pfb;
        color: #000;
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
        font-size: .24rem;
    }
    .j_right{
        font-family: pfm;
        font-size: .36rem;
        color: #af1d3c;
    }

</style>
