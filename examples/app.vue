<style lang="less">
    @import "../src/styles/index.less";
    .container-nav{
        &>span{
            display: inline-block;
            margin-right: 12px;
        }
    }
</style>
<template>
    <div id="app" class="container">
        <div class="container-nav">
            <span><router-link to="/split">Split</router-link></span>
            <span><router-link to="/layout">Layout</router-link></span>
            <span><router-link to="/affix">Affix</router-link></span>
            <span><router-link to="/anchor">Anchor</router-link></span>
            <span><router-link to="/grid">Grid</router-link></span>
            <span><router-link to="/button">Button</router-link></span>
            <span><router-link to="/input">Input</router-link></span>
            <span><router-link to="/radio">Radio</router-link></span>
            <span><router-link to="/checkbox">Checkbox</router-link></span>
            <span><router-link to="/steps">Steps</router-link></span>
            <span><router-link to="/timeline">Timeline</router-link></span>
            <span><router-link to="/switch">Switch</router-link></span>
            <span><router-link to="/alert">Alert</router-link></span>
            <span><router-link to="/badge">Badge</router-link></span>
            <span><router-link to="/tag">Tag</router-link></span>
            <span><router-link to="/input-number">InputNumber</router-link></span>
            <span><router-link to="/progress">Progress</router-link></span>
            <span><router-link to="/upload">Upload</router-link></span>
            <span><router-link to="/collapse">Collapse</router-link></span>
            <span><router-link to="/carousel">Carousel</router-link></span>
            <span><router-link to="/card">Card</router-link></span>
            <span><router-link to="/tree">Tree</router-link></span>
            <span><router-link to="/rate">Rate</router-link></span>
            <span><router-link to="/circle">Circle</router-link></span>
            <span><router-link to="/tabs">Tabs</router-link></span>
            <span><router-link to="/tooltip">Tooltip</router-link></span>
            <span><router-link to="/poptip">Poptip</router-link></span>
            <span><router-link to="/slider">Slider</router-link></span>
            <span><router-link to="/dropdown">Dropdown</router-link></span>
            <span><router-link to="/breadcrumb">Breadcrumb</router-link></span>
            <span><router-link to="/menu">Menu</router-link></span>
            <span><router-link to="/spin">Spin</router-link></span>
            <span><router-link to="/cascader">Cascader</router-link></span>
            <span><router-link to="/select">Select</router-link></span>
            <span><router-link to="/backtop">Backtop</router-link></span>
            <span><router-link to="/page">Page</router-link></span>
            <span><router-link to="/transfer">Transfer</router-link></span>
            <span><router-link to="/date">Date</router-link></span>
            <span><router-link to="/form">Form</router-link></span>
            <span><router-link to="/table">Table</router-link></span>
            <span><router-link to="/loading-bar">LoadingBar</router-link></span>
            <span><router-link to="/modal">Modal</router-link></span>
            <span><router-link to="/message">Message</router-link></span>
            <span><router-link to="/notice">Notice</router-link></span>
            <span><router-link to="/avatar">Avatar</router-link></span>
            <span><router-link to="/color-picker">ColorPicker</router-link></span>
            <span><router-link to="/auto-complete">AutoComplete</router-link></span>
            <span><router-link to="/scroll">Scroll</router-link></span>
            <span><router-link to="/divider">Divider</router-link></span>
            <span><router-link to="/time">Time</router-link></span>
            <span><router-link to="/cell">Cell</router-link></span>
            <span><router-link to="/drawer">Drawer</router-link></span>
            <span><router-link to="/icon">Icon</router-link></span>
            <span><router-link to="/list">List</router-link></span>
            <span><router-link to="/skeleton">Skeleton</router-link></span>
            <span><router-link to="/typography">Typography</router-link></span>
            <Divider></Divider>
            <span><router-link to="/grid-component">Grid</router-link></span>
            <span><router-link to="/description-list">DescriptionList</router-link></span>
            <span><router-link to="/page-header">PageHeader</router-link></span>
            <span><router-link to="/tag-select">TagSelect</router-link></span>
            <span><router-link to="/login">Login</router-link></span>
            <span><router-link to="/notification">Notification</router-link></span>
            <span><router-link to="/calendar">Calendar</router-link></span>
            <span><router-link to="/auth">Auth</router-link></span>
            <span><router-link to="/ellipsis">Ellipsis</router-link></span>
            <span><router-link to="/table-paste">TablePaste</router-link></span>
            <span><router-link to="/avatar-list">AvatarList</router-link></span>
            <span><router-link to="/count-down">CountDown</router-link></span>
            <span><router-link to="/count-up">CountUp</router-link></span>
            <span><router-link to="/numeral">Numeral</router-link></span>
            <span><router-link to="/number-info">NumberInfo</router-link></span>
            <span><router-link to="/trend">Trend</router-link></span>
            <span><router-link to="/footer-toolbar">FooterToolbar</router-link></span>
            <span><router-link to="/global-footer">GlobalFooter</router-link></span>
            <span><router-link to="/word-count">WordCount</router-link></span>
            <span><router-link to="/result">Result</router-link></span>
            <span><router-link to="/exception">Exception</router-link></span>
            <span><router-link to="/tree-select">TreeSelect</router-link></span>
            <span><router-link to="/city">City</router-link></span>
            <span><router-link to="/v-style">v-style</router-link></span>
            <span><router-link to="/v-resize">v-resize</router-link></span>
            <span><router-link to="/v-line-clamp">v-line-clamp</router-link></span>
            <span><router-link to="/copy">$Copy</router-link></span>
            <span><router-link to="/scroll-top">$ScrollTop</router-link></span>
            <span><router-link to="/scroll-into-view">$ScrollIntoView</router-link></span>
            <span><router-link to="/image">Image</router-link></span>
            <span><router-link to="/space">Space</router-link></span>
        </div>
        <div style="margin: 50px">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>
