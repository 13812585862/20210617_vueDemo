import Vue from 'vue'
import Router from 'vue-router'
import MSite from "../pages/MSite/MSite";
import Search from "../pages/Search/Search"
import  Order from  "../pages/Order/Order"
import  Profile from "../pages/Profile/Profile"
import  Login from "../pages/Login/Login"
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
