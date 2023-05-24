<template>
  <div class="song-display">
    <h1>{{ song.title }}</h1>
    <h6 v-if="song.notes">{{ song.notes }}</h6>
    <p v-for="line in displaySong" :key="line">{{ line }}</p>
    <h3>סימן:</h3>
    <img :src="song.sign" :alt="song.sign" />
  </div>
</template>

<script>
import { songService } from "../../services/song-service";
export default {
  data() {
    return {
      song: null,
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.song = songService.getSong(this.$route.params.id);
    console.log(this.song);
  },
  computed: {
    displaySong() {
      const song = this.song.body.split("*");
      return song;
    },
  },
};
</script>
