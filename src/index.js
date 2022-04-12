/*
 * View UI Plus
 * https://www.iviewui.com/
 *
 * Copyright © ViewDeign 2019-present
 * Released under the MIT license
 *
 */
import Affix from './components/affix';
import Alert from './components/alert';
import Anchor from './components/anchor';
import AnchorLink from './components/anchor-link';
import Auth from './components/auth';
import AutoComplete from './components/auto-complete';
import Avatar from './components/avatar';
import AvatarList from './components/avatar-list';
import BackTop from './components/back-top';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import BreadcrumbItem from './components/breadcrumb-item';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Calendar from './components/calendar';
import Captcha from './components/captcha';
import Card from './components/card';
import Carousel from './components/carousel';
import CarouselItem from './components/carousel-item';
import Cascader from './components/cascader';
import Cell from './components/cell';
import CellGroup from './components/cell-group';
import Checkbox from './components/checkbox';
import CheckboxGroup from './components/checkbox-group';
import Circle from './components/circle';
import Col from './components/col';
import Collapse from './components/collapse';
import ColorPicker from './components/color-picker';
import Content from './components/content';
import Copy from './components/copy';
import CountDown from './components/count-down';
import CountUp from './components/count-up';
import DatePicker from './components/date-picker';
import Description from './components/description';
import DescriptionList from './components/description-list';
import Divider from './components/divider';
import Drawer from './components/drawer';
import Dropdown from './components/dropdown';
import DropdownItem from './components/dropdown-item';
import DropdownMenu from './components/dropdown-menu';
import Ellipsis from './components/ellipsis';
import Email from './components/email';
import Exception from './components/exception';
import Footer from './components/footer';
import FooterToolbar from './components/footer-toolbar';
import Form from './components/form';
import FormItem from './components/form-item';
import GlobalFooter from './components/global-footer';
import Grid from './components/grid';
import GridItem from './components/grid-item';
import Header from './components/header';
import Icon from './components/icon';
import Input from './components/input';
import InputNumber from './components/input-number';
import Layout from './components/layout';
import List from './components/list';
import ListItem from './components/list-item';
import ListItemMeta from './components/list-item-meta';
import LoadingBar from './components/loading-bar';
import Login from './components/login';
import Menu from './components/menu';
import MenuGroup from './components/menu-group';
import MenuItem from './components/menu-item';
import Message from './components/message';
import Mobile from './components/mobile';
import Modal from './components/modal';
import Notice from './components/notice';
import Notification from './components/notification';
import NotificationItem from './components/notification-item';
import NotificationTab from './components/notification-tab';
import NumberInfo from './components/number-info';
import Numeral from './components/numeral';
import Option from './components/option';
import OptionGroup from './components/option-group';
import Page from './components/page';
import PageHeader from './components/page-header';
import Panel from './components/panel';
import Password from './components/password';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import RadioGroup from './components/radio-group';
import Rate from './components/rate';
import Result from './components/result';
import Row from './components/row';
import Scroll from './components/scroll';
import ScrollIntoView from './components/scroll-into-view';
import ScrollTop from './components/scroll-top';
import Select from './components/select';
import Sider from './components/sider';
import Slider from './components/slider';
import Spin from './components/spin';
import Split from './components/split';
import Step from './components/step';
import Steps from './components/steps';
import Submenu from './components/submenu';
import Submit from './components/submit';
import Switch from './components/switch';
import Table from './components/table';
import TablePaste from './components/table-paste';
import TabPane from './components/tab-pane';
import Tabs from './components/tabs';
import Tag from './components/tag';
import TagSelect from './components/tag-select';
import TagSelectOption from './components/tag-select-option';
import Time from './components/time';
import Timeline from './components/timeline';
import TimelineItem from './components/timeline-item';
import TimePicker from './components/time-picker';
import Tooltip from './components/tooltip';
import Transfer from './components/transfer';
import Tree from './components/tree';
import Trend from './components/trend';
import Upload from './components/upload';
import UserName from './components/user-name';
import WordCount from './components/word-count';
// import locale from './locale/index';

// directives
import lineClamp from './directives/line-clamp';
import resize from './directives/resize';
import style from './directives/style';

// libraries
import dayjs from 'dayjs';

const components = {
    Affix,
    Alert,
    Anchor,
    AnchorLink,
    Auth,
    AutoComplete,
    Avatar,
    AvatarList,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Calendar,
    Captcha,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Circle,
    Col,
    Collapse,
    ColorPicker,
    Content,
    CountDown,
    CountUp,
    DatePicker,
    Description,
    DescriptionList,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Ellipsis,
    Email,
    Exception,
    Footer,
    FooterToolbar,
    Form,
    FormItem,
    GlobalFooter,
    Grid,
    GridItem,
    Header,
    Icon,
    Input,
    InputNumber,
    Layout,
    List,
    ListItem,
    ListItemMeta,
    LoadingBar,
    Login,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Mobile,
    Modal,
    Notice,
    Notification,
    NotificationItem,
    NotificationTab,
    NumberInfo,
    Numeral,
    Option,
    OptionGroup,
    Page,
    PageHeader,
    Panel,
    Password,
    Poptip,
    Progress,
    Radio,
    RadioGroup,
    Rate,
    Result,
    Row,
    Scroll,
    Select,
    Sider,
    Slider,
    Split,
    Spin,
    Step,
    Steps,
    Submenu,
    Submit,
    Switch,
    Table,
    TablePaste,
    Tabs,
    TabPane,
    Tag,
    TagSelect,
    TagSelectOption,
    Time,
    Timeline,
    TimelineItem,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Trend,
    Upload,
    UserName,
    WordCount
};

