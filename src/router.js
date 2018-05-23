import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyVue from './views/MyVue.vue'
import Blog from './views/Blog.vue'
import Odinn from './views/Odinn.vue'
import Litla from './views/Litla.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/myvue',
      name: 'myvue',
      component: MyVue
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/odinn',
      name: 'odinn',
      component: Odinn
    },
    {
      path: '/litla',
      name: 'litla',
      component: Litla
    },
  ]
})
