import { createRouter, createWebHistory } from 'vue-router'

function cektoken(to,from,next){
  var isAuthenticated = false
  if(localStorage.getItem('token')){
    isAuthenticated = true
    next()
  }else{
    isAuthenticated = false
    next('/login')
  }
}
beforeEnter:cektoken

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Banner',
      component: () => import('../views/BannerComponent.vue'),
      beforeEnter:cektoken,

    },
    {
      path: '/product',
      name: 'Produk',
      component: () => import('../views/ProduksComponent.vue')
    },
     {
      path: '/profil',
      name: 'Profil',
      component: () => import('../views/indexComponent.vue'),
      beforeEnter:cektoken,

    },
    {
      path: '/product/detailproduct/:slug',
      name: 'Detailproduct',
      component: () => import('../views/DetailComponent.vue'),
      props: true
    },
    {
      path: '/brans',
      name: 'Brans',
      component: () => import('../views/BranceComponent.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterComponent.vue')
    },
    {
      path: '/kategori',
      name: 'Kategori',
      component: () => import('../views/KategoriComponent.vue')
    },
    {
      path: '/checkout',
      name: 'Ceckout',
      component: () => import('../views/CheckoutComponent.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartComponent.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../components/DetailComponent.vue')
    },
    {
      path: '/checkout/product/detailproduct/:slug',
      name: 'Checkout',
      component: () => import('../components/CheckoutComponent.vue'),
      props:true
    },
    {
      path: '/login',
      component: () => import('../components/LoginComponent.vue'),
      meta: {requiresGuest: true}
    },
    {
      path: '/login/:slug',
      component: () => import('../components/LoginComponent.vue'),
      props:true,
      meta: {requiresGuest: true}
    },
    {
      path: '/contact',
      component: () => import('../views/Contact.vue'),
      meta: {requiresGuest: true}
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue'),
      meta: {requiresGuest: true}
    },
  ]
})

export default router
