<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" class="tab-font">首页</el-menu-item>
          <el-menu-item index="2" class="tab-font">实验室</el-menu-item>
          <el-menu-item index="3">标签云</el-menu-item>
          <el-menu-item index="4">博文</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main style="padding:0px">
        <transition name="left">
          <router-view class="Router" />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  watch: {
    $route (to, from) {
      if (to.meta.index < from.meta.index) {
        this.names = "right"
      } else {
        this.names = "left"
      }
    }
  },
  data () {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1':
          this.$router.push({
            name: 'home'
          })
          break;
        case '2':
          this.$router.push({
            name: 'about'
          })
          break;
        case '3':
          this.$router.push({
            name: 'label'
          })
          break;
        case '4':
          this.$router.push({
            name: 'article'
          })
          break;
        default:
          break;
      }
    }
  }
}
</script>
<style lang="less">
.el-header {
  // background-color: #b3c0d1;

  text-align: center;
  line-height: 60px;
}
.el-menu--horizontal > .el-menu-item {
  color: #ef7e31;
}
.el-main {
  height: 100%;
  background-color: #f5f7f8;
  // text-align: center;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: 0.5s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: 0.5s;
}
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0);
}

.left-enter-active {
  transition: 1s;
}
.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%);
}
.right-enter {
  transform: translateX(-100%);
}
.right-enter-active {
  transition: 1s;
}
.right-leave-to {
  transform: translateX(100%);
}
.right-leave-active {
  transition: 1s;
}
</style>

