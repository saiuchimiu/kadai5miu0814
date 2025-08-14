<template>
  <div>
    <h1 style="text-align: center;" >INSERT PAGE</h1>
      <v-container>
        <v-text-field
          class="ml-6 mr-6"
          v-model="$store.state.ID"                         
          label="追加するIDを入力"
          placeholder="追加するIDを入力…"
          outlined></v-text-field>

        <v-text-field
          class="ml-6 mr-6"
          v-model="$store.state.task_content"                         
          label="contentを入力"
          placeholder="contentを入力…"
          outlined></v-text-field>
        
        <v-text-field
          class="ml-6 mr-6"
          v-model="$store.state.is_completed"                         
          label="completedを入力"
          placeholder="completedを入力…"
          outlined></v-text-field>

        <v-row dense class="mb-3 mt-3" align="center" justify="center">
        <v-btn v-on:click="addData"               
          dark small color="#0066FF">DBに登録</v-btn>
        </v-row>
      </v-container>
  </div>
</template>


<script>
export default {
  name: 'FavoriteView',
  computed: {
    List() {
      return this.$store.state.data
    },
  },
  methods: {
    addData(){
      this.$store.dispatch('addData')
    }
  }
}

</script>