<template>
    <div class="ivu-city" :class="classes" ref="city">
        <Dropdown trigger="custom" :visible="visible" :transfer="transfer" placement="bottom-start" :transfer-class-name="transferClasses" @on-visible-change="handleVisibleChange" @on-clickoutside="handleClickOutside">
            <div class="ivu-city-rel" @click.prevent.stop="handleToggleOpen">
                <input type="hidden" :name="name" :value="currentValue">
                <slot>
                    <span>{{ codeToName }}</span>
                    <Icon type="ios-close-circle" class="ivu-city-arrow" v-show="showCloseIcon" @click.stop="clearSelect"></Icon>
                    <Icon type="ios-arrow-down" class="ivu-city-arrow"></Icon>
                </slot>
            </div>
            <template #list>
                <DropdownMenu @click.stop>
                    <div class="ivu-city-drop">
                        <div class="ivu-city-drop-cities" v-if="cities.length">
                            <span v-for="item in relCities" :key="item.n" @click="handleChangeValue(item.c)">{{ item.n }}</span>
                        </div>
                        <div class="ivu-city-drop-menu">
                            <div class="ivu-city-drop-type">
                                <RadioGroup v-model="listType" type="button" size="small">
                                    <Radio label="province">按省份</Radio>
                                    <Radio label="city">按城市</Radio>
                                </RadioGroup>
                            </div>
                            <div class="ivu-city-drop-search">
                                <Select v-model="queryCity" filterable size="small" transfer :placeholder="searchPlaceholder" @on-change="handleSelect">
                                    <Option v-for="item in allCities" :value="item.c" :key="item.c">{{ item.n }}</Option>
                                </Select>
                            </div>
                        </div>
                        <div class="ivu-city-drop-list" v-if="listType === 'province'">
                            <div class="ivu-city-drop-list-letter">
                                <Tag @click="handleClickLetter(item.n)" type="border" :fade="false" v-for="item in provinceList" :key="item.n">{{ item.n }}</Tag>
                            </div>
                            <div class="ivu-city-drop-list-main" ref="list">
                                <dl>
                                    <template v-for="item in cityListByProvince" :key="item.p.n">
                                        <dt :class="'ivu-city-' + item.p.l">{{ item.p.n }}：</dt>
                                        <dd>
                                            <li v-for="city in item.c" :key="city.n" @click="handleChangeValue(city.c)">{{ city.n }}</li>
                                        </dd>
                                    </template>
                                </dl>
                            </div>
                        </div>
                        <div class="ivu-city-drop-list" v-if="listType === 'city'">
                            <div class="ivu-city-drop-list-letter">
                                <Tag @click="handleClickLetter(key)" type="border" :fade="false" v-for="(item, key) in cityListByLetter" :key="key">{{ key }}</Tag>
                            </div>
                            <div class="ivu-city-drop-list-main ivu-city-drop-list-main-city" ref="list">
                                <dl>
                                    <template v-for="(item, key) in cityListByLetter" :key="key">
                                        <dt :class="'ivu-city-' + key">{{ key }}：</dt>
                                        <dd>
                                            <li v-for="city in item" :key="city.n" @click="handleChangeValue(city.c)">{{ city.n }}</li>
                                        </dd>
                                    </template>
                                </dl>
                            </div>
                        </div>
                    </div>
                </DropdownMenu>
            </template>
        </Dropdown>
    </div>
