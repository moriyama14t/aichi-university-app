import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Universities from "../views/Universities.vue";
import UniversityDetail from "@/views/UniversityDetail.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Universities",
    component: Universities,
  },
  {
    path: "/:id",
    name: "UniversityDetail",
    component: UniversityDetail,
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
