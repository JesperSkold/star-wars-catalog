import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    currPage: 1,
    currPlanet: null,
    maxPages: 0
  },
  mutations: {
    saveChars(state, chars) {
      state.characters = chars
    },
    nextPage(state) {
      state.currPage++
    },
    prevPage(state) {
      state.currPage--
    },
    setMaxPages(state, maxPages){
      state.maxPages = maxPages
    }
  },
  actions: {
    async fetchChars(context) {
      const request = await fetch(`https://swapi.dev/api/people?page=${context.state.currPage}`)
      const data = await request.json()
      if (context.state.maxPages === 0) {
        context.commit('setMaxPages', Math.ceil(data.count / 10))
      }
      context.commit('saveChars', data.results)
    },
    async fetchNextPage(context) {
      context.commit('nextPage')
      await context.dispatch('fetchChars')
    },
    async fetchPrevPage(context) {
      context.commit('prevPage')
      await context.dispatch('fetchChars')
    },
  },
  modules: {
  }
})
