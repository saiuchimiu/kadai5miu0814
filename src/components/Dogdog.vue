<template>
  <div class="Todo" style="text-align: center;">
    <h1>TODO PAGE</h1>
    <h5>IDを揃えていただければどなたでも操作していただいて結構です</h5>

<v-container>
  <v-row>
    <v-col>
      <!-- 商品データを1件ずつ表示 -->
        <v-data-table
        :headers="[
          { text: 'ID', value: 'ID' },
          { text: 'content', value: 'task_content' },
          { text: 'completed', value: 'is_completed' },]"
        :items="filteredList"
        item-key="ID"
        ></v-data-table>
    </v-col>
  </v-row>

      <v-btn  
        outlined 
        class="ma-2" 
        color="#333333"  
        @click="fetchData">本日のタスク</v-btn>

      <v-btn 
        outlined 
        class="ma-2" 
        color="primary" 
        @click="showAllData">全タスクを表示</v-btn>
      
      <v-btn 
        outlined 
        class="ma-2" 
        color="orange" 
        @click="IncompleteData">未完了タスク</v-btn>

    </v-container>
  </div>
</template>



<script>
export default {
  name: 'DogView',
  data() {
    return {
      showCompleted: true 
    }
  },
  computed: {
    List() {
      const data = this.$store.state.List;
      return data;
    },
    filteredList() {
      if (this.showCompleted) {
        return this.List; // すべて表示
      } else {
        return this.List.filter(item => {
          const value = parseInt(item.is_completed) || 0; //文字列とかは0とする
          return value === 0; // 0なら残して表示
        });
      }
    }
  },
  methods: {
    fetchData() {
      // dispatch = Vuexのアクション（Actions）を実行する
      this.$store.dispatch('fetchData')
    },
    showAllData() {
      this.showCompleted = true;
    },
    IncompleteData() {
      this.showCompleted = false;
    }
  }
}
</script>