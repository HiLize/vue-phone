<template>
    <navTemplate navbarTitle='搜索' :navbarLeftClick="onCancel" :hasVtabber='false'>
        <div class="search">
            <!-- 搜索框 -->
            <div class="input">
                <div class="search-text">
                    <div class="search-info">
                        <i class="van-icon van-icon-search" />
                        <div class="search-input">
                            <input v-model="inputValue" type="type" autocomplete="off" placeholder="活动ID/活动名称" @input="inputOnChange($event)">
                            <i class="van-icon van-icon-clear van-field__clear" :style="inputValue ? '' : 'display: none'" @click="clearInput"/>
                        </div>
                    </div>
                </div>
                <div class="search-cancel" @click="onCancel"><span>取消</span></div>
            </div>
            
            <!-- 最近搜索 -->
            <div  class="wrapper" v-if="inputValue === ''">
                <div class="recentlySearch">
                    <div class="recentlySearchTitle">
                        <span>最近搜索</span>
                        <i class="van-icon van-icon-delete van-field__delete" @click="onCancel"/>
                    </div>
                    <p v-for="(item,i) in recentlyData" :key='i'  @click="searchByKeyword(item)">
                        {{item}}
                    </p>
                </div>
            </div>

            <!-- 搜索联想 -->
            <div  class="wrapper" v-else-if="inputValue !== ''">
                <div class="connectSearch">
                    <div class='connectInfo' v-for="(info, i) in connectSearchData" :key="i" @click="searchByKeyword(info)">
                        {{info.first}}<span class='match'>{{info.match}}</span>{{info.last}}
                    </div>
                </div>
            </div>
            
            <!-- 搜索列表 -->
            <div class="wrapper"  v-else-if='activities.length'>
                <ul class='list'>
                    <li class='list-title'>活动</li>
                    <!-- <li class='list-li clear' @click='toActivityDetail(item.wid)' v-for="(item,i) in activities" :key='i'>
                        <img :src="item.poster" alt="" class='fl list-img'>
                        <div class='fl list-info'>
                            <h4>
                                <span>{{ item.topic }}</span>
                                <i style='background: #6AA1FF; '>校</i>
                                <i>思</i>
                            </h4>
                            <p><img src="@/assets/img/school.png" class='icon-img'>{{ item.organizer }}</p>
                            <p><img src="@/assets/img/time.png" class='icon-img'>{{ item.hostTime }}</p>
                            <p><img src="@/assets/img/place.png" class='icon-img'>{{ item.hostPlace }}</p>
                        </div>
                    </li> -->
                    <li class='list-li clear'>
                        <img src="@/assets/img/active01.png" class='fl list-img'>
                        <div class='fl list-info'>
                            <h4>
                                <span> item.topic </span>
                                <i style='background: #6AA1FF; '>校</i>
                                <i>思</i>
                            </h4>
                            <p><img src="@/assets/img/school.png" class='icon-img'> item.organizer </p>
                            <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                            <p><img src="@/assets/img/place.png" class='icon-img'> item.hostPlace </p>
                        </div>
                    </li>
                    <li class='list-li clear'>
                        <img src="@/assets/img/active01.png" class='fl list-img'>
                        <div class='fl list-info'>
                            <h4>
                                <span> item.topic </span>
                                <i style='background: #6AA1FF; '>校</i>
                                <i>思</i>
                            </h4>
                            <p><img src="@/assets/img/school.png" class='icon-img'> item.organizer </p>
                            <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                            <p><img src="@/assets/img/place.png" class='icon-img'> item.hostPlace </p>
                        </div>
                    </li>
                    <li class='list-li clear'>
                        <img src="@/assets/img/active01.png" class='fl list-img'>
                        <div class='fl list-info'>
                            <h4>
                                <span> item.topic </span>
                                <i style='background: #6AA1FF; '>校</i>
                                <i>思</i>
                            </h4>
                            <p><img src="@/assets/img/school.png" class='icon-img'> item.organizer </p>
                            <p><img src="@/assets/img/time.png" class='icon-img'> item.hostTime </p>
                            <p><img src="@/assets/img/place.png" class='icon-img'> item.hostPlace </p>
                        </div>
                    </li>
                </ul>
            </div>
            <empty v-else label='暂无相关活动' subLabel='您可已尝试重新输入搜索词'>
                <img src="@/assets/img/notSearch-active@2x.png" class='notFindIcon'>
            </empty>

        </div>
    </navTemplate>
</template>

<script>
import { getActivities } from '@/services/index'
import empty from '@/components/empty'
import navTemplate from '@/components/navTemplate'

