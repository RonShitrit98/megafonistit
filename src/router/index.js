import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "../views/home-view.vue";
import songView from "../views/song-view.vue";
import gameView from "../views/game-view.vue";
import songDisplay from "../components/song/song-display.vue";
import songList from "../components/song/song-list.vue";

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
      children: [
        {
          path: ":id",
          component: songDisplay,
        },
        {
          path: "list",
          component: songList,
        },
      ],
    },
    {
      path: "/game",
      name: "game",
      component: gameView,
    },
  ],
});

export default router;
