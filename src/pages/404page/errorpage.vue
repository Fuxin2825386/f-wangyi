<template>

  <div>
    你的页面已报错<br/>
    <button @click="tz">
      跳回首页
    </button>
  </div>


</template>

<script>
    export default {
        name: "404page",
      methods:{
          tz(){
            this.$router.replace("/shouye")
          }
      }
    }
</script>

<style scoped>

</style>
