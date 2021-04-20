import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: 'Home' */ '~/views/Home').then(m => m.default || m)
const Contact = () => import(/* webpackChunkName: 'Inner' */ '~/views/Contact').then(m => m.default || m)
const User = () => import(/* webpackChunkName: 'Inner' */ '~/views/User').then(m => m.default || m)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/es', component: Home },
      { path: '/es/contact', component: Contact },
      { path: '/es/:username?/:productName?', component: User },
      { path: '/', component: Home },
      { path: '/contact', component: Contact },
      { path: '/:username?/:productName?', component: User }
    ],
    scrollBehavior
  })
}

const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      setTimeout(() => {
        resolve(position)
      }, 10)
    })
  })
}
