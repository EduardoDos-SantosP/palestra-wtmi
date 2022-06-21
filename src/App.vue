<template>
  <v-app :id="$options.name">
    <Header></Header>
    <v-main class="bg-gradient mt-16">
      <router-view v-if="!$options.netlify"/>
      <ComponentView v-else/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import redirectHandler from '../redirectHandler';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Header, Footer},
  mounted() {
    import('@/views/main/Home').then(response => {
      const components = this.$options.components
      if (!components.ComponentView) components.ComponentView = response.default
    })
    redirectHandler(this)
  }
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(-15deg, rgba(0, 0, 0, .05), transparent, rgba(255, 255, 255, .05));
}
</style>
