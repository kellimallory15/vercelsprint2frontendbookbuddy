import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register'
import ReaderList from '@/components/ReaderList'
import ReaderCreate from '@/components/ReaderCreate'
import BookList from '@/components/BookList'
import BookCreate from '@/components/BookCreate'
import AuthorCreate from '@/components/AuthorCreate'
import AuthorList from '@/components/AuthorList'

const routes = [
   {
     path: '/',
     name: 'Home',
     component: Home
  },
  {
    path: '/reader-list',
    name: 'ReaderList',
    component: ReaderList
  },
  {
    path: '/reader-list/:msg',
    name: 'ReaderUpdatedList',
    component: ReaderList
  },
  {
    path: '/reader-create',
    name: 'ReaderCreate',
    component: ReaderCreate
  },
  {
    path: '/reader-create/:pk',
    name: 'ReaderUpdate',
    component: ReaderCreate
  },
  {
    path: '/book-list',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book-list/:msg',
    name: 'BookUpdateList',
    component: BookList
  },
  {
    path: '/book-create',
    name: 'BookCreate',
    component: BookCreate
  },
  {
    path: '/book-create/:pk',
    name: 'BookUpdate',
    component: BookCreate
  },
  {
    path: '/author-list',
    name: 'AuthorList',
    component: AuthorList
  },
  {
    path: '/author-list/:msg',
    name: 'AuthorUpdateList',
    component: AuthorList
  },
  {
    path: '/author-create',
    name: 'AuthorCreate',
    component: AuthorCreate
  },
  {
    path: '/author-create/:pk',
    name: 'AuthorUpdate',
    component: AuthorCreate
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

