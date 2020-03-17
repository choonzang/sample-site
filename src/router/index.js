import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/index'
import Main from '@/layout/Main'


export const constantRoutes = [
    {
        path: '/',
        component: Main,
        hidden: true
    },
    {
        path: '/view',
        redirect: '/view/index',
        component:Layout,
        hidden: true,
        children: [
            {
                path: '/view/index',
                component: () => import('@/views/view/index')
            },
            {
                path: '/view/test',
                component: () => import('@/views/view/Test')
            }
        ]
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router