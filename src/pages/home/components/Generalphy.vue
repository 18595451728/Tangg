<template>
	<div class="home_view02">
		<ul>
			<li v-for="item of list" :key="item.appointment_id">
				<a @click="godetail(item.appointment_id)">
					<img :src="item.appointment_pic" alt="">
					<div class="text_content">
						<h2>{{item.appointment_name}}</h2>
						<p>{{item.appointment_describe}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeGeneralphy',
  props: {
      list: Array
  },
  data () {
    return {

    }
  },
	methods:{
      godetail(e){
          this.$router.push({
			  path:'/generalxq',
			  query:{
			      id:e
			  }
		  })
	  }
	}
}
</script>

<style lang="stylus" scoped>
	.home_view02
		padding: 0.3rem 0.3rem 0;
		overflow: hidden;
		li:nth-child(2n)
			margin-right: 0;
		ul li
			float: left;
			width:3.3rem;
			margin:0 0.3rem 0.3rem 0;
			a
				display: block;
				width: 3.4rem;
				height: 3.1rem;
				position: relative;
				background: #fff;
				img
					width: 100%;
					height: 100%;
					border-radius: 0.1rem;
				.text_content
					position: absolute;
					top:0.1rem;
					left:0.2rem;
					h2
						font-size: 0.25rem;
						font-weight: 600;
						line-height: 0.5rem;
					p
						font-size: 0.24rem;
						color: #4d4d4d;
						line-height: 0.4rem;
</style>
