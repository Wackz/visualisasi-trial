import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Kor2 from "./pages/Kor2.vue";
import Modul2 from "./pages/Modul2.vue";
import Tabulasi from "./pages/Tabulasi.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: Modul2,
  },
  {
    path: "/tabulasi",
    component: Tabulasi,
  },
  {
    path: "/modul2",
    component: Kor2
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
