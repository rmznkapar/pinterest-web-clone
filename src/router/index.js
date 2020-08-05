import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/following",
    name: "Following",
    component: () => import("../views/Following.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/pin/:id",
    name: "Pin",
    component: () => import("../views/Pin.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