</template>
<script>
    import { getCurrentInstance, nextTick } from 'vue';

    import Dropdown from '../dropdown/dropdown.vue';
    import DropdownMenu from '../dropdown/dropdown-menu.vue';
    import Select from '../select/select.vue';
    import Option from '../select/option.vue';
    import Tag from '../tag/tag.vue';
    import Icon from '../icon/icon.vue';
    import RadioGroup from '../radio/radio-group.vue';
    import Radio from '../radio/radio.vue';

    import provinceData from './province.js';
    import cityData from './city.js';

    import { deepCopy, oneOf } from '../../utils/assist.js';
    import mixinsForm from '../../mixins/form';

    function getCityName (name) {
        return name.replace('市', '').replace('地区', '').replace('特别行政区', '');
    }

    function handleGetCities () {
        const cData = deepCopy(cityData);
        const cities = [];
        for (let cid in cData) {
            const city = cData[cid];
            city.n = getCityName(city.n);
            cities.push(city);
        }
        return cities;
    }

    function handleGetCodeByName (cities, name) {
        if (!name) return '';
        const info = cities.find(item => item.n === name);
        if (info) {
            return info.c;
        } else {
            console.error(`[View UI warn]: City name error.`); // eslint-disable-line
            return '';
        }
    }

    function handleGetNameByCode (cities, code) {
        const info = cities.find(item => item.c === code);
        return info.n;
    }

    export default {
        name: 'City',
        mixins: [ mixinsForm ],
        components: { Dropdown, DropdownMenu, Select, Option, Tag, Icon, RadioGroup, Radio },
        emits: ['on-change', 'update:modelValue'],
        props: {
            modelValue: {
                type: String
            },
            // value 是否使用名称，而不是 code
            useName: {
                type: Boolean,
                default: false
            },
            // 预设城市
            cities: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            // 是否显示后缀，开启则显示北京市，否则显示北京
            showSuffix: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.size === '' ? 'default' : global.$VIEWUI.size;
                }
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            name: {
                type: String
            },
            elementId: {
                type: String
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            searchPlaceholder: {
                type: String,
                default: '输入城市名称搜索'
            },
            transferClassName: {
                type: String
            }
        },
        data () {
            const allCities = handleGetCities();
            const value = this.useName ? handleGetCodeByName(allCities, this.modelValue) : this.modelValue;

            return {
                currentValue: value,
                visible: false,
                provinceList: [],
                cityListByProvince: [],
                cityListByLetter: {},
                allCities: allCities, // 全量城市，用于搜索
                listType: 'province',  // province || city
                queryCity: '',  // 搜索词
            };
        },
        watch: {
            modelValue (val) {
                const value = this.useName ? handleGetCodeByName(this.allCities, val) : val;
                this.currentValue = value;
            }
        },
        computed: {
            showCloseIcon () {
                return this.currentValue && this.clearable && !this.itemDisabled;
            },
            classes () {
                return [
                    {
                        ['ivu-city-show-clear']: this.showCloseIcon,
                        [`ivu-city-size-${this.size}`]: !!this.size,
                        ['ivu-city-visible']: this.visible,
                        ['ivu-city-disabled']: this.itemDisabled
                    }
                ];
            },
            transferClasses () {
                let classes = 'ivu-city-transfer';
                if (this.transferClassName) classes += ` ${this.transferClassName}`;

                return classes;
            },
            // 从预设的 cities code 转为具体数据
            relCities () {
                const cities = [];
                if (this.cities.length) {
                    this.cities.forEach(item => {
                        const newItem = cityData[item];
                        newItem.n = getCityName(newItem.n);
                        cities.push(newItem);
                    });
                }

                return cities;
            },
            // cid 转城市名
            codeToName () {
                if (!this.currentValue) return this.placeholder;
                const n = cityData[this.currentValue].n;
                return this.showSuffix ? n : getCityName(n);
            }
        },
        methods: {
            handleSelect (val) {
                if (val) {
                    this.handleChangeValue(val);
                    nextTick(() => {
                        this.queryCity = '';
                    });
                }
            },
            handleChangeValue (val) {
                this.currentValue = val;
                this.visible = false;
                const value = this.useName ? handleGetNameByCode(this.allCities, val) : val;
                this.$emit('update:modelValue', value);
                this.$emit('on-change', cityData[val]);
                this.handleFormItemChange('change', val);
            },
            handleClickLetter (l) {
                let letter = l;
                if (letter === '直辖市') letter = 'Z1';
                else if (letter === '港澳') letter = 'Z2';

                const className = `.ivu-city-${letter}`;
                const $list = this.$refs.list;

                const $letter = $list.querySelectorAll(className)[0];
                const offsetTop = $letter.offsetTop;
                const listTop = $list.offsetTop;

                $list.scrollTop = offsetTop - listTop;
            },
            clearSelect () {
                if (this.itemDisabled) return false;
                // todo
            },
            handleToggleOpen () {
                if (this.itemDisabled) return false;
                this.visible = !this.visible;
            },
            handleVisibleChange (visible) {
                this.visible = visible;
            },
            handleClickOutside (e) {
                if (this.$refs.city.contains(e.target)) return;
                this.visible = false;
            },
            handleGetProvinceByLetter () {
                const provinces = {
                    A: {
                        n: 'A',  // 省的首字母
                        p: [],  // 省数据
                        c: []  // 该首字母下的城市数据
                    },
                    F: {
                        n: 'F',
                        p: [],
                        c: []
                    },
                    G: {
                        n: 'G',
                        p: [],
                        c: []
                    },
                    H: {
                        n: 'H',
                        p: [],
                        c: []
                    },
                    J: {
                        n: 'J',
                        p: [],
                        c: []
                    },
                    L: {
                        n: 'L',
                        p: [],
                        c: []
                    },
                    N: {
                        n: 'N',
                        p: [],
                        c: []
                    },
                    Q: {
                        n: 'Q',
                        p: [],
                        c: []
                    },
                    S: {
                        n: 'S',
                        p: [],
                        c: []
                    },
                    T: {
                        n: 'T',
                        p: [],
                        c: []
                    },
                    X: {
                        n: 'X',
                        p: [],
                        c: []
                    },
                    Y: {
                        n: 'Y',
                        p: [],
                        c: []
                    },
                    Z: {
                        n: 'Z',
                        p: [],
                        c: []
                    },
                    Z1: {
                        n: '直辖市',
                        p: [],
                        c: []
                    },
                    Z2: {
                        n: '港澳',
                        p: [],
                        c: []
                    },
                };

                for (let c in provinceData) {
                    const item = provinceData[c];
                    provinces[item.l].p.push(item);
                }
                this.provinceList = provinces;
            },
            handleGetCityByProvince () {
                const provinceList = deepCopy(this.provinceList);
                const cityListByProvince = [];
                const cData = deepCopy(cityData);

                // 直辖市、港澳
                const otherCities = [
                    {
                        p: {
                            n: '直辖市',
                            p: '86',
                            l: 'Z1'
                        },
                        c: []
                    },
                    {
                        p: {
                            n: '港澳',
                            p: '86',
                            l: 'Z2'
                        },
                        c: []
                    }
                ];

                for (let letter in provinceList) {
                    const letterProvince = provinceList[letter];

                    for (let i = 0; i < letterProvince.p.length; i++) {
                        const province = letterProvince.p[i];
                        const pid = province.c;

                        const provinceCities = {
                            p: province,
                            c: []
                        };

                        for (let cid in cData) {
                            const city = cData[cid];
                            city.n = getCityName(city.n);

                            if (pid === city.p) {
                                provinceCities.c.push(city);
                            }
                        }

                        if (letter === 'Z1') {
                            otherCities[0].c.push(cData[pid]);
                        } else if (letter === 'Z2') {
                            otherCities[1].c.push(cData[pid]);
                        } else {
                            cityListByProvince.push(provinceCities);
                        }
                    }
                }

                this.cityListByProvince = cityListByProvince.concat(otherCities);
            },
            handleGetCityByLetter () {
                const cData = deepCopy(cityData);
                const cityListByLetter = {
                    A: [],
                    B: [],
                    C: [],
                    D: [],
                    E: [],
                    F: [],
                    G: [],
                    H: [],
                    J: [],
                    K: [],
                    L: [],
                    M: [],
                    N: [],
                    P: [],
                    Q: [],
                    R: [],
                    S: [],
                    T: [],
                    W: [],
                    X: [],
                    Y: [],
                    Z: []
                };

                for (let cid in cData) {
                    const city = cData[cid];
                    city.n = getCityName(city.n);
                    cityListByLetter[city.l].push(city);
                }

                this.cityListByLetter = cityListByLetter;
            }
        },
        created () {
            this.handleGetProvinceByLetter();
            this.handleGetCityByProvince();
            this.handleGetCityByLetter();
        }
    };
</script>
