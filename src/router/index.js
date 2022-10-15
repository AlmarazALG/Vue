import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DetalleInfo from '../components/detalle.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/info/:id',
        name: 'detalleInfo',
        component: DetalleInfo
    }
]

const router = new VueRouter({
    mode: "history",
    routes,
})

export default router;