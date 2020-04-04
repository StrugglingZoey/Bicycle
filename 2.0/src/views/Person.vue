<template>
  <div id="person">
    <Header/>
  	<h2>这里是个人中心</h2>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'Person',
    components: {
    Header
  }
  }
</script>

<style scoped>
</style>