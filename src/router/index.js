import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../components/LoginView.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginView,
    name: "Login",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/",
});

export default router;
