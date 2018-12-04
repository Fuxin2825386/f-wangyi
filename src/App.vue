<template>
<div id="app">
  <router-view></router-view>
  <footGuide></footGuide>
</div>
</template>

<script>
import footGuide from "./components/footGuide/footGuide.vue"
export default {
  name: 'App',
  components:{
    footGuide
  }
}
</script>

<style>
</style>
