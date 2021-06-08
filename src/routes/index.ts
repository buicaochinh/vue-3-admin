import { createRouter, createWebHistory } from 'vue-router'
import { DASHBOARD_PATH, DASHBOARD_NAME, DOCUMENT_PATH, DOCUMENT_NAME, USER_PATH, USER_NAME } from '../cores/routes'

const Dashboard = () => import('../pages/index.vue')
const Documents = () => import('../pages/documents.vue')
const Users = () => import('../pages/users.vue')

const routes = [
    {
        path: DASHBOARD_PATH,
        name: DASHBOARD_NAME,
        component: Dashboard
    },
    {
        path: DOCUMENT_PATH,
        name: DOCUMENT_NAME,
        component: Documents
    },
    {
        path: USER_PATH,
        name: USER_NAME,
        component: Users
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
