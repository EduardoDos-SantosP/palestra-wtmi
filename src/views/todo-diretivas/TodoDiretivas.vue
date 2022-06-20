<template>
  <div class="container">
    <!--Título-->
    <h1 class="text-center">Lista de Tarefas</h1>
    <div class="row justify-content-center">
      <div class="col-md-6 col-sm-8">
        <!--Formulário-->
        <div class="input-group">
          <input class="w-75" v-model="texto">
          <button class="w-25 px-0" @click="adicionarTarefa">Adicionar</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="col-sm-8 mx-auto">
      <div
          v-if="tarefas.length === 0"
          class="text-center fw-bold"
      >
        Nenhuma tarefa a fazer!
      </div>
      <!--Tarefas-->
      <div
          v-for="(tarefa, i) in tarefas"
          :key="i"
          class="container-fluid row m-0 p-3 border flex-nowrap"
      >
        <div class="col px-0 align-content-center">
          <textarea
              v-model="tarefa.nome"
              class="w-100 border-0"
              :class="tarefa.concluido ? 'text-decoratin-line-through' : ''"
              style="min-height: 28px; height: 28px"
              :style="tarefa.concluido ? 'resize: none' : ''"
              :disabled="tarefa.concluido"
          >
          </textarea>
        </div>
        <!--Ações-->
        <div class="col-lg-2 col-md-3 col-4 p-0 text-end">
          <button
              class="btn btn-link px-1 py-0"
              @click="alternarStatus(i)"
          >
            {{ tarefa.concluido ? 'restaurar' : 'concluir' }}
          </button>
          <button class="btn btn-link px-1 py-0 text-danger" @click="excluir(i)">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoDiretivas",
  data() {
    return {
      tarefas: [{nome: 'teste', visivel: true, concluido: false}],
      texto: ''
    }
  },
  methods: {
    adicionarTarefa() {
      const tarefa = {
        nome: this.texto,
        concluido: false
      }
      this.texto = ''
      this.tarefas.push(tarefa)
    },
    alternarStatus(id) {
      this.tarefas[id].concluido = !this.tarefas[id].concluido
    },
    excluir(id) {
      this.tarefas = this.tarefas.filter((_, posicao) => posicao !== id)
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: revert;
}
.input-group * {
  padding: revert;
  margin: revert;
  border: revert;
  background-color: revert;
}
.col {
  height: min-content !important;
  padding: revert;
}
.col-lg-2.col-md-3 {
  line-height: revert;
  padding: revert;
}
</style>