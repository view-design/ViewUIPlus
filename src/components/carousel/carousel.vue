<template>
    <div :class="classes">
        <button type="button" :class="arrowClasses" class="left" @click="arrowEvent(-1)">
            <Icon type="ios-arrow-back"></Icon>
        </button>
        <div :class="[prefixCls + '-list']">
            <div :class="[prefixCls + '-track', showCopyTrack ? '' : 'higher']" :style="trackStyles" ref="originTrack" @click="handleClick('currentIndex')">
                <slot></slot>
            </div>
            <div :class="[prefixCls + '-track', showCopyTrack ? 'higher' : '']" :style="copyTrackStyles" ref="copyTrack" v-if="loop" @click="handleClick('copyTrackIndex')">
            </div>
        </div>
        <button type="button" :class="arrowClasses" class="right" @click="arrowEvent(1)">
            <Icon type="ios-arrow-forward"></Icon>
        </button>
        <ul :class="dotsClasses">
            <template v-for="n in slides.length" :key="n">
                <li :class="[n - 1 === currentIndex ? prefixCls + '-active' : '']"
                    @click="dotsEvent('click', n - 1)"
                    @mouseover="dotsEvent('hover', n - 1)">
                    <button type="button" :class="[radiusDot ? 'radius' : '']"></button>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    import { nextTick } from 'vue';
    import Icon from '../icon/icon.vue';
    import { getStyle, oneOf } from '../../utils/assist';
    import { on, off } from '../../utils/dom';
    import { isClient } from '../../utils/index';

    const prefixCls = 'ivu-carousel';

    export default {
        name: 'Carousel',
        provide () {
            return {
                CarouselInstance: this
            }
        },
        components: { Icon },
        emits: ['on-change', 'on-click', 'update:modelValue'],
        props: {
            arrow: {
                type: String,
                default: 'hover',
                validator (value) {
                    return oneOf(value, ['hover', 'always', 'never']);
                }
            },
            autoplay: {
                type: Boolean,
                default: false
            },
            autoplaySpeed: {
                type: Number,
                default: 2000
            },
            loop: {
                type: Boolean,
                default: false
            },
            easing: {
                type: String,
                default: 'ease'
            },
            dots: {
                type: String,
                default: 'inside',
                validator (value) {
                    return oneOf(value, ['inside', 'outside', 'none']);
                }
            },
            radiusDot: {
                type: Boolean,
                default: false
            },
            trigger: {
                type: String,
                default: 'click',
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                }
            },
            modelValue: {
                type: Number,
                default: 0
            },
            height: {
                type: [String, Number],
                default: 'auto',
                validator (value) {
                    return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                listWidth: 0,
                trackWidth: 0,
                trackOffset: 0,
                trackCopyOffset: 0,
                showCopyTrack: false,
                slides: [],
                slideInstances: [],
                timer: null,
                ready: false,
                currentIndex: this.modelValue,
                trackIndex: this.modelValue,
                copyTrackIndex: this.modelValue,
                hideTrackPos: -1, // 默认左滑
                carouselItemList: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            trackStyles () {
                // #6076
                const visibleStyle = this.trackIndex === -1 ? 'hidden' : 'visible';
                return {
                    width: `${this.trackWidth}px`,
                    transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
                    transition: `transform 500ms ${this.easing}`,
                    visibility : visibleStyle
                };
            },
            copyTrackStyles () {
                return {
                    width: `${this.trackWidth}px`,
                    transform: `translate3d(${-this.trackCopyOffset}px, 0px, 0px)`,
                    transition: `transform 500ms ${this.easing}`,
                    position: 'absolute',
                    // top: 0
                };
            },
            arrowClasses () {
                return [
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-${this.arrow}`
                ];
            },
            dotsClasses () {
                return [
                    `${prefixCls}-dots`,
                    `${prefixCls}-dots-${this.dots}`
                ];
            }
        },
        methods: {
            findChild (cb) {
                if (this.carouselItemList.length) {
                    this.carouselItemList.forEach(item => {
                        cb(item.carouselItem);
                    });
                }
            },
            // copy trackDom
            initCopyTrackDom () {
                nextTick(() => {
                    this.$refs.copyTrack.innerHTML = this.$refs.originTrack.innerHTML;
                });
            },
            updateSlides (init) {
                let slides = [];
                let index = 1;

                this.findChild((child) => {
                    slides.push({
                        $el: child.$el
                    });
                    child.index = index++;
                    if (init) {
                        this.slideInstances.push(child);
                    }
                });
                this.slides = slides;
                this.updatePos();
            },
            updatePos () {
                this.findChild((child) => {
                    child.width = this.listWidth;
                    child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
                });

                this.trackWidth = (this.slides.length || 0) * this.listWidth;
            },
            // use when slot changed
            slotChange () {
                nextTick(() => {
                    this.slides = [];
                    this.slideInstances = [];

                    this.updateSlides(true, true);
                    this.updatePos();
                    this.updateOffset();
                });
            },
            handleResize () {
                this.listWidth = parseInt(getStyle(this.$el, 'width'));
                this.updatePos();
                this.updateOffset();
            },
            updateTrackPos (index) {
                if (this.showCopyTrack) {
                    this.trackIndex = index;
                } else {
                    this.copyTrackIndex = index;
                }
            },
            updateTrackIndex (index) {
                if (this.showCopyTrack) {
                    this.copyTrackIndex = index;
                } else {
                    this.trackIndex = index;
                }
                this.currentIndex = index;
            },
            add (offset) {
                // 获取单个轨道的图片数
                let slidesLen = this.slides.length;
                // 如果是无缝滚动，需要初始化双轨道位置
                if (this.loop) {
                    if (offset > 0) {
                        // 初始化左滑轨道位置
                        this.hideTrackPos = -1;
                    } else {
                        // 初始化右滑轨道位置
                        this.hideTrackPos = slidesLen;
                    }
                    this.updateTrackPos(this.hideTrackPos);
                }
                // 获取当前展示图片的索引值
                const oldIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
                let index = oldIndex + offset;
                while (index < 0) index += slidesLen;
                if (((offset > 0 && index === slidesLen) || (offset < 0 && index === slidesLen - 1)) && this.loop) {
                    // 极限值（左滑：当前索引为总图片张数， 右滑：当前索引为总图片张数 - 1）切换轨道
                    this.showCopyTrack = !this.showCopyTrack;
                    this.trackIndex += offset;
                    this.copyTrackIndex += offset;
                } else {
                    if (!this.loop) index = index % this.slides.length;
                    this.updateTrackIndex(index);
                }
                this.currentIndex = index === this.slides.length ? 0 : index;
                this.$emit('on-change', oldIndex, this.currentIndex);
                this.$emit('update:modelValue', this.currentIndex);
            },
            arrowEvent (offset) {
                this.setAutoplay();
                this.add(offset);
            },
            dotsEvent (event, n) {
                let curIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
                const oldCurrentIndex = this.currentIndex;
                if (event === this.trigger && curIndex !== n) {
                    this.updateTrackIndex(n);
                    this.$emit('on-change', oldCurrentIndex, this.currentIndex);
                    this.$emit('update:modelValue', n);
                    // Reset autoplay timer when trigger be activated
                    this.setAutoplay();
                }
            },
            setAutoplay () {
                if (!isClient) return;
                window.clearInterval(this.timer);
                if (this.autoplay) {
                    this.timer = window.setInterval(() => {
                        this.add(1);
                    }, this.autoplaySpeed);
                }
            },
            updateOffset () {
                nextTick(() => {
                    /* hack: revise copyTrack offset (1px) */
                    let ofs = this.copyTrackIndex > 0 ? -1 : 1;
                    this.trackOffset = this.trackIndex * this.listWidth;
                    this.trackCopyOffset = this.copyTrackIndex * this.listWidth + ofs;
                });
            },
            handleClick (type) {
                this.$emit('on-click', this[type]);
            }
        },
        watch: {
            autoplay () {
                this.setAutoplay();
            },
            autoplaySpeed () {
                this.setAutoplay();
            },
            trackIndex () {
                this.updateOffset();
            },
            copyTrackIndex () {
                this.updateOffset();
            },
            height () {
                this.updatePos();
            },
            modelValue (val) {
//                this.currentIndex = val;
//                this.trackIndex = val;
                this.updateTrackIndex(val);
                this.setAutoplay();
            }
        },
        mounted () {
            this.updateSlides(true);
            this.handleResize();
            this.setAutoplay();
            on(window, 'resize', this.handleResize);
        },
        beforeUnmount () {
            off(window, 'resize', this.handleResize);
        }
    };
</script>
