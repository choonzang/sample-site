import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/index'
import Main from '@/layout/Main'


export const constantRoutes = [
    {
        path: '/',
        component: Main,
        redirect:'/view/index',
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
                path: '/view/about',
                component: () => import('@/views/view/AboutMe')
            },
            {
                path: '/view/news/ramen',
                component: () => import('@/views/view/NewRamenList')
            },
            {
                path: '/view/news/press',
                component: () => import('@/views/view/RamenNews')
            },
            {
                path: '/view/test',
                component: () => import('@/views/view/Test')
            },
            {
                path: '/view/list',
                component: () => import('@/views/view/RamenList')
            },
            //아이디를 파라미터로 넘기는 처리의 router 선언
            {
                path: '/view/details/:id',
                component: () => import('@/views/view/RamenDetails'),
                props: true
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