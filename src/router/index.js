import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import CustomerOrder from '@/components/CustomerOrder'
import Coupon from '@/components/pages/Coupon'
import PayPage from '@/components/PayPage'
import CustomerCheckout from '@/components/CustomerCheckout'
import OrderList from '@/components/OrderList'
import Home from '@/components/Home'
import ShopPage from '@/components/ShopPage'
import ShoppingMain from '@/components/ShoppingMain'
import ShopProduct from '@/components/ShopProduct'
import PaymentMake from '@/components/PaymentMake'
import PaymentPage from '@/components/PaymentPage'
import PaymentConfirm from '@/components/PaymentConfirm'
import PaymentShipping from '@/components/PaymentShipping'
import CouponJackpot from '@/components/CouponJackpot'
import Contact from '@/components/Contact'
import Storeinfo from '@/components/Storeinfo'
import CommentForm from '@/components/CommentForm'
import CommentManage from '@/components/CommentManage'




Vue.use(Router)

export default new Router({
  routes: [
    {
        //預防使用者因為輸入不存在的路徑跑到空白頁面
        path:'*',
        redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/commentform',
      name: 'CommentForm',
      component: CommentForm
    },
    {
      path: '/shoppage',
      name: 'ShopPage',
      component: ShopPage,
      children:[
        {
          path: 'shoppingmain', 
          name: 'ShoppingMain',
          component: ShoppingMain,
          
        },        
        {
          path: 'product/:productId', 
          name: 'ShopProduct',
          component: ShopProduct,
          
        },
        
      ]
    },
    {
      path: '/couponjackpot',
      name: 'CouponJackpot',
      component: CouponJackpot
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/storeinfo',
      name: 'Storeinfo',
      component: Storeinfo
    },
    {
      path: '/paymentpage',
      name: 'PaymentPage',
      component: PaymentPage,
      children:[
        {
          
          path: 'paymentmake',
          name: 'PaymentMake',
          component: PaymentMake,
        },
        {
          
          path: 'paymentshipping',
          name: 'PaymentShipping',
          component: PaymentShipping,
        },
        {
          path: 'paymentconfirm/:orderId',   //要加上/:orderId動態帶入api抓來的訂單ID形成結帳頁面，少了冒號會因為網址被nav guard判斷不存在而跑回login
          name: 'PaymentConfirm',
          component: PaymentConfirm,
          
        },
      ]
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,       
      meta: { requiresAuth: true },//加入這段表示需要驗證才能進入的頁面
      children:[
        {
        path: 'products',   //子元件不用加斜線
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: Coupon,
          meta: { requiresAuth: true }
        },
        {
          path: 'orderlist',
          name: 'OrderList',
          component: OrderList,
          meta: { requiresAuth: true }
        },  
          
      ]
    
    },    
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,           
      children:[
        {
        path: 'customerorder',   //子元件不用加斜線
        name: 'CustomerOrder',
        component: CustomerOrder,
        
        },
        {
          path: 'paypage',   //
          name: 'PayPage',
          component: PayPage,
          
        },
        {
          path: 'customercheckout/:orderId',   //要加上/:orderId動態帶入api抓來的訂單ID形成結帳頁面，少了冒號會因為網址被nav guard判斷不存在而跑回login
          name: 'CustomerCheckout',
          component: CustomerCheckout,
          
        },
        {
          path: 'commentmanage',   //要加上/:orderId動態帶入api抓來的訂單ID形成結帳頁面，少了冒號會因為網址被nav guard判斷不存在而跑回login
          name: 'CommentManage',
          component: CommentManage,
          
        },
          
      ]
    
    },
    
    
  ]
})
