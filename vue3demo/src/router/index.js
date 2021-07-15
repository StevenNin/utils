
import { createRouter, createWebHistory} from "vue-router";
const routerHistorys = createWebHistory()
 
  const router = createRouter({
    history: routerHistorys,
    routes: [
      {
        path: '/', 
        component: ()=>import ('@/components/HelloWorld.vue')
      },
      {
        path: '/demo', 
        component: ()=>import('@/views/demo')
      },
      {
        path: '/grid',
        component: ()=>import('@/views/grid')
      }
    ]
  })
 
export default router