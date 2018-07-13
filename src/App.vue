<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: '常用Vue工具'
      }
    }
  }
</script>
