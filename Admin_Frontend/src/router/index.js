import { createWebHistory, createRouter } from "vue-router";
// import { state } from '@/state/modules/auth'


// import store from '@/state/store'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  
  // const authRequired = to.matched.some((route) => route.meta.authRequired)

  // function toPublicRouter(path) {
  //   return 
  // }

  const publicPages = ['login', 'register', 'forgot-password','logout'];
  const authpage = !publicPages.includes(to.name);
  const token = sessionStorage.getItem('user_id');
  



  // const rutaProtegida = to.matched.some(record => record.meta.requiresAuth)
  
  

  if (authpage && !token) {
      //next({ name: 'login', query: { next: to.name } })
      next({ name: 'login' })
  } else {
     next() 
  } 
})


export default router
