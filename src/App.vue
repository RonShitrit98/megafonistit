<template>
  <header>
    <main-header />
  </header>
  <main>
    <router-view/>
    <!-- <main-content /> -->
  </main>
</template>

<script setup>
import mainHeader from "./components/main-header.vue";
// import mainContent from "./components/main-content.vue";
</script>
