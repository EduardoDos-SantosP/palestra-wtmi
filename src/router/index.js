import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/Home.vue'
import OlaMundoVue from "@/views/ola-mundo-vue/OlaMundoVue";
import PageNotFound from "@/views/main/PageNotFound";
import TodoDiretivas from "@/views/todo-diretivas/TodoDiretivas";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Home.name,
    component: Home
  },
  {
    path: '/' + OlaMundoVue.name,
    name: OlaMundoVue.name,
    component: OlaMundoVue
  },
  {
    path: '/' + TodoDiretivas.name,
    name: TodoDiretivas.name,
    component: TodoDiretivas
  },
  {
    path: '*',
    name: PageNotFound.name,
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
