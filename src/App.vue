<template>
  <v-app :id="$options.name">
    <v-app-bar
      app
      class="bg-primary"
      dark
    >
      <v-app-bar-title id="title" style="min-width: max-content">
        Otimizando o Front-end com Vue.js
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-gradient mt-16">
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>

import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer},
  mounted() {
    document.title = document.querySelector('#title').innerText
  }
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(-15deg, rgba(0, 0, 0, .05), transparent, rgba(255, 255, 255, .05));
}
</style>
