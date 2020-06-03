import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { priceFilter } from '@/filters'

Vue.filter('price', priceFilter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
