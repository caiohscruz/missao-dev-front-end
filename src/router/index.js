import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CoursePanel from "../views/CoursePanel.vue";
import AdministrationPanel from "../views/AdministrationPanel.vue";
import CourseMaintenance from "../views/CourseMaintenance.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/course/:id",
    name: "CoursePanel",
    component: CoursePanel
  },
  {
    path: "/admin",
    name: "AdministrationPanel",
    component: AdministrationPanel
  },
  {
    path: "/admin/course/new",
    name: "NewCourse",
    component: CourseMaintenance
  },
  {
    path: "/admin/course/edit/:id",
    name: "EditCourse",
    component: CourseMaintenance
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
