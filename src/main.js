import './firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
//import router from './router'
import VueRouter from 'vue-router'
import homePage from './components/homePage.vue'
import eventDetail from './components/eventDetail.vue'

Vue.use(VueRouter);
Vue.use(VueFire);

const routes = [
  {
    path: '/',
    component:homePage,
    props: true
  },
  {
    path: '/event',
    component: eventDetail
  }
]

const router = new VueRouter({
  routes
  // mode: 'history'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})