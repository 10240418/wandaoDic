// src/router/index.js
import { createRouter, createWebHistory } from  'vue-router'
import DataView from '..//src/views/DataView.vue'; // 更新导入路径
import HomeView from '../src/views/HomeView.vue'; // 更新导入路径
import NavBar from '../src/components/Navbar.vue'; // 更新导入路径
import StandardView from '../src//views/StandardView.vue'; // 更新导入路径
import TransformView from '../src/views/TransformView.vue'; // 更新导入路径
import NotFoundView from '../src/views/404.vue'; // 更新导入路径
import LoginView from "../src/views/LoginView.vue";


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/data',
        name: 'Data',
        component: DataView,
    },
    {
        path: '/nav',
        name: 'Nav',
        component: NavBar,
    },
    {
        path: '/standard',
        name: 'Standard',
        component: StandardView,
    },
    {
        path: '/transform',
        name: 'Transform',
        component: TransformView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,

    },










    {
        path: '/:pathMatch(.*)*', // 此处需特别注意置于最底部
        name: 'NotFound',
        component: NotFoundView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
