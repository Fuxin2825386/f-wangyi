// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();



import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import "./mock/mokServer"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: `<App/>`,
  router,
  store
})
