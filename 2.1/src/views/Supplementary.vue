<template>
  <div id="supplementary">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'Supplementary',
    components: {
    Header
  }
  }
</script>

<style scoped>
</style>