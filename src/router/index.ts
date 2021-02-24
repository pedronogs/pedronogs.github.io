import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/job",
    name: "Job",
    component: () => import("../views/Job.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
