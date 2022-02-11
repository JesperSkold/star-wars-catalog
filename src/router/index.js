import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Planet from '../views/Planet.vue'
import Species from '../views/Species.vue'
import Vehicles from '../views/Vehicles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/planets',
        name: 'PlanetView',
        component: Planet
      },
      {
        path: '/species',
        name: 'SpeciesView',
        component: Species
      },
      {
        path: '/vehicles',
        name: 'VehiclesView',
        component: Vehicles
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
