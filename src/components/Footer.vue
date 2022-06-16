<template>
  <v-footer class="bg-light bg-gradient lighten-5" elevation="5">
    <v-col>
      <v-row class="justify-content-center">

        <v-col
            v-for="(reference, i) in references"
            :key="i"
            style="max-width: max-content"
        >
          <v-btn link text x-small color="primary" target="_blank" :href="reference.link">{{ reference.label }}</v-btn>
        </v-col>

      </v-row>
      <v-row justify="center" class="font-weight-bold">{{ text }}</v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      text:  new Date().getFullYear() + ' - ' + this.$author,
      references: [
        { label: 'Vue.js', link: 'https://vuejs.org/guide/introduction.html' },
        { label: 'Vuetify', link: 'https://vuetifyjs.com/en/getting-started/installation/' },
        { label: 'Bootstrap', link: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/' }
      ]
    }
  }
}
</script>

<style scoped>

</style>