import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    currPage: 1,
    currPlanet: null,
    currSpecies: null,
    currStarships: [],
    infoTabPage: 0,
    currVehicles: [],
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
    setMaxPages(state, maxPages) {
      state.maxPages = maxPages
    },
    savePlanet(state, planet) {
      state.currPlanet = planet
    },
    saveSpecies(state, species) {
      state.currSpecies = species
    },
    unknownSpecies(state) {
      state.currSpecies = "unknown"
    },
    saveVehicles(state, vehicles) {
      state.currVehicles = vehicles
      state.infoTabPage = 0
    },
    saveStarships(state, starships) {
      state.currStarships = starships
      state.infoTabPage = 0
    },
    increasePage(state){
      state.infoTabPage++
    },
    decreasePage(state){
      state.infoTabPage--
    },
    clearPage(state){
      state.infoTabPage = 0
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
    async fetchPlanet(context, char) {
      const request = await fetch(char.homeworld)
      const data = await request.json()
      context.commit('savePlanet', data)
    },
    async fetchNextPage(context) {
      context.commit('nextPage')
      await context.dispatch('fetchChars')
    },
    async fetchPrevPage(context) {
      context.commit('prevPage')
      await context.dispatch('fetchChars')
    },
    async fetchSpecies(context, char) {
      try {
        const request = await fetch(char.species)
        const data = await request.json()
        context.commit('saveSpecies', data)
      } catch (error) {
        context.commit('unknownSpecies')
      }
    },
    async fetchVehicles(context, char) {
      const vehicles = char.vehicles
      try {
        let data = await Promise.all(
          vehicles.map(async (vehicle) => {
            const response = await fetch(vehicle)
            return data = await response.json()
          }))
          context.commit('saveVehicles', data)
      } catch (error) {
        console.error(error);
      }
    },
    async fetchStarships(context, char) {
      const starships = char.starships
      try {
        let data = await Promise.all(
          starships.map(async (starship) => {
            const response = await fetch(starship)
            return await response.json()
          }))
          context.commit('saveStarships', data)
      } catch (error) {
        console.error(error);
      }
    },
    nextPageDispatch(context){
      context.commit('increasePage')
    },
    prevPageDispatch(context){
      context.commit('decreasePage')
    },
    clearPageDispatch(context){
      context.commit('clearPage')
    }
  },
  modules: {
  }
})
