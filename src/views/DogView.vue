<template>
  <v-container>
    <Dogdog />
  </v-container>
</template>

<script>
  import Dogdog from '@/components/Dogdog.vue' //ProductList.vueをインポート

  export default {
    name: 'DogView',

    components: {
      Dogdog,
    },
  }
</script>
