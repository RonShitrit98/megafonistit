import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "../views/home-view.vue";
import songView from "../views/song-view.vue";
import gameView from "../views/game-view.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/song",
      name: "song",
      component: songView,
    },
    {
      path: "/game",
      name: "game",
      component: gameView,
    },
  ],
});

export default router;
