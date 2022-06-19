<template>
  <div>
    <div class="row">
      <input v-model="text">
    </div>
    <div class="row">{{ text }}</div>
    <div class="row">
      <button @click="contar">Contar: {{ contagem }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OlaMundoVue",
  data() {
    return {
      text: 'Hello World!',
      contagem: 0
    }
  },
  methods: {
    contar() {
      this.contagem++
    }
  }
}
</script>

<style scoped>
* { all: revert }
.row { display: flex; justify-content: center }
</style>