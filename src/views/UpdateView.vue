<template>
  <div>
    <h1 style="text-align: center;">UPDATE PAGE</h1>
    <v-container>
      <v-text-field
        class="ml-6 mr-6"
        v-model="$store.state.ID"
        label="更新するIDを入力"
        placeholder="IDを入力…"
        outlined
        required></v-text-field>
      
      <v-text-field
        class="ml-6 mr-6"
        v-model="$store.state.task_content"
        label="新しいcontentを入力"
        placeholder="contentを入力…"
        outlined></v-text-field>
      
      <v-text-field
        class="ml-6 mr-6"
        v-model="$store.state.is_completed"
        label="新しいcompletedを入力"
        placeholder="completedを入力…"
        outlined></v-text-field>
      
      <v-row dense class="mb-3 mt-3" align="center" justify="center">
        <v-btn v-on:click="updateData"
               dark small color="#0066FF">DBを更新</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'UpdateView',
  computed: {
    List() {
      return this.$store.state.List
    },
  },
  methods: {
    updateData(){
      this.$store.dispatch('updateData')
    }
  }
}
</script>