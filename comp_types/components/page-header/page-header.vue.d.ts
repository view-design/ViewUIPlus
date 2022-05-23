declare namespace _default {
    const name: string;
    namespace components {
        export { Breadcrumb };
        export { BreadcrumbItem };
        export { Divider };
        export { Icon };
        export { Tabs };
        export { TabPane };
    }
    const emits: string[];
    namespace props {
        namespace title {
            const type: StringConstructor;
        }
        namespace back {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace logo {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace action {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace content {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace extra {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace breadcrumbList {
            const type_6: ArrayConstructor;
            export { type_6 as type };
        }
        namespace hiddenBreadcrumb {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace tabList {
            const type_8: ArrayConstructor;
            export { type_8 as type };
        }
        namespace tabActiveKey {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        namespace wide {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function classes(): {
            'ivu-page-header-wide': any;
        };
        function classes(): {
            'ivu-page-header-wide': any;
        };
    }
    namespace methods {
        function handleTabChange(name: any): void;
        function handleTabChange(name: any): void;
        function handleBack(): void;
        function handleBack(): void;
    }
}
export default _default;
import Breadcrumb from "../breadcrumb/breadcrumb.vue";
import BreadcrumbItem from "../breadcrumb/breadcrumb-item.vue";
import Divider from "../divider/divider.vue";
import Icon from "../icon/icon.vue";
import Tabs from "../tabs/tabs.vue";
import TabPane from "../tabs/pane.vue";
