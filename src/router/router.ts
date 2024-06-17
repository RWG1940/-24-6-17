import { createRouter, createWebHistory } from 'vue-router'
import Reg from '../views/Reg.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'

const routes = [
  {
    path: '/',
    redirect: '/reg'  // 默认路由
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  // 其他路由配置...  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;