<template>
	<div class="home_view03">
		<router-link to="/medicalres">
            <img :src="partner.banner_pic" alt="">
            <div class="text_content">
                <h2>{{partner.banner_name}}</h2>
                <p>{{partner.banner_describe}}</p>
                <button>查看更多</button>
            </div>
        </router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeMedicalres',
    props:{
      partner:Object
    }
}
</script>

<style lang="stylus" scoped>
	.home_view03
		padding: 0.2rem 0.3rem 0;
		a
			display: block;
			position: relative;
			img
				width: 100%;
				border-radius: 0.166rem;
			.text_content
				position: absolute;
				left: 0.2rem;
				top:0.1rem
				h2
					font-size: 0.3rem;
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
					margin-top: 0.9rem;
</style>
<style>
    .home_view03 a .text_content h2{
        font-family: pfb;
    }
    .home_view03 a .text_content p{
        font-family: pfm;
    }
    .home_view03 a .text_content button{
        font-family: pf;
    }
</style>
