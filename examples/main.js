/**
 * Created by aresn on 16/6/20.
 */
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './app.vue';
import ViewUIPlus from '../src/index';
// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/zh-CN';

// 路由配置
const router = createRouter({
    esModule: false,
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: '/split',
            component: () => import('./routers/split.vue')
        },
        {
            path: '/layout',
            component: () => import('./routers/layout.vue')
        },
        // {
        //     path: '/affix',
        //     component: (resolve) => require(['./routers/affix.vue'], resolve)
        // },
        {
            path: '/anchor',
            component: () => import('./routers/anchor.vue')
        },
        {
            path: '/grid',
            component: () => import('./routers/grid.vue')
        },
        {
            path: '/button',
            component: () => import('./routers/button.vue')
        },
        {
            path: '/input',
            component: () => import('./routers/input.vue')
        },
        {
            path: '/radio',
            component: () => import('./routers/radio.vue')
        },
        {
            path: '/checkbox',
            component: () => import('./routers/checkbox.vue')
        },
        {
            path: '/steps',
            component: () => import('./routers/steps.vue')
        },
        {
            path: '/timeline',
            component: () => import('./routers/timeline.vue')
        },
        {
            path: '/switch',
            component: () => import('./routers/switch.vue')
        },
        {
            path: '/alert',
            component: () => import('./routers/alert.vue')
        },
        {
            path: '/badge',
            component: () => import('./routers/badge.vue')
        },
        {
            path: '/tag',
            component: () => import('./routers/tag.vue')
        },
        {
            path: '/input-number',
            component: () => import('./routers/input-number.vue')
        },
        {
            path: '/upload',
            component: () => import('./routers/upload.vue')
        },
        {
            path: '/progress',
            component: () => import('./routers/progress.vue')
        },
        {
            path: '/collapse',
            component: () => import('./routers/collapse.vue')
        },
        {
            path: '/carousel',
            component: () => import('./routers/carousel.vue')
        },
        {
            path: '/card',
            component: () => import('./routers/card.vue')
        },
        // {
        //     path: '/tree',
        //     component: (resolve) => require(['./routers/tree.vue'], resolve)
        // },
        {
            path: '/rate',
            component: () => import('./routers/rate.vue')
        },
        {
            path: '/circle',
            component: () => import('./routers/circle.vue')
        },
        // {
        //     path: '/tabs',
        //     component: (resolve) => require(['./routers/tabs.vue'], resolve)
        // },
        // {
        //     path: '/tooltip',
        //     component: (resolve) => require(['./routers/tooltip.vue'], resolve)
        // },
        // {
        //     path: '/poptip',
        //     component: (resolve) => require(['./routers/poptip.vue'], resolve)
        // },
        // {
        //     path: '/slider',
        //     component: (resolve) => require(['./routers/slider.vue'], resolve)
        // },
        {
            path: '/dropdown',
            component: () => import('./routers/dropdown.vue')
        },
        {
            path: '/breadcrumb',
            component: () => import('./routers/breadcrumb.vue')
        },
        {
            path: '/menu',
            component: () => import('./routers/menu.vue')
        },
        {
            path: '/spin',
            component: () => import('./routers/spin.vue')
        },
        // {
        //     path: '/cascader',
        //     component: (resolve) => require(['./routers/cascader.vue'], resolve)
        // },
        // {
        //     path: '/select',
        //     component: (resolve) => require(['./routers/select.vue'], resolve)
        // },
        // {
        //     path: '/backtop',
        //     component: (resolve) => require(['./routers/back-top.vue'], resolve)
        // },
        // {
        //     path: '/page',
        //     component: (resolve) => require(['./routers/page.vue'], resolve)
        // },
        {
            path: '/transfer',
            component: () => import('./routers/transfer.vue')
        },
        // {
        //     path: '/date',
        //     component: (resolve) => require(['./routers/date.vue'], resolve)
        // },
        // {
        //     path: '/form',
        //     component: (resolve) => require(['./routers/form.vue'], resolve)
        // },
        // {
        //     path: '/table',
        //     component: (resolve) => require(['./routers/table.vue'], resolve)
        // },
        {
            path: '/loading-bar',
            component: () => import('./routers/loading-bar.vue')
        },
        {
            path: '/modal',
            component: () => import('./routers/modal.vue')
        },
        {
            path: '/message',
            component: () => import('./routers/message.vue')
        },
        {
            path: '/notice',
            component: () => import('./routers/notice.vue')
        },
        {
            path: '/avatar',
            component: () => import('./routers/avatar.vue')
        },
        // {
        //     path: '/color-picker',
        //     component: (resolve) => require(['./routers/color-picker.vue'], resolve)
        // },
        // {
        //     path: '/auto-complete',
        //     component: (resolve) => require(['./routers/auto-complete.vue'], resolve)
        // },
        // {
        //     path: '/scroll',
        //     component: (resolve) => require(['./routers/scroll.vue'], resolve)
        // },
        {
            path: '/divider',
            component: () => import('./routers/divider.vue')
        },
        {
            path: '/time',
            component: () => import('./routers/time.vue')
        },
        {
            path: '/cell',
            component: () => import('./routers/cell.vue')
        },
        {
            path: '/drawer',
            component: () => import('./routers/drawer.vue')
        },
        {
            path: '/icon',
            component: () => import('./routers/icon.vue')
        },
        {
            path: '/list',
            component: () => import('./routers/list.vue')
        }
    ]
});

const app = createApp(App);
app.use(ViewUIPlus);
app.use(router);
app.mount('#app');
export default app;
