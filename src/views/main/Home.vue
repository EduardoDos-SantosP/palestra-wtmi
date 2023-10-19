<template>
  <v-container :id="$options.name">
    <v-card class="pa-4 bg-white bg-gradient elevation-2">
      <v-expansion-panels class="rounded-lg light bg-gradient">
        <v-expansion-panel
            v-for="(item, key) in list"
            :key="key"
            class="menu-item bg-transparent"
        >
          <v-expansion-panel-header class="py-0">{{ item.label }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="pt-0 pb-0 bg-transparent">
              <v-list-item
                  v-for="(subItem, subKey) in createMenuSubItems(item)"
                  :key="subKey"
                  link
                  :href="subItem.uri"
                  :target="subItem.target"
                  class="text-primary"
              >
                <v-list-item-icon class="me-3">
                  <v-icon dense color="primary">{{ 'mdi-' + subItem.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ subItem.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <div class="v-expansion-panel menu-item bg-transparent">
          <button @click="goToSlide()"
             class="v-expansion-panel-header py-0 v-expansion-panel-header"
          >
            <span>Download slide</span>
            <span class="v-expansion-panel-header__icon">
              <v-icon>mdi-file</v-icon>
            </span>
          </button>
        </div>

      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>

import OlaMundoVue from "@/views/ola-mundo-vue/OlaMundoVue";
import TodoDiretivas from "@/views/todo-diretivas/TodoDiretivas";

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      baseUrl: 'https://github.com/eduardodos-santosp',
      menuItems: [
        this.createMenuItem('Hello world reativo em vue', OlaMundoVue.name),
        this.createMenuItem('Lista de tarefas usando diretivas', TodoDiretivas.name),
        { label: 'Usando o router', uri: 'routed-app' }
      ]
    }
  },
  methods: {
    createMenuItem: (label, uri) => ({ label, uri }),
    createMenuSubItem: (label, uri, icon, target = null) => ({ label, uri, icon, target }),
    createMenuSubItems({ uri, link }) {
      return [
        this.createMenuSubItem('Projeto em execução', uri, 'view-dashboard'),
        this.createMenuSubItem('Código no Github', link, 'application-brackets-outline', '_blank')
      ]
    },
    goToSlide: () =>
        window.open('https://drive.google.com/file/d/1mKdc70DlTu9tJEsaTPzJhCiuVjozNrSU/view?usp=share_link')
  },
  computed: {
    list() {
      return this.menuItems.map(item => ({
        ...item,
        link: `${this.baseUrl}/${item.uri.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
      }))
    }
  }
}
</script>

<style scoped>
.v-expansion-panel-header--active {
  min-height: 56px !important;
}
.menu-item:before {
  box-shadow: none !important;
}
.menu-item:after {
  border-top: none !important;
}
</style>
