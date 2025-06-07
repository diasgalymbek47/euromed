import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/prices',
        component: () => import('@/views/PricesView.vue')
    },
    {
        path: '/services',
        component: () => import('@/views/ServicesView.vue')
    },
    {
        path: '/doctors',
        component: () => import('@/views/DoctorsView.vue')
    },
    {
        path: '/results',
        component: () => import('@/views/ResultsView.vue')
    },
    {
        path: '/service',
        component: () => import('@/views/ServiceView.vue')
    }
];

export const router = createRouter({
    routes,
    history: createWebHistory()
})