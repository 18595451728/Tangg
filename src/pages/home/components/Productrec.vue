<template>
	<div class="homeView04">
		<div class="view_title">
			<i></i>
			商品推荐
		</div>
		<ul>
			<li>
				<div class="p_left">
					<img src="../../../../static/img/tg_goods01.png" alt="">
				</div>
				<div class="p_right">
					<h3>普瑞福鼻腔抗菌液</h3>
					<p>复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥</p>
					<div>
						<span class="p_price">￥2688.00</span>
						<button>立即购买</button>
					</div>
				</div>
			</li>
			<li>
				<div class="p_left">
					<img src="../../../../static/img/tg_goods01.png" alt="">
				</div>
				<div class="p_right">
					<h3>普瑞福鼻腔抗菌液</h3>
					<p>复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥</p>
					<div>
						<span class="p_price">￥2688.00</span>
						<button>立即购买</button>
					</div>
				</div>
			</li>
			<li>
				<div class="p_left">
					<img src="../../../../static/img/tg_goods01.png" alt="">
				</div>
				<div class="p_right">
					<h3>普瑞福鼻腔抗菌液</h3>
					<p>复方薄荷油滴鼻液成人儿童鼻炎抑菌液鼻腔喷剂鼻出血干燥</p>
					<div>
						<span class="p_price">￥2688.00</span>
						<button>立即购买</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeProductrec'
}
</script>

<style lang="stylus" scoped>
	.homeView04
		padding:0 0.3rem
		margin-bottom:1.2rem
		.view_title
			margin-top:0.4rem;
			font-size:0.28rem;
			height: 0.8rem;
			line-height: 0.8rem;
			font-weight: 600;
			color: #000;
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
				p
					font-size: 0.24rem;
					line-height: 0.4rem;
				div
					width:100%;
					height: 0.6rem;
					line-height: 0.6rem;
					margin-top: 0.1rem;
					span
						color: #af1c3b;
						font-size: 0.36rem;
						font-weight: 600;
					button
						float: right;
						font-size: 0.3rem;
						color: #fff;
						width: 2rem;
						height: 0.6rem;
						background: #af1c3b;
						border-radius: 0.1rem;
						font-weight: 600;
</style>
