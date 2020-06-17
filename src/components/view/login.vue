<template>
  <div class="box">
    <Nav></Nav>
    <div class="login-model">
      <img src="https://goss1.cfp.cn/creative/vcg/800/new/VCG211189456992.jpg" alt />
      <div class="login-zx">
        <div class="login-model">
          <div class="tab_title">
            <div class="tab-one">
              <div @click="tab=0" :class="{tab_active:tab==0} " index>
                <p>登录</p>
              </div>
              <div @click="tab=1" :class=" {tab_active:tab==1}  ">
                <span class="div-two-span">注册</span>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="tab_content" v-if="tab==0">
              <div class="tab-div">
                <input type="text" class="div-input" placeholder="用户名或电邮地址" />
              </div>
              <div class="tab-div">
                <input type="text" placeholder="密码" />
              </div>
              <el-radio label="记住我"></el-radio>
            </div>
            <div class="tab_content" v-else-if="tab==1">内容二</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Tab, Tabs } from "vant";

export default {
  components: {
    Nav
  },
  data() {
    return {
      tab: 0 //默认选中第一个tab
    };
  },
  methods: {}
};
import Nav from "../../commen/nav";
</script>
<style lang="stylus">
@import '../../stylus/login.styl';
</style>
