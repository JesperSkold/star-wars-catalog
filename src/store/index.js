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
    clearVehicles(state){
      state.currVehicles = []
    },
    saveVehicles(state, vehicles) {
      state.currVehicles.push(vehicles)
    },
    unknownVehicles(state){
      state.currVehicles = "unknown"
    },
    clearStarships(state){
      state.currStarships = []
    },
    saveStarships(state, starship){
      console.log(starship);
      state.currStarships.push(starship)
    },
    unknownStarships(state){
      state.currStarships ="unknown"
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
        // console.log(data);
      } catch (error) {
        context.commit('unknownSpecies')
      }
      // context.commit()
    },
    async fetchVehicles(context, char) {
      context.commit('clearVehicles')
      const vehicles = char.vehicles
      try {
        await Promise.all(
          vehicles.map(async (vehicle) => {
            const response = await fetch(vehicle)
            const data = await response.json()
            context.commit('saveVehicles', data)
            // console.log(data)
          }))
      } catch (error) {
        context.commit('unknownVehicles')
        console.log(error);
      }
    },
    async fetchStarships(context, char) {
      context.commit('clearStarships')
      const starships = char.starships
      try {
        await Promise.all(
          starships.map(async (starship) => {
            const response = await fetch(starship)
            const data = await response.json()
            context.commit('saveStarships', data)
            // console.log(data)
          }))
      } catch (error) {
        context.commit('unknownStarships')
        console.log(error);
      }
    }
    // fetchStarships(context, char){
    //   context.commit('clearStarships')
    //   const starships = char.starships
    //   try {
    //     await Promise.all(
    //       starships.map(async (starship) => {
    //         const response = await fetch(starship)
    //         const data = await response.json()
    //         context.commit('saveStarships', data)
    //       }))
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },
  modules: {
  }
})
