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
export default {
  props: ["song"],
  computed: {
    displaySong() {
      const song = this.song.body.split("*");
      return song;
    },
  },
};
</script>
