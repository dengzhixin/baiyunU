import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    username: null,
    news: {
      draf: {
        currentPage: 1,
        page: 0,
        list: []
      },
      hot: {
        currentPage: 1,
        page: 0,
        list: []
      },
      quick: {
        currentPage: 1,
        page: 0,
        list: []
      },
      media: {
        currentPage: 1,
        page: 0,
        list: []
      },
      notic: {
        currentPage: 1,
        page: 0,
        list: []
      }
    }
  },
  actions: {
    async requestNews(ctx, obj) {
      let pageSize = obj.pageSize
      let page = obj.page
      let type = obj.type
      Vue.axios
        .post(
          "/getNewsByPageAndType?pageSize=" +
          pageSize +
          "&page=" +
          page +
          "&type=" +
          type
        )
        .then(res => {
          res = res.data;
          ctx.commit("setNews", {
            type: type,
            page: page,
            res: res
          })
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  mutations: {
    login(state,username){
      state.username=username
    },
    setNews(state, obj) {
      state.news[obj.type].page = obj.res.page;
      state.news[obj.type].list[obj.page] = obj.res.list;
      state.news = JSON.parse(JSON.stringify(state.news))
    },
    addItem() {

    },
    deleteItem(state, obj) {
      state.news[obj.type].list[obj.currentPage].splice(obj.index, 1)
    },
    update(state) {
      state.news = JSON.parse(JSON.stringify(state.news))
    }
  },




  getters: {
    
  }
})
export default store;