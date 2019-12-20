<template>
	<div>
		<home-header></home-header>
		<home-highservice :highinfo="highService"></home-highservice>
		<home-generalphy :list="medicallist"></home-generalphy>
		<home-medicalres :partner="partner"></home-medicalres>
		<home-productrec></home-productrec>
		<Footer></Footer>
	</div>
</template>
<script>
import global from '../../components/Global'
import HomeHeader from './components/Header'
import HomeHighservice from './components/Highservice'
import HomeGeneralphy from './components/Generalphy'
import HomeMedicalres from './components/Medicalres'
import HomeProductrec from './components/Productrec'
import Footer from '@/components/Footer'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeHighservice,
    HomeGeneralphy,
    HomeMedicalres,
    HomeProductrec,
    Footer
  },
  data () {
    return {
      token: global.token,
      highService: {},
      medicallist: [],
		partner:{}
    }
  },
  mounted() {
      this.getHomeInfo()
	  // this.$storage.session.set('token',"ece737f822f74b3466c5f2177814ea0a")
  },
  methods: {
      getHomeInfo() {
          console.log(this.token)
          axios.post("/Index/homePage",{token: this.token})
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
          console.log(res)
          console.log(res.data.data)
          this.highService = res.data.data.appointment_cate
          this.medicallist = res.data.data.appointment.list
          this.partner = res.data.data.medical

      }

  }


}
</script>

<style scoped>

</style>
