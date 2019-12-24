<template>
	<div class="homeView04">
		<div class="view_title">
			<i></i>
			商品推荐
		</div>
		<ul>
			<li v-for="item in recommend">
				<div class="p_left">
					<img src="../../../../static/img/tg_goods01.png" alt="">
				</div>
				<div class="p_right">
					<h3>{{item.goods_name}}</h3>
					<p>{{item.goods_describe}}</p>
					<div>
						<span class="p_price">￥{{item.goods_price}}</span>
						<button>立即购买</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeProductrec',
    props:['recommend']
}
</script>
<style lang="stylus" scoped>
	.homeView04
		padding:0 0.3rem
		.view_title
			margin-top:0.25rem;
			font-size:0.3rem;
			height: 0.8rem;
			line-height: 0.8rem;
			font-weight: 600;
			color: #000;
			font-family:pfb;
			i
				position: relative;
				top:3px;
				width:0.05rem;
				height: 0.32rem;
				display: inline-block;
				background: #af1c3b;
		ul li
			overflow: hidden;
			background: #fff;
			margin-bottom: 0.3rem;
			padding: 0.2rem;
			-webkit-box-shadow: .08rem .08rem .27rem rgba(40,40,40,.06);
			-moz-box-shadow: .08rem .08rem .27rem rgba(40,40,40,.06);
			box-shadow: .08rem .08rem .27rem rgba(40,40,40,.06);
			-webkit-border-radius: .1rem;
			-moz-border-radius: .1rem;
			border-radius: .1rem;
			div
				float: left;
			.p_left
				background: #eee;
				text-align: center;
				vertical-align: middle;
				width: 2rem;
				height: 2rem;
				margin-right: 0.2rem;
				img
					max-height: 100%;
			.p_right
				float: right;
				width: 4.3rem;
				overflow: hidden;
				h3
					font-size: 0.28rem;
					font-weight: 600;
					margin-bottom: 0.2rem;
					overflow: hidden;
					white-space:nowrap;
					text-overflow:ellipsis;
					font-family:pfb;
				p
					font-size: 0.24rem;
					line-height: 0.4rem;
					font-family:pfm;
				div
					width:100%;
					height: 0.6rem;
					line-height: 0.6rem;
					margin-top: 0.1rem;
					span
						color: #af1c3b;
						font-size: 0.36rem;
						font-family:pfb;
					button
						float: right;
						font-size: 0.3rem;
						color: #fff;
						width: 2rem;
						height: 0.6rem;
						background: #af1c3b;
						border-radius: 0.1rem;
						font-family:pfb;
</style>
