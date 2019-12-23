<template>
	<div class="footer">
		<ul>
			<li
            v-for="(item, index) in nav"
            :class="navIndex===index ? 'active' : ''"
            :key="index">
				<router-link :to="item.path">
                    <i></i>
                    <p>{{item.title}}</p>
                </router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
      return {
          nav: [
              {title: '首页',path: '/'},
              {title: '商城',path: '/allproduct'},
              {title: '预约',path: '/yuyue'},
              {title: '购物车',path: '/Shopcart'},
              {title: '我的',path: '/Mine'},
          ],
          navIndex: 0
      }
  },
  methods: {

      checkRouterLocal(path) {
        // 查找当前路由下标高亮
        this.navIndex = this.nav.findIndex(item => item.path === path);
      }
  },
  watch: {
    "$route"() {
      // 获取当前路径
      let path = this.$route.path;
      // 检索当前路径
      this.checkRouterLocal(path);
    }
  }

}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .footer ul li.active a p{
       color:$baseColor
    }
    .footer ul li:nth-child(1) i{
        background:url(./../assets/img/tgfooter_home01.png) no-repeat;
        background-size: auto 0.4rem;
    }
    .footer ul .active:nth-child(1) i{
        background:url(./../assets/img/tgfooter_home02.png) no-repeat;
        background-size: auto 0.4rem;
    }
    .footer ul li:nth-child(2) i{
        background:url(./../assets/img/tgfooter_mall01.png) no-repeat;
        background-size: auto 0.4rem
    }
    // .footer ul .active:nth-child(2) i{
    //     background:url(./../assets/img/tgfooter_mall02.png) no-repeat;
    //     background-size: auto 0.4rem
    // }
    .footer ul li:nth-child(3) a{
        width:0.7rem
        height:0.7rem
        border-radius:0.4rem
        background:$baseColor
        margin:0.05rem auto
        -moz-box-shadow:0px 0px 4px $baseColor;
        -webkit-box-shadow:0px 0px 4px $baseColor;
        box-shadow:0px 0px 4px $baseColor;
    }
    .footer ul li:nth-child(3) a p{
        color:#fff
    }
    .footer ul li:nth-child(3) i{
        position:relative
        top:0.1rem
        width:0.2rem
        height:0.25rem
        background:url(./../assets/img/tgfooter_plus.png) no-repeat;
        background-size: auto 0.2rem
    }
    .footer ul li:nth-child(4) i{
        background:url(./../assets/img/tgfooter_cart01.png) no-repeat;
        background-size: auto 0.4rem
    }
    // .footer ul .active:nth-child(4) i{
    //     background:url(./../assets/img/tgfooter_cart02.png) no-repeat;
    //     background-size: auto 0.4rem
    // }
    .footer ul li:nth-child(5) i{
        background:url(./../assets/img/tgfooter_my01.png) no-repeat;
        background-size: auto 0.4rem
    }
    .footer ul .active:nth-child(5) i{
        background:url(./../assets/img/tgfooter_my02.png) no-repeat;
        background-size: auto 0.4rem
    }
	.footer
        position:fixed
        bottom:0
        left:0
        z-index:11
        width: 100%
        height:0.8rem
        padding:0.1rem 0
        background:#eee
		ul
			overflow:hidden
			li
				float:left
				width:20%
				a
					display:block
					text-align:center
					i
						display:block
						width:0.4rem
						height:0.4rem
						margin:0 auto
					p
						height:0.3rem
						line-height:0.3rem
						margin-top 0.1rem
						font-size:0.24rem
						color:#333
						font-family:pfm
						text-align:center
</style>
