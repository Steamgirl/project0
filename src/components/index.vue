<template>
  <div class="box">
    <!-- 导航条部分 -->
    <Nav></Nav>

    <!-- 侧边栏 -->
    <div class="sidebar-box">
      <div>
        <p class="sidebaer-div-1"></p>
        <p>在线咨询</p>
      </div>
      <div>
        <p class="sidebaer-div-1"></p>

        <p>微信客服</p>
      </div>
      <div>
        <p class="sidebaer-div-1"></p>

        <p>热线电话</p>
      </div>
      <div>
        <p class="sidebaer-div-1"></p>

        <p>免费预约</p>
      </div>
      <div>
        <p class="sidebaer-div-1"></p>

        <p>回到顶部</p>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="slideshow">
      <!-- 轮播图文字 -->
      <el-carousel class="slideshow-box" :interval="1000" arrow="always">
        <el-carousel-item class="slideshow-item">
          <!-- 轮播图图片 -->
          <div class="shideshow-font">
            <div class="jhs-xy">
              <div class="xy-1">
                <span class="y-span1">Since</span>
                <br />
                <span>2020</span>
              </div>
              <div class="xy-2">商业计划服务书</div>
            </div>
            <div class="y-font2">Pioneer in Business</div>
            <div class="y-font3">助推中小企业发展，为中小企业赋能</div>
            <div class="y-font4">
              <p>关于我们</p>
              <p>了解更多</p>
            </div>
          </div>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592016269201&di=b630b2ccba81dac2b1f6d9a9c5d762dc&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F56f4f407ccd8e.jpg"
            alt
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592016356615&di=b2afbff65cb7a333f0b4e133f2864aa1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F58b4dd930bd43.jpg"
            alt
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592016269227&di=3b2d6a677b76cd7265774eea9b98105b&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-11-14%2F5bebe02b0d289.jpg"
            alt
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 在线客服部分 -->
    <div class="conter-sliver">
      <div class="conter-sliver-jz">
        <div class="conter-sliver-list">
          <div class="conter-box" v-for="item in 4" :key="item">
            <div class="conter-fangkuai">
              <div></div>
            </div>
            <div class="conter-font">
              <div class="conter-font-1">
                <span>在线客服</span>
              </div>
              <div class="conter-font-2">
                <span>在线咨询</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sYolan-box">
      <!--  -->
      <div class="sYolan-h1">
        商业计划服务书
        <span>Financing Experts</span>
      </div>
      <div class="ol">
        <div class="ol-li-1">商业计划</div>
        <div>融资顾问</div>
        <div>可研报告</div>
      </div>
      <div class="message-box">
        <div class="message-box-list" v-for="use in 4" :key="use">
          <div class="message-box-model">
            <div class="message-box-1">
              <div class="messages-font2">
                <p class="font-q">企业赋能</p>
                <p class="el-icon-loading"></p>
              </div>
              <div class="messages-font3">
                商业计划书
                <span>服务</span>
              </div>
              <div class="messages-font4"></div>
              <ul class="messages-font1">
                <li>撰写商业计划书</li>
                <li>商业模式诊断</li>
                <li>项目估值计算</li>
                <li>财务预测精算</li>
                <li>股权设计咨询</li>
                <li>融资顾问/FA</li>
              </ul>
            </div>
          </div>
          <div class="message-box-2">
            <div class="message-1">商业计划Plus+</div>
            <div class="message-2">详细信息</div>
          </div>
        </div>
      </div>
      <!-- 小圆点事件 -->
      <div class="message-list">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!--  -->
    <div class="model-khz-box">
      <img
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2679911036,3366191397&fm=15&gp=0.jpg"
        alt
      />
      <div class="model-khz">
        <div class="model-v" v-for="model in 4" :key="model">
          <div class="model-2020">2020</div>
          <div class="model-font">
            <p>2020年起</p>
            <p>开始商业计划互联网服务</p>
          </div>
        </div>
      </div>
    </div>
    <h1 class="precistion-font">
      如何实现精准融资
      <span>Precision Financing</span>
    </h1>
    <div class="mode1-equity-box">
      <!-- <img src="http://img0.imgtn.bdimg.com/it/u=1590642684,198826080&fm=26&gp=0.jpg" alt=""> -->
      <div class="model-rz">
        <div class="model-rz-v" v-for="relist in 4" :key="relist">
          <div class="model-model">
            <div class="re-v1">
              <p class="el-icon-star-off"></p>
              <p>商业模式诊断书</p>
            </div>
            <div class="re-v2">
              <p class="re-v-p1"></p>
              <p class="re-v-p2"></p>
            </div>
            <div class="re-v3">
              <span>
                八大方向梳理诊断企业创造、传 递和获取价
                值的核心逻辑和机制方法
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="model-top-font">了解商业计划Plus</div>
    </div>
    <div class="team-box">
      <div class="team-h1">
        优秀项目经理团队
        <span>Outstanding Team</span>
      </div>
      <div class="team-slideshow">
        <!-- Swiper轮播图 -->
        <div class="team-box" v-for="teamlist in 4" :key="teamlist">
          <div class="team-1">
            <img
              src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=443801258,2722780474&fm=111&gp=0.jpg"
              alt
            />
          </div>
          <div class="team-2">哈拉雷</div>
          <div class="team-3">
            帘幕风轻双语燕。午後醒来，柳絮飞撩乱。心事一春犹未见。红英落尽青苔院。
            百尺朱楼闲倚
          </div>
        </div>
      </div>
      <!-- 小圆点 -->
      <div class="team-ison">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="team-ison-show">认识更多的优秀经理</div>
    </div>
    <h1 class="shortly-h1">
      行业研究
      <sapn>ndustry Resear</sapn>
    </h1>
    <div class="shortly-1130">
      <div class="shortly-box"></div>
      <div class="shortly-font">
        <p class="shortly-p1">大健康</p>
        <p class="shortly-p2">21世纪将是一个大健康产业获得极大发展的时代。为人们提供健康生活方案，这个是大健康产业最大的商机</p>
      </div>
    </div>
    <div class="shorty-xyd">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="shorty-top">查看更多行业</div>
    <div class="special-box">
      <h1 class="special-h1">合作机构 PARTNERS</h1>
      <!-- 点击事件 -->
      <div class="special-list">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- 小长方形 -->
      <div class="special-cfx">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>

    <div class="food-model">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2460392192,737177679&fm=26&gp=0.jpg"
        alt
      />
      <div class="food-font">
        选择企业赋能在线
        <span>Our Advantages</span>
      </div>
      <div class="food-list">
        <div class="food-p" v-for="foodlist in 4" :key="foodlist">
          <p class="food-p-1">专业 技术领先，数据充分</p>
          <div class="food-p-2">
            <span>持续的IT技术开发投入和科学的项目管理能克服项目完成委托</span>
          </div>
        </div>
      </div>
      <div class="food-xkgd">查看更多</div>
    </div>
    <!--  // 底部部分样式-->
    <food></food>
  </div>
</template>
 
<script>
import Swiper from "swiper";
import Nav from "../commen/nav.vue";
import food from "../commen/food.vue";

export default {
  components: {
    Nav,
    food
  }

  // data() {
  //   return {};
  // },
  // mounted() {
  //   //页面一加载就出现轮播
  // },
  // methods: {
  //   getSwiper() {
  //     var Swiper = new Swiper(".swiper-container", {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true
  //       }
  //     });
  //  }
  // }
};
</script>
<style lang="stylus">
@import '../stylus/nav.styl';
</style>