<template>
    <Notification
        auto-count
        @on-load-more="handleLoadMore"
        @on-clear="handleClear"
    >
        <NotificationTab
            title="通知"
            name="message"
            :count="unreadMessage"
            :loaded-all="messageList.length >= 15"
            :loading="messageLoading"
            :scroll-to-load="true"
        >
            <NotificationItem
                v-for="(item, index) in messageList"
                :key="index"
                :title="item.title"
                :icon="item.icon"
                :icon-color="item.iconColor"
                :time="item.time"
                :read="item.read"
            />
        </NotificationTab>
        <NotificationTab
            title="关注"
            name="follow"
            :count="unreadFollow"
            :loaded-all="followList.length >= 15"
            :loading="followLoading"
            :scroll-to-load="true"
        >
            <NotificationItem
                v-for="(item, index) in followList"
                :key="index"
                :avatar="item.avatar"
                :title="item.title"
                :time="item.time"
                :read="item.read"
            />
        </NotificationTab>
        <NotificationTab
            title="待办"
            name="todo"
            :count="unreadTodo"
            :loaded-all="todoList.length >= 15"
            :loading="todoLoading"
            :scroll-to-load="true"
        >
            <NotificationItem
                v-for="(item, index) in todoList"
                :key="index"
                :title="item.title"
                :content="item.content"
                :tag="item.tag"
                :tag-props="item.tagProps"
                :read="item.read"
            />
        </NotificationTab>
    </Notification>
</template>
<script>
export default {
    data () {
        return {
            messageBaseList: [
                {
                    icon: 'md-mail',
                    iconColor: '#3391e5',
                    title: '蒂姆·库克回复了你的邮件',
                    read: 1,
                    time: 1557297198
                },
                {
                    icon: 'md-home',
                    iconColor: '#87d068',
                    title: '乔纳森·伊夫邀请你参加会议',
                    read: 0,
                    time: 1557297198
                },
                {
                    icon: 'md-information',
                    iconColor: '#fe5c57',
                    title: '斯蒂夫·沃兹尼亚克已批准了你的休假申请',
                    read: 1,
                    time: 1557297198
                },
                {
                    icon: 'md-star',
                    iconColor: '#ff9900',
                    title: '史蒂夫·乔布斯收藏了你的文章',
                    read: 1,
                    time: 1557297198
                },
                {
                    icon: 'md-people',
                    iconColor: '#f06292',
                    title: '比尔·费尔南德斯通过了你的好友申请',
                    read: 1,
                    time: 1557297198
                }
            ],
            followBaseList: [
                {
                    avatar: 'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
                    title: '史蒂夫·乔布斯 关注了你',
                    read: 1,
                    time: 1557299299
                },
                {
                    avatar: 'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
                    title: '斯蒂夫·沃兹尼亚克 关注了你',
                    read: 1,
                    time: 1557299299
                },
                {
                    avatar: 'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
                    title: '乔纳森·伊夫 关注了你',
                    read: 0,
                    time: 1557299299
                },
                {
                    avatar: 'https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar',
                    title: '蒂姆·库克 关注了你',
                    read: 1,
                    time: 1557299299
                },
                {
                    avatar: 'https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar',
                    title: '比尔·费尔南德斯 关注了你',
                    read: 1,
                    time: 1557299299
                }
            ],
            todoBaseList: [
                {
                    title: '2019 下半年 OKR',
                    content: '需要在 2019-06-14 之前完成',
                    tag: '未开始',
                    tagProps: {
                        color: 'default'
                    },
                    read: 1
                },
                {
                    title: '公孙离的面试评审',
                    content: '需要在 2019-06-14 之前完成',
                    tag: '即将到期',
                    tagProps: {
                        color: 'red'
                    },
                    read: 0
                },
                {
                    title: 'iView 三周年生日会',
                    content: '需要在 2019-07-28 之前完成',
                    tag: '进行中',
                    tagProps: {
                        color: 'blue'
                    },
                    read: 1
                },
                {
                    title: 'iView 三周年生日会',
                    content: '需要在 2019-07-28 之前完成',
                    tag: '进行中',
                    tagProps: {
                        color: 'blue'
                    },
                    read: 1
                }
            ],
            messageList: [],
            followList: [],
            todoList: [],
            messageLoading: false,
            followLoading: false,
            todoLoading: false,
        }
    },
    computed: {
        unreadMessage () {
            let unread = 0;
            this.messageList.forEach(item => {
                if (!item.read) unread++;
            });
            return unread;
        },
        unreadFollow () {
            let unread = 0;
            this.followList.forEach(item => {
                if (!item.read) unread++;
            });
            return unread;
        },
        unreadTodo () {
            let unread = 0;
            this.todoList.forEach(item => {
                if (!item.read) unread++;
            });
            return unread;
        }
    },
    methods: {
        handleLoadMore (tab) {
            this.loadMore(tab.name);
        },
        loadMore (type) {
            if (this[`${type}Loading`]) return;
            this[`${type}Loading`] = true;
            setTimeout(() => {
                this[`${type}List`] = this[`${type}List`].concat([...this[`${type}BaseList`]]);
                this[`${type}Loading`] = false;
            }, 1000);
        },
        handleClear (tab) {
            this.clearUnread(tab.name);
        },
        clearUnread (type) {
            this[`${type}List`] = this[`${type}List`].map(item => {
                item.read = 1;
                return item;
            });
        }
    },
    mounted () {
        this.messageList = [...this.messageBaseList];
        this.followList = [...this.followBaseList];
        this.todoList = [...this.todoBaseList];
    }
}
</script>
