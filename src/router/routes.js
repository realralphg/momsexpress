
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Homepage.vue') },
      // { path: '/shop', component: () => import('src/pages/Homepage.vue') },
      { path: '/auth', component: () => import('src/pages/userAuth.vue') },
      { path: '/forgotPassword', component: () => import('src/pages/Forgotpassword.vue') },
      { path: '/auth/signup', component: () => import('src/pages/userAuthSignup.vue') },
      { path: '/sell', component: () => import('src/pages/sellLanding.vue') },
      { path: '/sell/auth', component: () => import('src/pages/sellAuth.vue') },
      { path: '/sell/auth/Signup', component: () => import('src/pages/sellAuthSignup.vue') },
      { path: '/seller/dashboard', component: () => import('src/pages/Seller/Dashboard.vue') },
      { path: '/seller/product', component: () => import('src/pages/Seller/Product.vue') },
      { path: '/seller/productDetail', component: () => import('src/pages/Seller/ProductDetail.vue') },
      { path: '/seller/profile', component: () => import('src/pages/Seller/Profile.vue') },
      { path: '/seller/support', component: () => import('src/pages/Seller/Support.vue') },
      { path: '/details', component: () => import('src/pages/Details.vue') },
      { path: '/category', component: () => import('src/pages/Categorypage.vue') },
      { path: '/account', component: () => import('src/pages/userAccount.vue') },
      { path: '/cart', component: () => import('src/pages/Cart.vue') },
      { path: '/checkout', component: () => import('src/pages/Checkout.vue') },
      { path: '/shop', component: () => import('src/pages/SingleShopPage.vue') },
      { path: '/user', component: () => import('src/pages/User.vue') },
      { path: '/profile', component: () => import('src/pages/Profile.vue') },
      { path: '/allCategory', component: () => import('src/pages/AllCategories.vue') },
      { path: '/order', component: () => import('src/components/UserDetailPage/Order.vue') },
      { path: '/wishlist', component: () => import('src/components/UserDetailPage/Wishlist.vue') },
      { path: '', component: () => import('src/pages/Homepage.vue') },
      { path: '', component: () => import('src/pages/Homepage.vue') },
      { path: '', component: () => import('src/pages/Homepage.vue') },
      { path: '', component: () => import('src/pages/Homepage.vue') },
      { path: '', component: () => import('src/pages/Homepage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
