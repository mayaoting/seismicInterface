<template>
    <div class="adminhome">
      <asidemenu></asidemenu>
      <div class="content-box" :class="{'content-collapse':iscollapse}">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import asidemenu from './sysIndex'
  import bus from './bus'
    export default {
        name: "adminHome",
      data(){
          return{
            iscollapse:false,

          }
      },
      components:{
          asidemenu,
      },
      created() {
          bus.$on('iscollapse',msg=>{
            this.iscollapse = msg;
          })
      }
    }
</script>

<style scoped>
.content-box{
  position: absolute;
  top: 0;
  left: 220px;
  right: 0px;
  bottom: 0;
  -webkit-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;
}
  .content-collapse{
    left: 65px;
  }

</style>
