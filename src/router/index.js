import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import sysIndex from '@/components/sysIndex'


// import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/adminHome',
      redirect:'/dashboard',
      component:resolve => require(['../components/adminHome.vue'],resolve),
      meta:{
        title:'homepage',
      },
      children:[
        {
          path:'/dashboard',
          component:resolve => require(['../components/dashboard.vue'],resolve),
          meta:{
            title:"首页",
          }
        },
        {
          path:'/eqCatalogue',
          component:resolve => require(['../components/eqCatalogue.vue'],resolve),
          meta:{
            title:"地图",
          }
        },
        {
          path:'/bigScreen',
          component:resolve => require(['../components/bigScreen.vue'],resolve),
          meta:{
            title:'大屏',
          }
        }
      ]
    },
    {
      path:'/screen',
      name:'screen',
      component:resolve => require(['../components/screen.vue'],resolve),
    }
  ]
})
