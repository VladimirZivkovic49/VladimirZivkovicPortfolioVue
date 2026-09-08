import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

import ProjectDetailView from '../views/ProjectDetailView.vue'

const routes = [
  {
    path: '/',
    alias: '/home', // Omogućava da i /home učitava HomeView
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },

  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    props: true // Omogućava da se parametar :id direktno prosledi kao prop u ProjectDetailView
  },




  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(), // Sigurno za GitHub Pages
  routes,
  scrollBehavior() {
    return { top: 0 } // Prebacuje na vrh stranice pri svakoj promeni rute
  }
})

export default router