<template>
  <v-container :id="$options.name">
    <v-card class="pa-5 bg-white bg-gradient">
      <v-list class="transparent">
        <v-list-item
            v-for="(item, i) in list"
            :key="i"
            link
            target="_blank"
            :href="item.link"
            class="mt-5 shadow-sm"
        >
          {{ item.label }}
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: () => ({
    baseUrl: 'https://github.com/eduardodos-santosp',
    links: [
      { label: 'Hello World Reativo em Vue', uri: 'ola-mundo-vue' },
      { label: 'Usando o router', uri: 'routed-app' }
    ]
  }),
  computed: {
    list() {
      return this.links.map(item => ({
        ...item,
        link: `${this.baseUrl}/${item.uri}`
      }))
    }
  }
}
</script>
