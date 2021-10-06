import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Profile from "../components/Profile/Profile.vue";

const Home = () => import(/* webpackChunkName: "about" */ '../components/Home/Main.vue')
const About = () => import(/* webpackChunkName: "about" */ '../components/About/Main.vue')
const Profile = () => import(/* webpackChunkName: "about" */ '../components/Profile/Main.vue')
const Media = () => import(/* webpackChunkName: "about" */ '../components/Media/Main.vue')

import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect: "/home",
    component: Home
  },
  {
    path: '/about',
    name: 'About', //go to About Page
    component: About
  },
  {
    path: "/profile",
    name: "Profile", // go to Profile Page
    component: Profile,
    beforeEnter: authGuard //before user goes to profile page, it checks if user is logged in. If not, it redirects the user to the login page.
  },
  {
    path: "/media",
    name: "Media", // go to Profile Page
    component: Media
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
