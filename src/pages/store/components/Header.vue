<template>
	<div class="home_header">
		<div class="header_left" @click="goback">
			<img src="../../../../static/img/tg-logo.png" alt="唐冠">
		</div>
		<div class="header_center">
			<div class="search_box">
				<img src="../../../../static/img/tgicon_search.png" alt="">
				<input type="text" placeholder="请输入搜索信息">
			</div>
		</div>
		<div class="header_right">
			<img src="../../../../static/img/tgicon_msg.png" alt="">
		</div>
	</div>
</template>
<script>
export default {
  name: 'HomeHeader',
    methods:{
        goback(){
            this.goBack()
        }
    }
}
</script>

<style lang="stylus" scoped>
	.home_header
		height: 0.9rem;
		overflow: hidden;
		display: flex;
		align-items: center;
		background: #fff;
		.header_left
			width: 0.9rem;
			text-align: center;
			img
				height: 0.7rem;
		.header_center
			.search_box
				position:relative;
				img
					position: absolute;
					height: 0.3rem;
					top: 0.16rem;
					left: 0.2rem;
			input
				width: 5.6rem;
				height: 0.6rem;
				background: #e5e5e5;
				border:none;
				border-radius: 0.166rem;
				padding-left: 0.7rem;
				box-sizing: border-box;
				font-size: 0.24rem;
				font-family:pfm;

		.header_right
			width: 1rem;
			text-align: center;
			img
				height: 0.45rem;
</style>
