<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
  @import "../static/common/css/main.css";

.el-submenu__title:hover{
  background-color: #207efa !important;
}
</style>
