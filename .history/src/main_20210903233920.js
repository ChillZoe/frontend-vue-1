import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const name = "shit"
name = "fuck"
function sayhello(who){
  console.log("hello "+who);
}

sayhello(name)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
