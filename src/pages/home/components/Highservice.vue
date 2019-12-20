<template>
	<div class="home_view01">
		<router-link to="/yuyue">
			<img :src="highinfo.appointment_cate_pic" alt="">
			<div class="text_content">
				<h2>{{highinfo.appointment_cate_name}}</h2>
				<p>{{highinfo.appointment_cate_describe}}</p>
				<button>我要预约</button>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeHighservice',
  props: {
      highinfo: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
	.home_view01
		padding: 0.2rem 0.3rem 0;
		a
			display: block;
			position: relative;
			img
				width: 100%;
				height:3.1rem
				border-radius: 0.166rem;
			.text_content
				position: absolute;
				left: 0.2rem;
				top:0.1rem
				h2
					font-size: 0.25rem;
					font-weight: 600;
					line-height: 0.6rem;
				p
					font-size: 0.24rem;
					color: #4d4d4d;
					line-height: 0.4rem;
				button
					font-size: 0.24rem;
					color: #fff;
					height: 0.5rem;
					padding: 0 0.2rem;
					background: #a51a38;
					border-radius: 0.15rem;
					margin-top: 0.6rem;
</style>
