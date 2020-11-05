import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    alias: ['/acerca'],
    component: () => import ('../views/SobreMi.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    alias: ['/contactame'],
    component: () => import ('../views/Contacto.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import ('../views/Articulo.vue')
  },
  {
    path: '/administrador/:type',
    name: 'Administrador',
    props: true,
    component: () => import ('../views/Administrador.vue')
  },
  {
    path: '*',
    name: 'RutasInexistentes',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
