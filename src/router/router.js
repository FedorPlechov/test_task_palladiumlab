import { createRouter, createWebHashHistory } from "vue-router";
import TheMainRoute from "@/components/pages/TheMainPage";
import NotFound from "@/components/pages/NotFound";

const routes = [
  { path: "/", component: TheMainRoute },
  { path: "/:notFound(.*)", component: NotFound },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
