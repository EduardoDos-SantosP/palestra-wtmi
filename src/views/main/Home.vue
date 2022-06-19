<template>
  <v-container :id="$options.name">
    <v-card class="pa-4 bg-white bg-gradient">
      <v-expansion-panels class="rounded-lg light bg-gradient">
        <v-expansion-panel
            v-for="(item, key) in list"
            :key="key"
            class="bg-transparent"
            id="menu-item"
        >
          <v-expansion-panel-header class="py-0">{{ item.label }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list class="pt-0 bg-transparent">
              <v-list-item
                  v-for="(subItem, subKey) in createMenuSubItems(item)"
                  :key="subKey"
                  link
                  :href="subItem.uri"
                  :target="subKey ? '_blank' : ''"
                  class="text-primary"
              >
                <v-list-item-icon class="me-3">
                  <v-icon dense color="primary">{{ `mdi-${subKey ? 'application-brackets-outline' : 'view-dashboard'}` }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ subItem.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel >
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      attr: 'to',
      baseUrl: 'https://github.com/eduardodos-santosp',
      links: [
        this.createMenuItem('Hello World Reativo em Vue', 'ola-mundo-vue'),
        { label: 'Usando o router', uri: 'routed-app' }
      ]
    }
  },
  methods: {
    createMenuItem: (label, uri) => ({ label, uri }),
    createMenuSubItems(parentItem) {
      return [
        { ...this.createMenuItem('Projeto em execução', parentItem.uri), method: 'to' },
        { ...this.createMenuItem('Código no Github', parentItem.link), method: 'href' }
      ]
    }
  },
  computed: {
    list() {
      return this.links.map(item => ({
        ...item,
        link: `${this.baseUrl}/${item.uri}`
      }))
    }
  },
  mounted() {
    this.createMenuItem('x', 'y', 'z')
  }
}
</script>

<style scoped>
#menu-item:before {
  box-shadow: none !important;
}
#menu-item:after {
  border-top: none !important;
}
</style>