const directives = {
    display: style.display,
    width: style.width,
    height: style.height,
    margin: style.margin,
    padding: style.padding,
    font: style.font,
    color: style.color,
    'bg-color': style.bgColor,
    resize,
    'line-clamp': lineClamp
};

const iview = {
    ...components,
    iButton: Button,
    iCircle: Circle,
    iCol: Col,
    iContent: Content,
    iForm: Form,
    iFooter: Footer,
    iHeader: Header,
    iInput: Input,
    iMenu: Menu,
    iOption: Option,
    iProgress: Progress,
    iSelect: Select,
    iSwitch: Switch,
    iTable: Table,
    iTime: Time
};

const install = function(app, opts = {}) {
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    Object.keys(iview).forEach(key => {
        app.component(key, iview[key]);
        // todo i-tag
    });

    Object.keys(directives).forEach(key => {
        app.directive(key, directives[key]);
    });

    app.config.globalProperties.$IVIEW = {
        size: opts.size || '',
        capture: 'capture' in opts ? opts.capture : true,
        transfer: 'transfer' in opts ? opts.transfer : '',
        cell: {
            arrow: opts.cell ? opts.cell.arrow ? opts.cell.arrow : '' : '',
            customArrow: opts.cell ? opts.cell.customArrow ? opts.cell.customArrow : '' : '',
            arrowSize: opts.cell ? opts.cell.arrowSize ? opts.cell.arrowSize : '' : ''
        },
        menu: {
            arrow: opts.menu ? opts.menu.arrow ? opts.menu.arrow : '' : '',
            customArrow: opts.menu ? opts.menu.customArrow ? opts.menu.customArrow : '' : '',
            arrowSize: opts.menu ? opts.menu.arrowSize ? opts.menu.arrowSize : '' : ''
        },
        modal: {
            maskClosable: opts.modal ? 'maskClosable' in opts.modal ? opts.modal.maskClosable : '' : ''
        },
        tabs: {
            closeIcon: opts.tabs ? opts.tabs.closeIcon ? opts.tabs.closeIcon : '' : '',
            customCloseIcon: opts.tabs ? opts.tabs.customCloseIcon ? opts.tabs.customCloseIcon : '' : '',
            closeIconSize: opts.tabs ? opts.tabs.closeIconSize ? opts.tabs.closeIconSize : '' : ''
        },
        select: {
            arrow: opts.select ? opts.select.arrow ? opts.select.arrow : '' : '',
            customArrow: opts.select ? opts.select.customArrow ? opts.select.customArrow : '' : '',
            arrowSize: opts.select ? opts.select.arrowSize ? opts.select.arrowSize : '' : ''
        },
        colorPicker: {
            arrow: opts.colorPicker ? opts.colorPicker.arrow ? opts.colorPicker.arrow : '' : '',
            customArrow: opts.colorPicker ? opts.colorPicker.customArrow ? opts.colorPicker.customArrow : '' : '',
            arrowSize: opts.colorPicker ? opts.colorPicker.arrowSize ? opts.colorPicker.arrowSize : '' : ''
        },
        cascader: {
            arrow: opts.cascader ? opts.cascader.arrow ? opts.cascader.arrow : '' : '',
            customArrow: opts.cascader ? opts.cascader.customArrow ? opts.cascader.customArrow : '' : '',
            arrowSize: opts.cascader ? opts.cascader.arrowSize ? opts.cascader.arrowSize : '' : '',
            itemArrow: opts.cascader ? opts.cascader.itemArrow ? opts.cascader.itemArrow : '' : '',
            customItemArrow: opts.cascader ? opts.cascader.customItemArrow ? opts.cascader.customItemArrow : '' : '',
            itemArrowSize: opts.cascader ? opts.cascader.itemArrowSize ? opts.cascader.itemArrowSize : '' : ''
        },
        tree: {
            arrow: opts.tree ? opts.tree.arrow ? opts.tree.arrow : '' : '',
            customArrow: opts.tree ? opts.tree.customArrow ? opts.tree.customArrow : '' : '',
            arrowSize: opts.tree ? opts.tree.arrowSize ? opts.tree.arrowSize : '' : ''
        },
        datePicker: {
            icon: opts.datePicker ? opts.datePicker.icon ? opts.datePicker.icon : '' : '',
            customIcon: opts.datePicker ? opts.datePicker.customIcon ? opts.datePicker.customIcon : '' : '',
            iconSize: opts.datePicker ? opts.datePicker.iconSize ? opts.datePicker.iconSize : '' : ''
        },
        timePicker: {
            icon: opts.timePicker ? opts.timePicker.icon ? opts.timePicker.icon : '' : '',
            customIcon: opts.timePicker ? opts.timePicker.customIcon ? opts.timePicker.customIcon : '' : '',
            iconSize: opts.timePicker ? opts.timePicker.iconSize ? opts.timePicker.iconSize : '' : ''
        }
    }
    app.config.globalProperties.$Spin = Spin;
    app.config.globalProperties.$Loading = LoadingBar;
    app.config.globalProperties.$Message = Message;
    app.config.globalProperties.$Notice = Notice;
    app.config.globalProperties.$Modal = Modal;
    app.config.globalProperties.$Copy = Copy;
    app.config.globalProperties.$ScrollIntoView = ScrollIntoView;
    app.config.globalProperties.$ScrollTop = ScrollTop;

    app.config.globalProperties.$Date = dayjs;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    // locale: locale.use,
    // i18n: locale.i18n,
    install,
    // Circle,
    // Switch,
    ...components
};

API.lang = (code) => {
    const langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

// module.exports.default = module.exports = API;   // eslint-disable-line no-undef
export default API;
