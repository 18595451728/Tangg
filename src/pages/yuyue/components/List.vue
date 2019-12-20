<template>
	<div class="yuyue_list">
		<ul>
			<li v-for="item in list">
                <div @click="goDetail(item.appointment_id)">
                    <div class="p_left">
                        <img :src="item.appointment_pic" alt="">
                    </div>
                    <div class="p_right">
                        <h3>{{item.appointment_name}}</h3>
                        <p>{{item.appointment_describe}}</p>
                        <div>时间：{{item.start_time.tt}}——{{item.end_time.tt}}</div>
                    </div>
                </div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'YuyueList',
    props:{
      list:Array
    },
    methods:{
      goDetail(e){
          this.$router.push({
              path:'/yuyue/detail',
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
		padding:0.2rem 0.3rem
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
				width: 2rem;
				height: 2rem;
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
					font-size: 0.28rem;
					line-height:0.42rem
					margin-bottom:0.05rem
					ellipsis2()
				p
					font-size: 0.22rem;
					line-height: 0.33rem;
					color:#666
					ellipsis2()
				div
					width:100%;
					font-size:0.24rem
					height: 0.6rem;
					line-height: 0.6rem;
					color:#4c4c4c
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
