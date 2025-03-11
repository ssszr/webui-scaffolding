import {createRouter, createWebHashHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    //#todo 登录状态校验
    return next();
});

export default router;