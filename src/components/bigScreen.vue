<template>
    <div>
      <el-button type="success" @click="jumpToScreen" target="_blank">全局概况</el-button>
      <router-link  :to="{path:'/screen'}" target="_blank">全局概况</router-link>
    </div>
</template>

<script>
    export default {
        name: "bigScreen",
        data(){
          return{

          }

        },
      methods:{
        jumpToScreen(){
         let routerData= this.$router.resolve({
           path:'/screen',
           query:''
         });
         window.open(routerData.href,"_blank");
        }
      },
      mounted(){
      },
      created(){

      },

    }
</script>

<style scoped>

</style>
