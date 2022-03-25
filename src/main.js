import { createApp } from "vue";
import { router } from "@/router/router";
import App from "./App.vue";
import BaseButton from "@/components/layout/common/BaseButton";

createApp(App).component("BaseButton", BaseButton).use(router).mount("#app");
