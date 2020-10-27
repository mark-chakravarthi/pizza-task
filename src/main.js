import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import Vuex from "vuex";
import { store } from "./store/index";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuex);

// import bootstap and bootstap-vue css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
