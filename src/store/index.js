import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      ID: "",
      task_content: "",
      is_completed: "",
      List: []
  },
  getters: {
    // state のデータを加工する場所（計算など）
    favoritesCount(state) {
    return state.favorites.length;
    },
  },
  mutations: {
    // Mutation で取得したデータを state に保存
    // 全てのミューテーションの第1引数は必ずstate 第2関数が引数
    setData(state, data) {
        if (data && data.List && Array.isArray(data.List)) {
        state.List = data.List;  // dataがListという箱に入っている場合、中身のListだけを取り出す
      } else if (Array.isArray(data)) {
        state.List = data;  // dataそのものがListの場合、dataをそのまま使う
      } else {
        state.List = [];
      }
    },                 
  },
  actions: {
    async fetchData({ commit }) {
    const response = await axios.get('https://m3h-saiuchi-0804-dhbec8cnhzgyd0ev.japaneast-01.azurewebsites.net/api/SELECT?')
    commit('setData', response.data)
    },

    async addData({ state }) {  
      //state 受け取る
      //IDの入力チェック（空白か数字以外なら終了）
      if(state.ID!=null && isNaN(state.ID)){
        console.log("IDに数値が入力されていません");
        return;
      }
      
      //INSERT用のAPIを呼び出し
      const response = await axios.post('https://m3h-saiuchi-0804-dhbec8cnhzgyd0ev.japaneast-01.azurewebsites.net/api/INSERT?', { 
        ID: state.ID,
        task_content: state.task_content,
        is_completed: state.is_completed
    });
    
    console.log(response.data);
      },
  
    async updateData({ state }) {
      // IDの入力チェック
      if(!state.ID || isNaN(state.ID)) {
      console.log("IDに数値が入力されていません");
      return;
    }
  
      // UPDATE用のAPIを呼び出し
      const response = await axios.put('https://m3h-saiuchi-0804-dhbec8cnhzgyd0ev.japaneast-01.azurewebsites.net/api/UPDATE?', {
        ID: state.ID,
        task_content: state.task_content,
        is_completed: state.is_completed
    });

    console.log(response.data);
    }
  }
})






