<template>
  <v-app-bar :id="$options.name" app class="bg-primary">
    <v-app-bar-title id="title" class="pa-3" style="min-width: max-content">
      <a href="/" class="text-light">{{ appTitle }}</a>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    appTitle: 'Otimizando o Front-end com Vue.js'
  }),
  mounted() {
    document.title = this.appTitle
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
  color: var(--light) !important;
}
</style>