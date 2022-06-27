const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/General/Homepage.vue") },
      // { path: '/shop', component: () => import('src/pages/Homepage.vue') },
      {
        path: "/login",
        component: () => import("src/pages/User/UserLogin.vue"),
      },
      {
        path: "/about",
        component: () => import("src/pages/General/AboutUs.vue"),
      },
      {
        path: "/forgotPassword",
        component: () => import("src/pages/General/Forgotpassword.vue"),
      },
      {
        path: "/signup",
        component: () => import("src/pages/User/UserSignup.vue"),
      },
      {
        path: "/sell",
        component: () => import("src/pages/Seller/sellLanding.vue"),
      },
      {
        path: "/seller/login",
        component: () => import("src/pages/Seller/sellerLogin.vue"),
      },
      {
        path: "/seller/Signup",
        component: () => import("src/pages/Seller/sellerSignup.vue"),
      },
      {
        path: "/details/:productId",
        component: () => import("src/pages/General/Details.vue"),
      },
      {
        path: "/category/:categoryName",
        component: () => import("src/pages/Categories/Categorypage.vue"),
      },
      {
        path: "/account",
        component: () => import("src/pages/User/userAccount.vue"),
      },
      {
        path: "/cart",
        component: () => import("src/pages/General/Cart.vue"),
        beforeEnter: (to, from, next) => {
          let token = localStorage.getItem("buyerEmail");
          if (!token) {
            next("/login");
          } else {
            next();
          }
        },
      },
      {
        path: "/checkout",
        component: () => import("src/pages/General/Checkout.vue"),
      },
      {
        path: "/shop/:shopId",
        component: () => import("src/pages/Categories/SingleShopPage.vue"),
      },
      { path: "/user", component: () => import("src/pages/User/User.vue") },
      {
        path: "/profile",
        component: () => import("src/pages/User/Profile.vue"),
      },
      {
        path: "/allCategory",
        component: () => import("src/pages/Categories/AllCategories.vue"),
      },
      {
        path: "/order",
        component: () => import("src/pages/User/Order.vue"),
        beforeEnter: (to, from, next) => {
          let token = localStorage.getItem("buyerEmail");
          if (!token) {
            next("/login");
          } else {
            next();
          }
        },
      },
      {
        path: "/wishlist",
        component: () => import("src/pages/User/Wishlist.vue"),
        beforeEnter: (to, from, next) => {
          let token = localStorage.getItem("buyerEmail");
          if (!token) {
            next("/login");
          } else {
            next();
          }
        },
      },
    ],
  },

  {
    path: "/seller",
    component: () => import("layouts/SellerLayout.vue"),
    children: [
      {
        path: "/seller/dashboard",
        component: () => import("src/pages/Seller/Dashboard.vue"),
      },
      {
        path: "/seller/product",
        component: () => import("src/pages/Seller/Product.vue"),
      },
      {
        path: "/seller/productDetail/:id",
        component: () => import("src/pages/Seller/ProductDetail.vue"),
      },
      {
        path: "/seller/orders",
        component: () => import("src/pages/Seller/SellerOrder.vue"),
      },
      {
        path: "/seller/profile",
        component: () => import("src/pages/Seller/Profile.vue"),
      },
      {
        path: "/seller/support",
        component: () => import("src/pages/Seller/Support.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/General/Error404.vue"),
  },
];

export default routes;
