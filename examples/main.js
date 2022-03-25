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
        // {
        //     path: '/anchor',
        //     component: (resolve) => require(['./routers/anchor.vue'], resolve)
        // },
        {
            path: '/grid',
            component: () => import('./routers/grid.vue')
        },
        {
            path: '/button',
            component: () => import('./routers/button.vue')
        },
        // {
        //     path: '/input',
        //     component: (resolve) => require(['./routers/input.vue'], resolve)
        // },
        // {
        //     path: '/radio',
        //     component: (resolve) => require(['./routers/radio.vue'], resolve)
        // },
        // {
        //     path: '/checkbox',
        //     component: (resolve) => require(['./routers/checkbox.vue'], resolve)
        // },
        // {
        //     path: '/steps',
        //     component: (resolve) => require(['./routers/steps.vue'], resolve)
        // },
        // {
        //     path: '/timeline',
        //     component: (resolve) => require(['./routers/timeline.vue'], resolve)
        // },
        // {
        //     path: '/switch',
        //     component: (resolve) => require(['./routers/switch.vue'], resolve)
        // },
        // {
        //     path: '/alert',
        //     component: (resolve) => require(['./routers/alert.vue'], resolve)
        // },
        // {
        //     path: '/badge',
        //     component: (resolve) => require(['./routers/badge.vue'], resolve)
        // },
        // {
        //     path: '/tag',
        //     component: (resolve) => require(['./routers/tag.vue'], resolve)
        // },
        // {
        //     path: '/input-number',
        //     component: (resolve) => require(['./routers/input-number.vue'], resolve)
        // },
        // {
        //     path: '/upload',
        //     component: (resolve) => require(['./routers/upload.vue'], resolve)
        // },
        // {
        //     path: '/progress',
        //     component: (resolve) => require(['./routers/progress.vue'], resolve)
        // },
        {
            path: '/collapse',
            component: () => import('./routers/collapse.vue')
        },
        // {
        //     path: '/carousel',
        //     component: (resolve) => require(['./routers/carousel.vue'], resolve)
        // },
        {
            path: '/card',
            component: () => import('./routers/card.vue')
        },
        // {
        //     path: '/tree',
        //     component: (resolve) => require(['./routers/tree.vue'], resolve)
        // },
        // {
        //     path: '/rate',
        //     component: (resolve) => require(['./routers/rate.vue'], resolve)
        // },
        // {
        //     path: '/circle',
        //     component: (resolve) => require(['./routers/circle.vue'], resolve)
        // },
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
        // {
        //     path: '/transfer',
        //     component: (resolve) => require(['./routers/transfer.vue'], resolve)
        // },
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
        // {
        //     path: '/loading-bar',
        //     component: (resolve) => require(['./routers/loading-bar.vue'], resolve)
        // },
        // {
        //     path: '/modal',
        //     component: (resolve) => require(['./routers/modal.vue'], resolve)
        // },
        // {
        //     path: '/message',
        //     component: (resolve) => require(['./routers/message.vue'], resolve)
        // },
        // {
        //     path: '/notice',
        //     component: (resolve) => require(['./routers/notice.vue'], resolve)
        // },
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
        // {
        //     path: '/time',
        //     component: (resolve) => require(['./routers/time.vue'], resolve)
        // },
        {
            path: '/cell',
            component: () => import('./routers/cell.vue')
        },
        // {
        //     path: '/drawer',
        //     component: (resolve) => require(['./routers/drawer.vue'], resolve)
        // },
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
