<template>
    <div>
        <el-row type="flex" justify="start">
            <el-col :span="4">
                <div class="logo">
                    <img src="../static/images/logo.jpg">
                </div>
            </el-col>
            <el-col :span="12">
    <el-menu
    background-color="#545c64"
        mode="horizontal"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        router>
    <NavMenu :navMenus="menuData"></NavMenu>
      </el-menu>
      <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import NavMenu from './components/NavMenu.vue'
export default {
  components: {
    NavMenu: NavMenu
  },
  data () {
    return {
      activeIndex: 'aa',
      menuData: [
        {
          // 一级
          entity: {
            id: 0,
            name: 'systemManage',
            icon: 'el-icon-picture',
            alias: '图像'
          },
          // 二级
          childs: [
            {
              entity: {
                id: 1,
                name: 'pic1',
                icon: 'el-icon-loading',
                alias: '攻击',
                value: { path: '/hello' }
              }
            },
            {
              entity: {
                id: 2,
                name: 'pic2',
                icon: 'el-icon-bell',
                alias: '防御',
                value: '/system/role'
              }
            },
            {
              entity: {
                id: 3,
                name: 'pic3',
                icon: 'el-icon-edit',
                alias: '擦除',
                value: '/system/menu'
              }
            },
            {
              entity: {
                id: 4,
                name: 'pic4',
                icon: 'el-icon-mobile-phone\r\n',
                alias: '。。。',
                value: '/system/group'
              }
            }
          ]
        },
        {
          // 一级
          entity: {
            id: 5,
            name: 'audio',
            icon: 'el-icon-bell',
            alias: '语音'
          },
          // 二级
          childs: [
            {
              entity: {
                id: 6,
                name: 'aud1',
                icon: 'el-icon-loading',
                alias: '攻击',
                value: { path: '/hello' }
              }
            },
            {
              entity: {
                id: 7,
                name: 'aud2',
                icon: 'el-icon-bell',
                alias: '防御',
                value: '/system/role'
              }
            },
            {
              entity: {
                id: 8,
                name: 'aud3',
                icon: 'el-icon-edit',
                alias: '擦除',
                value: '/system/menu'
              }
            },
            {
              entity: {
                id: 9,
                name: 'aud4',
                icon: 'el-icon-mobile-phone\r\n',
                alias: '。。。',
                value: '/system/group'
              }
            }
          ]
        },
        {
          // 一级
          entity: {
            id: 10,
            name: 'explain',
            icon: 'el-icon-view',
            alias: '可解释性'
          },
          // 二级
          childs: [
            {
              entity: {
                id: 11,
                name: 'ex1',
                icon: 'el-icon-loading',
                alias: '攻击',
                value: { path: '/hello' }
              }
            },
            {
              entity: {
                id: 12,
                name: 'ex2',
                icon: 'el-icon-bell',
                alias: '防御',
                value: '/system/role'
              }
            },
            {
              entity: {
                id: 13,
                name: 'ex3',
                icon: 'el-icon-edit',
                alias: '擦除',
                value: '/system/menu'
              }
            },
            {
              entity: {
                id: 14,
                name: 'ex4',
                icon: 'el-icon-mobile-phone\r\n',
                alias: '。。。',
                value: '/system/group'
              }
            }
          ]
        }
      ]
    }
  }
}
</script>
<style>
.logo img{
      position:absolute;
      float: left;
      width: 200px;
      height: auto;
      z-index:100;
  }
    /* 水平样式 */
 .el-menu--horizontal>div>.el-submenu {
    float: left;
}
/* 一级菜单的样式 */
.el-menu--horizontal>div>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
}
/* 解决下图1 下拉三角图标 */
.el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: -3px;
}
/* 解决下图2 无下拉菜单时 不对齐问题 */
.el-menu--horizontal>div>.el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #909399;
}

</style>
