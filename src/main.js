import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index.js";
import store from "./store";

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
