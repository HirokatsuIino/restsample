import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stroe'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './stroe'
// import axios from 'axios'
//
// Vue.config.productionTip = false
//
// Vue.prototype.$http = (url, opts) => fetch(url, opts)
// // Vue.prototype.$httpPosts = 'http://127.0.0.1:8100/blog/api/posts/'
// Vue.prototype.$httpPosts = '/blog/api/posts/'
// Vue.prototype.$httpCategories = 'http://127.0.0.1:8100/blog/api/categories/'
//
// new Vue({
//   router,
//   store,
//   axios,
//   render: h => h(App),
// }).$mount('#app')
