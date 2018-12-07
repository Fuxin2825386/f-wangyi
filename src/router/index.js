import Vue from "vue"
import VueRouter from "vue-router"
import shouYe from "../pages/shouYe/shouYe.vue"
import fenLei from "../pages/fenLei/fenLei.vue"
import shiWu from "../pages/shiWu/shiWu.vue"
import gouWuChe from "../pages/gouWuChe/gouWuChe.vue"
import geRen from "../pages/geRen/geRen.vue"
import errorpage from "../pages/404page/errorpage.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/shouye',component:shouYe},
    {path:'/fenlei',component:fenLei},
    {path:'/shiwu',component:shiWu},
    {path:'/gouwuche',component:gouWuChe},
    {path:'/geren',component:geRen},
    {path:'/',redirect:"shouye"},
    {path:"/*", component: errorpage}
  ]
})
