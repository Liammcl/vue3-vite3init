
 
  import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/view/home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: ()=>import('@/view/about.vue')
    },
  ]
   

  const router = createRouter({
    history: createWebHashHistory(),  
    routes
  })
   
  export default router