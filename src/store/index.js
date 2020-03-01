import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: null,
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
    },
    users:{
      currentPage:0,
      sumPage:0,
      list:[]
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
    },
    async requesUsers(ctx,page){
      Vue.axios("/admin/getAlladmin?pageSize=10&page="+page).then((res)=>{
        res = res.data;
        ctx.commit("setUsers", {
          page: page,
          res: res
        })
      }).catch(err => {
        window.console.log(err);
      });
    },
    
  },
  mutations: {
    login(state,userInfo){
      window.console.log(userInfo)
      state.userInfo=userInfo
    },
    setNews(state, obj) {
      state.news[obj.type].page = obj.res.sumpage;
      Vue.set(state.news[obj.type].list,obj.page,obj.res.list)
    },
    setUsers(state, obj){
      window.console.log("---")
      window.console.log(obj)

      state.users.list[obj.page]=obj.res
      state.users.currentPage=obj.page
      state.users.sumPage=obj.res.page
    },
    addUser(state, obj){
      state.users.list[state.users.currentPage].list.push(obj)

    },
    setUsersPage(state, page){
      state.users.currentPage=page
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