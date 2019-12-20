<template>
	<div class="home_footer">
		<ul>
			<li>
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
  name: 'YuyueFooter'
}
</script>

<style lang="stylus" scoped>
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
					p
						height:0.3rem
						line-height:0.3rem
						margin-top 0.1rem
						font-size:0.24rem
						color:#333
						text-align:center
</style>
