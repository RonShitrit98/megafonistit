<template>
  <div class="main-content">
    <router-view @goTo="goTo" />
    <!-- <nav> -->
    <!-- <button v-if="cmp != 'song-list'" @click="goBack">{{ "<" }}</button> -->
    <!-- </nav> -->
    <!-- <component :is="cmp" @goTo="goTo" :song="currSong" /> -->
  </div>
</template>

<script>
import songList from "./song-list.vue";
import songDisplay from "./song-display.vue";
export default {
  data() {
    return {
      // cmp: "song-list",
      // currSong: null,
    };
  },
  methods: {
    goTo(cmp, entity) {
      console.log(entity);
    },
    // goBack() {
    //   this.cmp = "song-list";
    // },
  },
  components: {
    songList,
    songDisplay,
  },
};
</script>
