import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Kor2 from "./pages/Kor2.vue";
import Tabulasi from "./pages/Tabulasi.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: Kor2,
  },
  {
    path: "/tabulasi",
    component: Tabulasi,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
