<template>
  <div>
    <div class="row header-top">
      <div class="col-md-10 header-row-left">
        <div class="header-row-he"></div>
        <div class="header-row-font">TEL:</div>
      </div>
      <div class="col-md-2 header-row-right">
        <div>
          <router-link to="/login">登录</router-link>
        </div>
        <div>
          <router-link to="/reginster">注册</router-link>
        </div>
        <div>
          <router-link to="#">投融直通车</router-link>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="row header-bottom-right">
        <div class="col-md-6 header-top-list">
          <div></div>
        </div>
        <div class="col-md-6 header-bottom-list">
          <div class="header-a">
            <router-link to="/index" active-class="celect">首页</router-link>
          </div>
          <div class="header-a">
            <router-link to="/Services">
              <el-dropdown>
                <span class="el-dropdown-link">
                  服务项目
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </router-link>
          </div>
          <div class="header-a">
            <router-link to="/">BP TOOLS</router-link>
          </div>
          <div class="header-a">
            <router-link to="/">行业研究</router-link>
          </div>
          <div class="header-a">
            <a href="#">观点资讯</a>
          </div>
          <div class="header-a">
            <el-dropdown>
              <span class="el-dropdown-link">
                关于我们
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="header-a">
            <a href="#">联系我们</a>
          </div>
          <div class="header-a">
            <a href="#">合伙人计划</a>
          </div>
        </div>
      </div>
      <div class="header-bottom-left">
        <div class="bootom-left-he"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
@import '../stylus/index.styl';
</style>