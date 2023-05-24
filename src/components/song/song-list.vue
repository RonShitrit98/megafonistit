<template>
  <div class="song-list">
    <ul>
      <li v-for="song in songs" :key="song.id" @click="openSong(song.id)">
        {{ song.title }}

        <img v-if="song.stillImg" :src="song.stillImg" alt="" />
        <img v-else :src="song.sign" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { songService } from "../../services/song-service";
export default {
  data() {
    return {
      songs: songService.getSongs(),
    };
  },
  methods: {
    openSong(songId) {
      this.$emit("goTo", songId);
    },
  },
};
</script>
]
