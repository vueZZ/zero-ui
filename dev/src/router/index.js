import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: require(`../components/layout/index.vue`).default,
      redirect: '/component/test',
      children: []
    }
  ]
})
