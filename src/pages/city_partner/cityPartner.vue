<template>
    <div>
        <addjzrxx-header></addjzrxx-header>
        <city-partner @toPartnerSuccesss="toPartnerSucces($event)"></city-partner>
    </div>
</template>

<script>
import AddjzrxxHeader from './components/Header'
import cityPartner from './components/cityPartner'
export default {
  name: 'Addjzrxx',
  components: {
    AddjzrxxHeader,
      cityPartner
  },
    methods:{
        toPartnerSucces(params){
            this.$router.push('/Editaddress')
            // this.$router.push({ path: "./cityPartnerTeam"});
        }
    }
}
</script>

<style>
</style>
