<template>
  <div class="admin-sidemenu">
    <!--<el-scrollbar class="page-component_scroll">-->
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"
             :collapse="iscollapse" background-color="white"
             text-color="black"
             active-text-color="black"
             unique-opened router>
      <template>
        <div v-if="showBig" class="adminbox" >
          <el-dropdown  trigger="click" style="cursor: pointer;text-align: center;height: 40px">
            <span class="block m-t-xs" style="height: 20px">
              <span style="font-size: 14px">你好:</span>
              <strong class="font-bold"> admin</strong>
            </span>
            <span>管理员,部门管理员
              <i class="el-icon-arrow-down el-icon--right" style="margin-left: -5px"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="loginOut">安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-if="showMini" class="mini-adminbox">JL
        </div>
      </template>
      <el-menu-item index="/dashboard" style="text-align: center">
        <span style="">首页</span>
      </el-menu-item>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!--如果没有二级菜单-->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
      <div class="collapseSign">
        <li id="arrow" style="display: flex;justify-content: center;align-items: center;margin-top: 20px;" @click="collapseChanged()">
          <i  :class="{ 'el-icon-d-arrow-left':isLeft, 'el-icon-d-arrow-right':isRight }" style="font-size: 26px;color: #207efa"></i>
        </li>
      </div>
    </el-menu>
    <!--</el-scrollbar>-->

  </div>
</template>

<script>
  import $ from 'jquery'
  import bus from './bus'
    export default {
        name: "sysIndex",
      data(){
          return {
            iscollapse: false,
            isLeft:true,
            isRight:false,
            showBig:true,
            showMini:false,
            username:0,
            roleName:0,
            items: [
              {
                icon: 'el-icon-rank',
                index: '/_eqCatalogue',
                title: '地震目录',
                subs:[{
                  index:'/eqCatalogue',
                  title:'人工录入目录',
                },{
                  index:'/bigScreen',
                  title:'自动拾取',
                },{
                  index:'1-3',
                  title:'应急资料',
                },{
                  index:'1-4',
                  title:'主余震管理',
                }
                  ]
              },
              {
                icon: 'el-icon-tickets',
                index: '2',
                title: '基础信息',
                subs:[{
                  index:'/eqCatalogue',
                  title:'人工录入目录',
                  subs:[{
                    index:'2-1-1',
                    title:'人工测试',
                  },
                  {
                    index:'2-1-2',
                    title:'录入测试',
                  },
                    {
                      index:'2-1-3',
                      title:'录入测试',
                    },
                    {
                      index:'2-1-4',
                      title:'录入测试',
                    },
                  ]
                },{
                  index:'2-2',
                  title:'自动拾取',
                },{
                  index:'2-3',
                  title:'应急资料',
                },{
                  index:'2-4',
                  title:'主余震管理',
                }
                ]
              },
              {
                icon: 'el-icon-time',
                index: '3',
                title: '数据管理',
                subs:[{
                  index:'/eqCatalogue',
                  title:'人工录入目录',
                },{
                  index:'3-2',
                  title:'自动拾取',
                },{
                  index:'3-3',
                  title:'应急资料',
                },{
                  index:'3-4',
                  title:'主余震管理',
                }
                ]

              },
              {
                icon: 'el-icon-info',
                index: '4',
                title: '应急管理',
                subs:[{
                  index:'/eqCatalogue',
                  title:'人工录入目录',
                },{
                  index:'4-2',
                  title:'自动拾取',
                },{
                  index:'4-3',
                  title:'应急资料',
                },{
                  index:'4-4',
                  title:'主余震管理',
                }
                ]
              },
              {
                icon: 'el-icon-news',
                index: '5',
                title: '数据服务',
              },
              {
                icon: 'el-icon-time',
                index: '6',
                title: '系统设置',
                subs:[{
                  index:'/eqCatalogue',
                  title:'人工录入目录',
                },{
                  index:'6-2',
                  title:'自动拾取',
                },{
                  index:'6-3',
                  title:'应急资料',
                },{
                  index:'6-4',
                  title:'主余震管理',
                }
                ]
              },
            ]
          }
      },
      methods:{

        //  侧边导航栏的展开与收缩
        collapseChanged(){
          this.iscollapse = !this.iscollapse;
          bus.$emit('iscollapse',this.iscollapse);
          if(this.iscollapse){
            //show Right
            this.isLeft = false;
            this.isRight = true;
            this.showBig = false;
            this.showMini = true;
          }else{
            //show Left
            this.isLeft=true;
            this.isRight=false;
            this.showBig = true;
            this.showMini = false;
          }
        },

        // getData(){
        //   this.$axios.post('/index/getDeviceCount')
        //     .then((response)=>{
        //       console.log(response.data);
        //     })
        //     .catch((response)=>{
        //       console.log(error);
        //     })
        // }
        loginOut(){
          this.$router.push('/');
        }
      },
      computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
          }
      },
      created() {
          bus.$on('iscollapse',msg =>{
            this.iscollapse = msg;
          })
      }

    }
</script>

<style scoped>
  .page-component_scroll{
    height: 100%;
    width: 220px;
  }
  .admin-sidemenu{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom:0;
  }
  .collapseSign{
    position: absolute;
    bottom: 0px;
    height: 60px;
    width: 100%;
    border-top: 1px solid #e6e6e6;
    /*background-color: #0b65d6;*/

  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
  }
  .el-menu-vertical-demo > li > i{
    color: #207efa;
  }
  .el-submenu__title > i{
    color: #207efa;
  }
  .adminbox{
    height: 109px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #e6e6e6;
  }
  .mini-adminbox{
    height: 90px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: #207efa;
    padding: 35px 0;
  }
  .ul-wrapper:hover{
    background-color: white;
  }
  .admin-sidemenu > ul{
    height: 100%;
  }
  .admin-sidemenu > ul > li{
    /*height: 80px;*/
    border-radius: 2px;
    border-bottom: 2px solid #e6e6e6;
    font-size: 15px;
    text-align: center;
  }
  .el-menu-item:hover{
    background-color: #207efa !important;
  }
  .el-submenu__title:hover{
    background-color: #207efa !important;
  }

  .el-menu-item{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*.el-menu-item > span{*/

  /*}*/
</style>
