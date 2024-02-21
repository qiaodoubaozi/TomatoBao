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
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/404Page.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: "/404",
    },
  ],
})

export default router
