<template>
    <div>
        <addjzrxx-header></addjzrxx-header>
        <partner-success></partner-success>
    </div>
</template>

<script>
import AddjzrxxHeader from './components/Header'
import partnerSuccess from './components/partner_success'
export default {
  name: 'cityPartnerSuccess',
  components: {
    AddjzrxxHeader,
      partnerSuccess,

    },
    data () {
        return {
            userId:''
        }
    },

    mounted() {
        this.userId = this.$route.query.userId;
    },


}
</script>

<style>
</style>
