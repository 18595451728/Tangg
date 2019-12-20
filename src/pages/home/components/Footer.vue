<template>
	<div class="home_footer">
		<ul>
			<li class="active">
				<a href="">
					<i></i>
					<p>首页</p>
				</a>
			</li>
			<li>
				<a href="">
					<i></i>
					<p>商城</p>
				</a>
			</li>
			<li>
				<a href="">
					<i></i>
					<p>预约</p>
				</a>
			</li>
			<li>
				<a href="">
					<i></i>
					<p>购物车</p>
				</a>
			</li>
			<li>
				<a href="">
					<i></i>
					<p>我的</p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .home_footer ul li.active a p{
       color:$baseColor
    }
    .home_footer ul li:nth-child(1) i{
        background:url(../../../../static/img/tgfooter_home.png) no-repeat;
        background-size: auto 0.4rem
    }
    .home_footer ul li:nth-child(2) i{
        background:url(../../../../static/img/tgfooter_mall01.png) no-repeat;
        background-size: auto 0.4rem
    }
    .home_footer ul li:nth-child(3) a{
        width:0.7rem
        height:0.7rem
        border-radius:0.4rem
        background:$baseColor
        margin:0.05rem auto
        -moz-box-shadow:0px 0px 4px $baseColor;
        -webkit-box-shadow:0px 0px 4px $baseColor;
        box-shadow:0px 0px 4px $baseColor;
    }
    .home_footer ul li:nth-child(3) a p{
        color:#fff
    }
    .home_footer ul li:nth-child(3) i{
        position:relative
        top:0.1rem
        width:0.2rem
        height:0.25rem
        background:url(../../../../static/img/tgfooter_plus.png) no-repeat;
        background-size: auto 0.2rem
    }
    .home_footer ul li:nth-child(4) i{
        background:url(../../../../static/img/tgfooter_cart01.png) no-repeat;
        background-size: auto 0.4rem
    }
    .home_footer ul li:nth-child(5) i{
        background:url(../../../../static/img/tgfooter_my01.png) no-repeat;
        background-size: auto 0.4rem
    }
	.home_footer
		position:fixed
		bottom:0
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
					li:ntn-child(1) a i
						background:url(../../../../static/img/tgfooter_home.png)
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
						text-align:center
</style>
