<template>
    <div>
        <zfsucc-header></zfsucc-header>
        <zfsucc-succ></zfsucc-succ>
    </div>
</template>

<script>
import ZfsuccHeader from './components/Header'
import ZfsuccSucc from './components/Succ'
export default {
  name: 'Zfsucc',
  components: {
    ZfsuccHeader,
    ZfsuccSucc
  }
}
</script>

<style>
</style>
