import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/loginPage.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/homePage.vue"),
    },
  ],
})

export default router
