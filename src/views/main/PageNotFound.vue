<template>
  <v-container :id="$options.name">
    <v-col>
      <v-row justify="center">
        <span class="h1">404</span>

      </v-row>
      <v-row justify="center">
        <span class="h3 ms-3 me-1">Página não incontrada</span>
        <v-icon id="icon-404" size="50" color="black">mdi-robot-confused</v-icon>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
#icon-404 {
  transform: rotate(15deg) translateY(-20%) !important;
}
</style>