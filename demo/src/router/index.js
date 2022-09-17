import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const Login =()=>import('../views/login')
const pool = ()=>import('../views/pool')
const productList = ()=>import('../views/productList')
const productCategory = ()=>import('../views/productCategory')
const productBrand =()=>import('../views/productBrand')
const productDetail = ()=>import('../views/productDetail')
const addProductDetail = () =>import('../views/addProductDetail')
const orderList = () =>import('../views/orderList')
const orderDetail = ()=>import('../views/orderDetail')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
        children:[
          {
            path:'product',
            name:'product',
            meta:{
              title:'商品管理'
            },
            component:pool,
            children:[
              {
                path:'productList',
                name:'productList',
                meta:{
                  title:'商品列表'
                },
                component:productList
              },
              {
                path:'productCategory',
                name:'productCategory',
                meta:{
                  title:'商品分类'
                },
                component:productCategory
              },
              {
                path:'productBrand',
                name:'productBrand',
                meta:{
                  title:'品牌管理'
                },
                component:productBrand
              },
              {
                path:'productDetail',
                name:'productDetail',
                meta:{
                  title:'商品编辑'
                },
                component:productDetail
              },
              {
                path:'addProductDetail',
                name:'addProductDetail',
                meta:{
                  title:'新增商品'
                },
                component:addProductDetail
              },
            ]
          },
          {
            path:'order',
            name:'order',
            meta:{
              title:'订单管理'
            },
            component:pool,
            children:[
              {
                path:'orderList',
                name:'orderList',
                meta:{
                  title:'订单列表'
                },
             component:orderList
              },
              {
                path:'orderDetail',
                name:'orderDetail',
                meta:{
                  title:'订单详情'
                },
                component:orderDetail
              }
            ]
          }
        ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
    if (!localStorage.getItem('token') && to.path!=='/login') {
        next('/login')
    }else{
      next()
    }
})
export default router
