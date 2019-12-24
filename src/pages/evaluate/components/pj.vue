<template>
    <div class="pj">
        <div v-for="item,index in list">
            <div class="j_top">
                <div class="t_mes">
                    <img :src="item.goods_pic" alt="">
                    <div class="t_art">
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_describe}}</p>
                    </div>
                </div>
                <div class="alle">
                    <p>整体评论</p>
                    <div>
                        <img :src="index1<item.stars?'/static/img/redstar.png':'/static/img/greystar.png'" alt=""
                             v-for="items,index1 in 5" @click="stars(index,index1)">
                        <p>{{item.stars==1?'不太好':item.stars==2?'一般':item.stars==3?'好':item.stars==4?'很好':item.stars==5?'非常好':''}}</p>
                    </div>
                </div>
            </div>
            <div class="j_bottom">
                <textarea placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧" onresize="false" v-model="item.content"></textarea>
                <div class="chooseImg">
                    <img src="/static/img/chooseImg.png" alt="">
                    <input type="file" style="opacity: 0;" @change="chooseImg($event,index)">
                </div>
                <div class="pics">
                    <img v-for="items in item.imgs" :src="items" alt="">
                </div>
                <div class="niming" @click="changeNm(index)">
                    <p><img :src="item.nm?'/static/img/selected.png':'/static/img/select.png'" alt=""><span>匿名</span></p>
                    <p>你写的评论会以匿名的形式展现</p>
                </div>
            </div>
        </div>
        <div class="sure" @click="confirm">确认发表</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import global from "../../../components/Global"
    export default {
        name: "pj",
        props:['list'],
        data() {
            return {
                pics:[],
                imgs:[],
                token:global.token
            }
        },
        methods: {
            confirm(){
                let arr = [],that=this
                for(let i in this.list){
                    let newJson = {}
                    newJson.content=this.list[i].content
                    newJson.slide_img=this.list[i].pics.join(',')
                    newJson.is_name=this.list[i].nm?1:0
                    newJson.desc_star=this.list[i].stars
                    arr.push(newJson)
                }
                console.log(arr)
                axios.post('/Order/commentOrder',{
                    token:this.token,
                    order_no:this.$route.query.order_no,
                    data:arr
                }).then(res=>{
                    console.log(res)
                    that.$layer.msg(res.data.msg)
                    if(res.data.status==1){
                       setTimeout(function () {
                           that.$router.push('/Order')
                       },1500)
                    }
                })
            },
            stars(i,n) {
                this.$emit('changestar',{index:i,stars:n})
            },
            changeNm(index){
                this.$emit('changeNm',{
                    index:index,
                    nm:!this.list[index].nm
                })
            },
            chooseImg(e,index){
                if(this.list[index].pics.length>=3){
                    this.$layer.msg('最多上传三张图片')
                    return false;
                }

                let img1 = e.target.files[0];
                let that = this
                console.log(img1)
                let reader = new FileReader()
                reader.readAsDataURL(img1)
                reader.onload=function (e) {
                    // console.log(this.result)
                    var baseResult = this.result
                    axios.post('/Index/uploadImg',{
                        token: that.token,
                        img_str:baseResult
                    }).then(res=>{
                        console.log(res,111)
                        if(res.data.status==1){
                            console.log(res.data.data.pic)
                            // that.pics.push(res.data.data.pic)
                            // that.imgs.push(baseResult)
                            that.$emit('uploadImgs',{chuan:res.data.data.pic,xian:baseResult,index:index})
                        }else{
                            that.$layer.msg(res.data.msg)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .pj > div {
        width: 6.9rem;
        margin: .25rem auto;
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

    .t_mes {
        padding: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        /*margin-bottom: .3rem;*/
    }

    .t_mes img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .2rem;
    }

    .t_art p:first-child {
        font-size: .28rem;
        color: #333333;
        font-family: pfb;
        margin: .2rem 0;
    }

    .t_art p:last-child {
        font-size: .24rem;
        color: #999999;
        font-family: pf;
    }

    .alle {
        display: flex;
        align-items: center;
        width: 6.1rem;
        margin: 0 auto;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-top: .01rem solid #e5e5e5;
    }

    .alle > p {
        font-size: .24rem;
        color: #373737;
        font-family: pf;
    }

    .alle > div {
        display: flex;
        align-items: center;
        margin-left: .85rem;
    }

    .alle > div img {
        width: .38rem;
        margin-right: .2rem;
    }

    .alle > div p {
        font-family: pf;
        font-size: .26rem;
        color: #9d9d9d;
    }

    .j_bottom {
        padding: 0 .38rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .j_bottom textarea{
        width: 100%;
        height: 1.9rem;
        padding-top: .3rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: pf;
        font-size: .24rem;
        background: none;
    }
    .chooseImg{
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        margin-bottom: .3rem;
    }
    .chooseImg img{
        width: 100%;
    }
    .chooseImg input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .niming{
        border-top: .02rem solid #e5e5e5;
        padding: .3rem 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .niming>p:first-child{
        display: flex;
        align-items: center;
        font-size: .26rem;
        color: #373737;
        font-family: pf;
    }
    .niming>p:first-child img{
        width: .31rem;
        margin-right: .2rem;
    }
    .niming>p:last-child{
        font-size: .24rem;
        color: #9f9f9f;
        font-family: pf;
    }
    .pj>div.sure{
        width: 6.7rem;
        line-height: .7rem;
        text-align: center;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        color: white;
        font-family: pfb;
        font-size: .3rem;
        background: #af1c3b;
        position: fixed;
        left: .4rem;
        bottom: .4rem;
        margin: 0;
    }
    .pics{
        display: flex;
        align-items: center;
        margin-bottom: .3rem;
    }
    .pics img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .3rem;
    }
    textarea::-webkit-input-placeholder {
        font-size: .24rem;
        color: #c2c2c2;
        font-family: pf;
    }

    textarea:-moz-placeholder {
        font-size: .24rem;
        color: #c2c2c2;
        font-family: pf;
    }

    textarea::-moz-placeholder {
        font-size: .24rem;
        color: #c2c2c2;
        font-family: pf;
    }

    textarea:-ms-input-placeholder {
        font-size: .24rem;
        color: #c2c2c2;
        font-family: pf;
    }
</style>
