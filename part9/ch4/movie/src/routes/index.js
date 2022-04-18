import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'
import { NO } from '@vue/shared'

export default createRouter({
    //Hash mode 
    //https://google.com/#/search
    history: createWebHashHistory(),

    scrollBehavior(){
        return { top: 0}
    },

    // pages
    // https://google.com/
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})