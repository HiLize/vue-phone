import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            meta: { title: '首页' },
            component: resolve => require(['./index'], resolve),
        },
        {
            path: '/activityDetail/:wid',
            meta: { title: '活动详情' },
            component: resolve => require(['./activityDetail'], resolve),
        },
        {
            path: '/user',
            meta: { title: '校园活动' },
            component: resolve => require(['./user'], resolve),
        },
        {
            path: '/activityList',
            meta: { title: '最近参加的活动' },
            component: resolve => require(['./activityList'], resolve),
        },
        {
            path: '/schoolReport',
            meta: { title: '第二课堂成绩单' },
            component: resolve => require(['./schoolReport'], resolve),
        },
        {
            path: '/search',
            meta: { title: '搜索' },
            component: resolve => require(['./search'], resolve),
        },
        {
            path: '/signInActivity',
            meta: { title: '可签到活动' },
            component: resolve => require(['./signInActivity'], resolve),
        },
    ]
})
