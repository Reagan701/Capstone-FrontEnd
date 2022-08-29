import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/Login.vue';
import RegisterView from '../views/Register.vue';
import AllProductsView from '../views/Products.vue';
import SingleProductView from '../views/SingleProduct.vue';
import AdminView from '../views/Admin.vue'
import AdminBilling from '../views/AdminBilling.vue';
import AdminCart from '../views/AdminCart.vue';
import AdminProducts from '../views/AdminProducts.vue';
import AdminUsers from '../views/AdminUsers.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/products',
    name: 'products',
    component: AllProductsView
  },
  {
    path: '/products/:id',
    name: 'product',
    props:true,
    component: SingleProductView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/admin/billing',
    name: 'adminBilling',
    component: AdminBilling
  },
  {
    path: '/admin/cart',
    name: 'adminCart',
    component: AdminCart
  },
  {
    path: '/admin/products',
    name: 'adminProducts',
    component: AdminProducts
  },
  {
    path: '/admin/users',
    name: 'adminUsers',
    component: AdminUsers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
