<template>
  <v-container :id="$options.name" style="height: 100%">
    <v-row id="r1">
      <span class="h1">404</span>
    </v-row>
    <v-row id="r2">
      <span class="h3 ms-4 me-1">Página não incontrada!</span>
      <v-icon id="icon-404" size="50" color="black">mdi-robot-confused</v-icon>
    </v-row>
    <v-row class="mt-16">
      <v-btn x-large outlined class="pa-4" to="/">
        <v-icon>mdi-home</v-icon>
        <span>Início</span>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
.row {
  justify-content: center !important;
}
#r1 {
  transform: rotate(5deg);
}
#r2 {
  transform: rotate(-2deg);
}
#icon-404 {
  transform: rotate(15deg) translateY(-20%) !important;
}
</style>