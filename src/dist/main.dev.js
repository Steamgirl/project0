"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

require("swiper/js/swiper.min");

require("swiper/css/swiper.min.css");

require("animate.css");

require("bootstrap/dist/css/bootstrap.min.css");

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入swipe.js文件
//引入swiper.css文件
//引入动画库
_vue["default"].config.productionTip = false; //引入bootstrap

_vue["default"].use(_elementUi["default"]);
/* eslint-disable no-new */


new _vue["default"]({
  el: '#app',
  router: _router["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});