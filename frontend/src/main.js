import { createApp } from "vue";
import { createMemoryHistory, createRouter } from 'vue-router'
import App from "./App.vue";
import "./style.scss";
import Todo from "./components/pages/Todo.vue";
import Inprogress from "./components/pages/InProgress.vue";
import Completed from "./components/pages/Completed.vue";
import Login from './components/pages/auth/Login.vue';
import store from "./store";

import 'bootstrap/js/dist/collapse'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/", component: Todo },
    { path: "/login", component: Login },
    { path: "/todo", component: Todo },
    { path: "/inprogress", component: Inprogress },
    { path: "/completed", component: Completed },
  ],
})

createApp(App).use(router).use(store).mount("#app");
