import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Use vue-resource for http methods
Vue.use(VueResource);
Vue.http.options.root = '/';

// Initialize app
new Vue({
  el: '#app',
  render: h => h(App)
})
