import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import card from '../components/card.vue'
import NotFound from '../components/NotFound.vue'
import Wordbooks from '../components/Wordbooks.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/card',
    name: 'card',
    component: card
},
{
    path: '/wordbooks',
    name: 'Wordbooks',
    component: Wordbooks
},
{
    path: '/admin',
    name: 'Admin',
    component: () => import('../components/admin.vue')

},
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}
]
//创建一个路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router