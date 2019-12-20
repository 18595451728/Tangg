<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // token:'ae4256621198039a911977f4a54898ed'
    }
  }
}
</script>

<style>
  #app{
    padding-bottom: 1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'pf';
    src: url("/static/Fonts/PingFang Regular.otf");
  }
  @font-face {
    font-family: 'pfb';
    src: url("/static/Fonts/PingFang Bold.ttf");
  }
  @font-face {
    font-family: 'pfm';
    src: url("/static/Fonts/PingFang Medium.otf");
  }
</style>
