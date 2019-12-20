<template>
	<div class="yuyue_list">
		<ul>
			<li v-for="item in list">
                <a @click="godetail(item.id)">
                    <div class="p_left">
                        <img src="../../../../static/img/tg_yuyuelist01.jpg" alt="">
                    </div>
                    <div class="p_right">
                        <h3>
                            <span> {{item.name}} | </span>
                            {{item.label}}
                        </h3>
                        <p>{{item.introduction}}</p>
                    </div>
                </a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'Resource',
    props:{
      list:Array
    },
    methods:{
      godetail(e){
          console.log(e)
          this.$router.push({
              path:'/medicalxq',
              query:{
                  id:e
              }
          })
      }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .yuyue_list
        padding:0.25rem 0.3rem
        margin-bottom:1.2rem
        ul li
            overflow: hidden;
            background: #fff;
            margin-bottom: 0.3rem;
            padding:0.27rem 0.25rem 0.3rem;
            background:#fff
            -moz-box-shadow:2px 2px 7px #ccc;
            -webkit-box-shadow:2px 2px 7px #ccc;
            box-shadow:2px 5px 7px #ccc;
            border-radius:0.24rem
            div
                float: left;
            .p_left
                background: #eee;
                text-align: center;
                vertical-align: middle;
                width: 1.75rem;
                height: 1.75rem;
                margin-right: 0.3rem;
                -moz-box-shadow:2px 2px 7px #EEEEEE;
                -webkit-box-shadow:2px 2px 7px #EEEEEE;
                box-shadow:2px 2px 7px #EEEEEE;
                border-radius:0.16rem
                img
                    max-height: 100%;
			.p_right
                float: right;
                width: 4.1rem;
                overflow: hidden;
                h3
                    font-size:.24rem
                    color:#666666
                    height:.8rem
                    line-height:.8rem
                    ellipsis()
                    span
                        font-size:0.28rem
                        color:#333
                p
                    font-size: 0.22rem;
                    line-height: 0.4rem;
                    color:#666
                    ellipsis2()
</style>
