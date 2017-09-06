import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro.vue'
import blog from '@/components/blog.vue'
import about from '@/components/about.vue'
import dream from '@/components/dream.vue'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/dream',
      name: 'dream',
      component: dream
    }/*,
    {
      path: '*',
      component: NotFound
    }*/
  ]
})
