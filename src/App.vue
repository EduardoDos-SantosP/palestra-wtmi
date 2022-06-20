<template>
  <v-app :id="$options.name">
    <Header></Header>
    <v-main class="bg-gradient mt-16">
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
//import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer},
  beforeCreate() {
    import('@/components/Header')
        .then(response => {
          this.$options.components.Header = response.default
          this.$forceUpdate()
        }).catch(console.log)
  }
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(-15deg, rgba(0, 0, 0, .05), transparent, rgba(255, 255, 255, .05));
}
</style>
