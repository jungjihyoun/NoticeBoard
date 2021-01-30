import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false



new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')

//main.js는 앱의 구조를 파악할 수 있는 청사진 역할