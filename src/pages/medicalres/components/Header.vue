<template>
	<div class="yuyue_header">
		<div class="header_left" @click="goback">
			<img src="../../../../static/img/tgicon_back.png" alt="">
		</div>
		<div class="header_center">
			医疗资源
		</div>
		<div class="header_right">
			<img src="../../../../static/img/tgicon_search_gray.png" alt="">
		</div>
	</div>
</template>
<script>
export default {
  name: 'MedicalresHeader',
    methods:{
        goback(){
            this.goBack()
        }
    }
}
</script>

<style lang="stylus" scoped>
	.yuyue_header
		height: 0.9rem;
		overflow: hidden;
		display: flex;
		align-items: center;
		background: #fff;
		.header_left
			width: 0.9rem;
			text-align: center;
			img
				height: 0.36rem;
		.header_center
			flex:1
			text-align:center
			font-size:0.36rem
			font-family:"microsoft yahei"
		.header_right
			width: 1rem;
			text-align: center;
			img
				height: 0.45rem;
</style>
