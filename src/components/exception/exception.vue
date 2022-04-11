<template>
    <div class="ivu-exception">
        <div class="ivu-exception-img">
            <div class="ivu-exception-img-element" :style="{ 'background-image': 'url(' + imgPath + ')' }"></div>
        </div>
        <div class="ivu-exception-content">
            <h1><slot name="title">{{ titleText }}</slot></h1>
            <div class="ivu-exception-content-desc"><slot name="desc">{{ descText }}</slot></div>
            <div class="ivu-exception-content-actions">
                <slot name="actions"><Button :to="redirect" type="primary" size="large">{{ backText }}</Button></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import Button from '../button/button.vue';

    import { oneOf } from '../../utils/assist.js';
    import typeConfig from './typeConfig.js';

    export default {
        name: 'Exception',
        components: { Button },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['403', '404', '500', 403, 404, 500]);
                },
                default: '404'
            },
            title: {
                type: String
            },
            desc: {
                type: String
            },
            img: {
                type: String
            },
            imgColor: {
                type: Boolean,
                default: false
            },
            backText: {
                type: String,
                default: '返回首页'
            },
            redirect: {
                type: String,
                default: '/'
            }
        },
        computed: {
            imgPath () {
                return this.img ? this.img : this.imgColor ? typeConfig[this.type].imgColor : typeConfig[this.type].img;
            },
            titleText () {
                return this.title ? this.title : typeConfig[this.type].title;
            },
            descText () {
                return this.desc ? this.desc : typeConfig[this.type].desc;
            }
        }
    };
</script>