export default {
    components: { navTemplate, empty },
    data(){
        return {
            search: '',
            activities: [],
            inputValue: '',
            recentlyData: [
                '孟美岐',
                '王菊',
                '校园篮球赛',
                '陈霖',
                '创造101'
            ],
            connectSearchData: [
                {first: '', match: '吴', last: '侬软语忆乡音'},
                {first: '', match: '吴', last: '世勋教授系列讲座'},
                {first: '', match: '吴', last: '一凡'},
                {first: '什么什么', match: '吴一凡', last: ''}
            ]
        }
    },   
    mounted(){
        // 首页活动列表信息
        getActivities(this.search, '', '', '').then(data => {
            console.log(data)
            // this.activities = data
        })
    }, 
    methods: {
        onSearch(){
            console.log(1111)
        },
        onCancel(){
            this.$router.go(-1)
        },
        toActivityDetail(){
            this.$router.push('/activityDetail')
        },
        inputOnChange(event) {
            this.inputValue = event.target.value
        },
        clearInput() {
            this.inputValue = ''
        },
        searchByKeyword(keyword) {
            console.log(keyword)
        }
    }
}
</script>




<style scoped lang='scss'>
.search {
    background-color: #F2F7FB;
    height: 100%;
    overflow: auto;

    // 搜索框样式
    .input {
        position: fixed;
        // top: 0;
        left: 0;
        width: 100%;
        height: 4.5rem;
        background-color: #ffffff; 
        box-shadow: inset 0 -0.5px 0 0 #EEEEEE;
        padding: 0 1.25rem;
        box-sizing: border-box;
        // flex 布局
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .search-text {
            // flex: none;
            flex-basis: 100%;
            height: 2.5rem;
            border-radius: 1.25rem;
            background-color: #F2F7FB;
            .search-info {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 100%;
                padding: 0 0.625rem;
                box-sizing: border-box;
            }
            .search-info i{
                color:  #959FA9;
                font-size: 0.75rem;
                font-weight: bold;
            }
            .search-input {
                position: relative;
                display: flex;
                display: -webkit-flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 0 4px;
                box-sizing: border-box;
                font-size: 0.875rem;
                color: #4F5C69;
                input[type=type] {
                    border: 0;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    resize: none;
                    display: block;
                    box-sizing: border-box;
                    background-color: transparent;
                    color: #4F5C69;
                    font-size: 0.875rem;
                }
                i {
                    flex: none;
                    flex-basis: 1.25rem;
                    padding: 0;
                    font-size: 0.775rem;
                }
            }
        }
        .search-cancel {
            flex: none;
            flex-basis: 3rem;
            font-size: 0.875rem;
            color: #0080ff;
        }
        .search-cancel span {
            display: inline-block;
            width: 100%;
            text-align: right;
        }
    }

    // 搜索列表样式
    .wrapper {
        padding-top: 4.5rem;
        background-color: #ffffff;
        @mixin searchContainer {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            align-content: space-around;
            align-items: center;
            box-sizing: border-box;
            font-size: 0.875rem;
            color: #4F5C69;
        }
        // 最近搜索
        .recentlySearch {
            @include searchContainer;
            padding: 0.5rem 0.75rem;            
            .recentlySearchTitle {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 1.25rem;
                line-height: 1.25rem;
                margin: 0.5rem;
                color: #959FA9;
            }
            p {
                height: 2rem;
                line-height: 2rem;
                width: auto;
                padding:0 1rem;
                margin: 0.5rem;
                border-radius: 1.25rem;
                background-color: #F2F7FB;
            }
            
        }
        // 搜索联想
        .connectSearch {
            @include searchContainer;
            padding: 0 0.75rem;
            .connectInfo {
                width: 100%;
                height: 3.125rem;
                line-height: 3.125rem;
                box-sizing: border-box;
                padding: 0 0.5rem;
                box-shadow: inset 0 -0.5px 0 0 #EEEEEE;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                .match {
                    color: #0080ff;
                }
            }
        }

        // 搜索结果列表
        .list {
            width: 100%;
            box-sizing: border-box;
            margin: 0 auto;
            padding: 1.25rem 1.25rem 0 1.25rem;
            .list-title {
               padding-bottom: 1rem;
               font-size: 0.875rem;
               color: #959FA9; 
            }
            .list-li {
                padding-bottom: 1.25rem;
                .list-img {
                    width: 6.75rem;
                    height: 6.75rem;
                    border-radius: 1.25rem;
                    margin-right: 1rem;
                    border: 1px solid #eee;
                }
                .list-info {
                    max-width: 11.25rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    h4 {
                        font-size: 1.25rem;
                        color: #1D2227;
                        margin: .1rem 0 .5rem;
                        i {
                            display: inline-block;
                            width: 1.25rem;
                            height: 1.25rem;
                            text-align: center;
                            line-height: 1.125rem;
                            background: #FFB56A;
                            border-radius: .25rem;
                            color: #fff;
                            font-size: .75rem;
                            margin: 0 .1rem;
                            vertical-align: middle;
                        }
                        
                    }
                    .icon-img {
                        width: .625rem;
                        height: .625rem;
                        margin-right: .5rem;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    p {
                        font-size: .65rem;
                        color: #959FA9;
                        line-height: 1.125rem;
                    }
                }
            }
        }
    
        .no-activity {
            width: 100%;
            height: 7.5rem;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: .75rem;
            color: #959FA9;
            p {
                margin: .625rem;
                color: #2d2f33;
            }
        }
    }
    .notFindIcon {
        width: 8.1875rem;
        height: 6.625rem;
    }
    
}


</style>

