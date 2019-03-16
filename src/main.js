import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Admin from './components/Admin'
import Register from './components/Register'
import About from './components/about/About'
Vue.use(VueRouter)
const routes = [
  {path:'/',component:Home},
  {path:'/menu',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'/about',component:About},
  {path:'*',redirect:'/'},
]
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
