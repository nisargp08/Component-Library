import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Css
import '@/assets/css/normalize.css';
import '@/assets/css/global.scss';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
